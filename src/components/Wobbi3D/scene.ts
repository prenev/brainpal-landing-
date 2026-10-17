import * as THREE from "three";

/** Wobbi built from primitives: a cloud of lobes, a face, stubby arms and legs. Colours follow the app art. */
const C = {
	body: 0xc8b8ff,
	limb: 0xa793f0,
	shine: 0xe9e2ff,
	eye: 0x2a2745,
	cheek: 0xf2a8d6,
};

export type Reaction = "hello" | "jump" | "wave" | "breathe" | "cheer";

export interface WobbiHandle {
	react: (r: Reaction) => void;
	dispose: () => void;
}

const mat = (color: number, rough = 0.55) =>
	new THREE.MeshStandardMaterial({
		color,
		roughness: rough,
		metalness: 0,
		emissive: color,
		emissiveIntensity: 0.22,
	});

function buildWobbi() {
	const root = new THREE.Group();
	const body = new THREE.Group();
	root.add(body);

	// The cloud: one core plus lobes around it, a little flatter at the back so the face stays readable.
	const bodyMat = mat(C.body, 0.5);
	const core = new THREE.Mesh(new THREE.SphereGeometry(0.7, 48, 32), bodyMat);
	core.scale.set(1.1, 1, 0.9);
	body.add(core);
	const lobes: [number, number, number][] = [
		[-0.44, 0.62, 0.6],
		[0.44, 0.62, 0.6],
		[-0.92, 0.1, 0.46],
		[0.92, 0.1, 0.46],
		[-0.68, -0.52, 0.46],
		[0.68, -0.52, 0.46],
		[0, -0.74, 0.42],
	];
	for (const [x, y, r] of lobes) {
		const m = new THREE.Mesh(new THREE.SphereGeometry(r, 40, 28), bodyMat);
		m.position.set(x, y, 0);
		m.scale.z = 0.88;
		body.add(m);
	}

	// Glossy highlight on the top-left lobe.
	const shine = new THREE.Mesh(
		new THREE.SphereGeometry(0.16, 20, 14),
		new THREE.MeshBasicMaterial({ color: 0xf1ecff }),
	);
	shine.scale.set(1.5, 0.7, 0.35);
	shine.rotation.z = 0.5;
	shine.position.set(-0.5, 0.92, 0.52);
	body.add(shine);

	// Face
	const face = new THREE.Group();
	face.position.set(0, -0.02, 0.76);
	body.add(face);
	const eyeMat = mat(C.eye, 0.25);
	const eyes: THREE.Group[] = [];
	for (const sx of [-1, 1]) {
		const eye = new THREE.Group();
		eye.position.set(sx * 0.32, 0.1, 0.02);
		const ball = new THREE.Mesh(new THREE.SphereGeometry(0.15, 28, 20), eyeMat);
		ball.scale.set(0.9, 1.15, 0.5);
		eye.add(ball);
		const glint = new THREE.Mesh(
			new THREE.SphereGeometry(0.04, 12, 10),
			new THREE.MeshBasicMaterial({ color: 0xffffff }),
		);
		glint.position.set(0.04, 0.06, 0.07);
		eye.add(glint);
		face.add(eye);
		eyes.push(eye);
	}
	const cheekMat = mat(C.cheek, 0.8);
	for (const sx of [-1, 1]) {
		const cheek = new THREE.Mesh(
			new THREE.SphereGeometry(0.12, 20, 14),
			cheekMat,
		);
		cheek.scale.set(1.4, 0.8, 0.25);
		cheek.position.set(sx * 0.52, -0.08, -0.02);
		face.add(cheek);
	}
	const smile = new THREE.Mesh(
		new THREE.TorusGeometry(0.1, 0.022, 10, 24, Math.PI),
		eyeMat,
	);
	smile.rotation.z = Math.PI;
	smile.position.set(0, -0.12, 0.0);
	face.add(smile);

	// Limbs
	const limbMat = mat(C.limb, 0.55);
	const mkArm = (sx: number) => {
		const pivot = new THREE.Group();
		pivot.position.set(sx * 1.08, -0.2, 0.05);
		const arm = new THREE.Mesh(
			new THREE.CapsuleGeometry(0.1, 0.62, 8, 16),
			limbMat,
		);
		arm.position.y = -0.38;
		pivot.add(arm);
		pivot.rotation.z = sx * 0.28;
		body.add(pivot);
		return pivot;
	};
	const armL = mkArm(-1);
	const armR = mkArm(1);
	const mkLeg = (sx: number) => {
		const leg = new THREE.Group();
		leg.position.set(sx * 0.36, -1.0, 0);
		const stem = new THREE.Mesh(
			new THREE.CapsuleGeometry(0.1, 0.3, 8, 16),
			limbMat,
		);
		stem.position.y = -0.18;
		leg.add(stem);
		const foot = new THREE.Mesh(new THREE.SphereGeometry(0.2, 24, 16), limbMat);
		foot.scale.set(1.15, 0.5, 1.3);
		foot.position.set(0, -0.42, 0.08);
		leg.add(foot);
		root.add(leg);
		return leg;
	};
	mkLeg(-1);
	mkLeg(1);

	return { root, body, eyes, armL, armR, smile };
}

export function mountWobbi(
	canvas: HTMLCanvasElement,
	opts: { onSpeak?: (text: string) => void; reduceMotion?: boolean } = {},
): WobbiHandle {
	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: true,
		alpha: true,
	});
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.outputColorSpace = THREE.SRGBColorSpace;
	renderer.toneMapping = THREE.NoToneMapping;

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
	camera.position.set(0, 0.2, 7.2);

	scene.add(new THREE.HemisphereLight(0xffffff, 0xb7a6f5, 1.6));
	const key = new THREE.DirectionalLight(0xffffff, 2.4);
	key.position.set(-3, 4, 5);
	scene.add(key);
	const rim = new THREE.DirectionalLight(0xa9c8ff, 1.2);
	rim.position.set(4, 1, -3);
	scene.add(rim);

	const w = buildWobbi();
	w.root.position.y = 0.35;
	scene.add(w.root);

	// Soft contact shadow
	const shadow = new THREE.Mesh(
		new THREE.CircleGeometry(0.9, 32),
		new THREE.MeshBasicMaterial({
			color: 0x050b1a,
			transparent: true,
			opacity: 0.32,
		}),
	);
	shadow.rotation.x = -Math.PI / 2;
	shadow.position.y = -1.5;
	scene.add(shadow);

	// Drag to spin (with a little inertia), tap to poke.
	let yaw = 0.18;
	let vel = 0;
	let dragging = false;
	let moved = 0;
	let lastX = 0;
	const pointer = { x: 0, y: 0 };
	const down = (e: PointerEvent) => {
		dragging = true;
		moved = 0;
		lastX = e.clientX;
		canvas.setPointerCapture(e.pointerId);
	};
	const move = (e: PointerEvent) => {
		const r = canvas.getBoundingClientRect();
		pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
		pointer.y = ((e.clientY - r.top) / r.height) * 2 - 1;
		if (!dragging) return;
		const dx = e.clientX - lastX;
		lastX = e.clientX;
		moved += Math.abs(dx);
		vel = dx * 0.012;
		yaw += vel;
	};
	const up = () => {
		if (dragging && moved < 6) react("hello");
		dragging = false;
	};
	canvas.addEventListener("pointerdown", down);
	canvas.addEventListener("pointermove", move);
	canvas.addEventListener("pointerup", up);
	canvas.addEventListener("pointercancel", up);

	// Reactions are small timelines driven from the render loop.
	let anim: { kind: Reaction; t0: number; dur: number } | null = null;
	const lines: Record<Reaction, string[]> = {
		hello: [
			"Hi! I'm Wobbi.",
			"Hey you. How are you feeling?",
			"Boop! That tickles.",
			"I'm glad you're here.",
		],
		jump: ["Wheee!"],
		wave: ["Hello hello!"],
		breathe: ["Breathe in… and out. You're doing great."],
		cheer: ["You showed up. That counts!"],
	};
	let helloIdx = 0;
	function react(kind: Reaction) {
		anim = {
			kind,
			t0: performance.now(),
			dur: kind === "breathe" ? 9000 : kind === "wave" ? 1800 : 1100,
		};
		const pool = lines[kind];
		const text = kind === "hello" ? pool[helloIdx++ % pool.length] : pool[0];
		opts.onSpeak?.(text);
	}

	const resize = () => {
		const { clientWidth: cw, clientHeight: ch } = canvas;
		renderer.setSize(cw, ch, false);
		camera.aspect = cw / Math.max(ch, 1);
		camera.updateProjectionMatrix();
	};
	const ro = new ResizeObserver(resize);
	ro.observe(canvas);
	resize();

	let raf = 0;
	let blinkAt = performance.now() + 2500;
	const still = opts.reduceMotion === true;
	const loop = (now: number) => {
		raf = requestAnimationFrame(loop);
		const t = now / 1000;
		// inertia + slow idle sway
		if (!dragging) {
			yaw += vel;
			vel *= 0.93;
		}
		const sway = still ? 0 : Math.sin(t * 0.6) * 0.18;
		w.root.rotation.y =
			yaw + (dragging ? 0 : sway * (Math.abs(vel) < 0.002 ? 1 : 0));

		let bob = still ? 0 : Math.sin(t * 2.0) * 0.045;
		let squashY = 1;
		let armLift = 0;
		let armWave = 0;
		let breathe = 0;
		if (anim) {
			const p = Math.min((now - anim.t0) / anim.dur, 1);
			if (
				anim.kind === "jump" ||
				anim.kind === "hello" ||
				anim.kind === "cheer"
			) {
				const h = Math.sin(p * Math.PI);
				bob += h * (anim.kind === "hello" ? 0.25 : 0.55);
				squashY = 1 + h * 0.08 - (p < 0.15 || p > 0.85 ? 0.1 : 0);
				if (anim.kind === "cheer") armLift = h * 2.2;
				if (anim.kind === "cheer") w.root.rotation.y += p * Math.PI * 2;
			}
			if (anim.kind === "wave") {
				armWave = Math.sin(p * Math.PI * 7) * 0.5;
				armLift = Math.sin(Math.min(p * 1.5, 1) * Math.PI * 0.5) * 2.4;
			}
			if (anim.kind === "breathe")
				breathe = Math.sin(p * Math.PI * 2 * 1.5 - Math.PI / 2) * 0.5 + 0.5;
			if (p >= 1) anim = null;
		}
		const s = 1 + breathe * 0.14;
		w.body.scale.set(s * (2 - squashY), s * squashY, s * (2 - squashY));
		w.root.position.y = 0.35 + bob;
		shadow.scale.setScalar(1 - bob * 0.5);
		w.armL.rotation.z = -0.28 - armLift * 0.55 - armWave * 0.4;
		w.armR.rotation.z = 0.28 + armLift * 0.12;
		if (anim?.kind === "cheer") w.armR.rotation.z = 0.28 + armLift * 0.55;

		// eyes follow the pointer; blink now and then
		const look = still ? 0 : 1;
		for (const eye of w.eyes) {
			eye.position.x +=
				(Math.sign(eye.position.x) * 0.32 +
					pointer.x * 0.05 * look -
					eye.position.x) *
				0.15;
			eye.position.y += (0.1 - pointer.y * 0.04 * look - eye.position.y) * 0.15;
			const blink = now > blinkAt && now < blinkAt + 140 ? 0.1 : 1;
			eye.scale.y += (blink - eye.scale.y) * 0.6;
		}
		if (now > blinkAt + 140) blinkAt = now + 2200 + Math.random() * 2600;

		renderer.render(scene, camera);
	};
	raf = requestAnimationFrame(loop);

	return {
		react,
		dispose() {
			cancelAnimationFrame(raf);
			ro.disconnect();
			canvas.removeEventListener("pointerdown", down);
			canvas.removeEventListener("pointermove", move);
			canvas.removeEventListener("pointerup", up);
			canvas.removeEventListener("pointercancel", up);
			scene.traverse((o) => {
				const m = o as THREE.Mesh;
				m.geometry?.dispose?.();
				const mm = m.material as THREE.Material | THREE.Material[] | undefined;
				if (Array.isArray(mm)) for (const x of mm) x.dispose();
				else mm?.dispose?.();
			});
			renderer.dispose();
		},
	};
}
