import { useEffect, useRef } from "react";

interface Vector2D {
	x: number;
	y: number;
	magnitude: number;
	computed: number;
	force: number;
}

class Vector2D {
	x: number;
	y: number;
	magnitude: number;
	computed: number = 0;
	force: number = 0;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
		this.magnitude = x * x + y * y;
	}

	add(v: Vector2D): Vector2D {
		return new Vector2D(this.x + v.x, this.y + v.y);
	}
}

class Ball {
	vel: Vector2D;
	pos: Vector2D;
	size: number;
	width: number;
	height: number;

	constructor(screen: Screen) {
		const { width, height, wh } = screen;
		const velocityX =
			(Math.random() > 0.5 ? 1 : -1) * (0.2 + 0.25 * Math.random());
		const velocityY =
			(Math.random() > 0.5 ? 1 : -1) * (0.2 + Math.random());
		this.vel = new Vector2D(velocityX, velocityY);
		this.pos = new Vector2D(
			0.2 * width + Math.random() * width * 0.6,
			0.2 * height + Math.random() * height * 0.6
		);
		this.size = wh / 15 + (1.4 * Math.random() + 0.1) * (wh / 15);
		this.width = width;
		this.height = height;
	}

	move() {
		if (this.pos.x >= this.width - this.size) {
			if (this.vel.x > 0) this.vel.x = -this.vel.x;
			this.pos.x = this.width - this.size;
		} else if (this.pos.x <= this.size) {
			if (this.vel.x < 0) this.vel.x = -this.vel.x;
			this.pos.x = this.size;
		}

		if (this.pos.y >= this.height - this.size) {
			if (this.vel.y > 0) this.vel.y = -this.vel.y;
			this.pos.y = this.height - this.size;
		} else if (this.pos.y <= this.size) {
			if (this.vel.y < 0) this.vel.y = -this.vel.y;
			this.pos.y = this.size;
		}

		this.pos = this.pos.add(this.vel);
	}
}

interface Screen {
	width: number;
	height: number;
	wh: number;
	ctx: CanvasRenderingContext2D;
}

class Metaballs {
	step: number = 5;
	width: number;
	height: number;
	wh: number;
	sx: number;
	sy: number;
	paint: boolean = false;
	metaFill: CanvasGradient;
	plx: number[] = [0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0];
	ply: number[] = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0, 1];
	mscases: number[] = [0, 3, 0, 3, 1, 3, 0, 3, 2, 2, 0, 2, 1, 1, 0];
	ix: number[] = [
		1, 0, -1, 0, 0, 1, 0, -1, -1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1,
	];
	grid: Vector2D[] = [];
	balls: Ball[] = [];
	iter: number = 0;
	sign: number = 1;
	ctx: CanvasRenderingContext2D;

	constructor(
		width: number,
		height: number,
		numBalls: number,
		colorInner: string,
		colorOuter: string,
		ctx: CanvasRenderingContext2D
	) {
		this.width = width;
		this.height = height;
		this.wh = Math.min(width, height);
		this.sx = Math.floor(this.width / this.step);
		this.sy = Math.floor(this.height / this.step);
		this.ctx = ctx;
		this.metaFill = createRadialGradient(
			width,
			height,
			width,
			colorInner,
			colorOuter,
			ctx
		);

		for (let i = 0; i < (this.sx + 2) * (this.sy + 2); i++) {
			this.grid[i] = new Vector2D(
				(i % (this.sx + 2)) * this.step,
				Math.floor(i / (this.sx + 2)) * this.step
			);
		}

		for (let i = 0; i < numBalls; i++) {
			this.balls[i] = new Ball(this);
		}
	}

	computeForce(x: number, y: number, index?: number): number {
		let force,
			gridIndex = index ?? x + y * (this.sx + 2);

		if (x === 0 || y === 0 || x === this.sx || y === this.sy) {
			force = 0.6 * this.sign;
		} else {
			force = 0;
			const gridVector = this.grid[gridIndex];
			for (const ball of this.balls) {
				force +=
					(ball.size * ball.size) /
					(-2 * gridVector.x * ball.pos.x -
						2 * gridVector.y * ball.pos.y +
						ball.pos.magnitude +
						gridVector.magnitude);
			}
			force *= this.sign;
		}

		this.grid[gridIndex].force = force;
		return force;
	}

	marchingSquares(
		baseCase: [number, number, boolean | number]
	): [number, number, boolean | number] | false {
		const [x, y, caseValue] = baseCase;
		const index = x + y * (this.sx + 2);

		if (this.grid[index].computed === this.iter) {
			return false;
		}

		let case_ = 0;
		for (let i = 0; i < 4; i++) {
			const gridIndex =
				x + this.ix[i + 12] + (y + this.ix[i + 16]) * (this.sx + 2);
			let force = this.grid[gridIndex].force;
			if (
				force === 0 ||
				(force > 0 && this.sign < 0) ||
				(force < 0 && this.sign > 0)
			) {
				force = this.computeForce(
					x + this.ix[i + 12],
					y + this.ix[i + 16],
					gridIndex
				);
			}
			if (Math.abs(force) > 1) {
				case_ += Math.pow(2, i);
			}
		}

		if (case_ === 15) {
			return [x, y - 1, false];
		}

		let newCaseValue;
		if (case_ === 5) {
			newCaseValue = caseValue === 2 ? 3 : 1;
		} else if (case_ === 10) {
			newCaseValue = caseValue === 3 ? 0 : 2;
		} else {
			newCaseValue = this.mscases[case_];
			this.grid[index].computed = this.iter;
		}

		const deltaX =
			(Math.abs(
				this.grid[
					x +
						this.plx[4 * newCaseValue + 2] +
						(y + this.ply[4 * newCaseValue + 2]) * (this.sx + 2)
				].force
			) -
				1) /
				Math.abs(
					Math.abs(
						this.grid[
							x +
								this.plx[4 * newCaseValue + 3] +
								(y + this.ply[4 * newCaseValue + 3]) *
									(this.sx + 2)
						].force
					) - 1
				) +
			1;
		const deltaY = this.step / deltaX;

		this.ctx.lineTo(
			this.grid[
				x +
					this.plx[4 * newCaseValue] +
					(y + this.ply[4 * newCaseValue]) * (this.sx + 2)
			].x +
				this.ix[newCaseValue] * deltaY,
			this.grid[
				x +
					this.plx[4 * newCaseValue + 1] +
					(y + this.ply[4 * newCaseValue + 1]) * (this.sx + 2)
			].y +
				this.ix[newCaseValue + 4] * deltaY
		);

		this.paint = true;
		return [
			x + this.ix[newCaseValue + 4],
			y + this.ix[newCaseValue + 8],
			newCaseValue,
		];
	}

	renderMetaballs() {
		for (const ball of this.balls) {
			ball.move();
		}

		this.iter++;
		this.sign = -this.sign;
		this.paint = false;

		this.ctx.fillStyle = this.metaFill;
		this.ctx.beginPath();

		for (const ball of this.balls) {
			let baseCase: [number, number, boolean | number] = [
				Math.round(ball.pos.x / this.step),
				Math.round(ball.pos.y / this.step),
				false,
			];
			let nextCase = this.marchingSquares(baseCase);
			while (nextCase) {
				baseCase = nextCase;
				nextCase = this.marchingSquares(baseCase);
			}
			if (this.paint) {
				this.ctx.fill();
				this.ctx.closePath();
				this.ctx.beginPath();
				this.paint = false;
			}
		}
	}
}

const createRadialGradient = (
	width: number,
	height: number,
	radius: number,
	colorInner: string,
	colorOuter: string,
	ctx: CanvasRenderingContext2D
): CanvasGradient => {
	const gradient = ctx.createRadialGradient(
		width / 1,
		height / 1,
		0,
		width / 1,
		height / 1,
		radius
	);
	gradient.addColorStop(0, colorInner);
	gradient.addColorStop(1, colorOuter);
	return gradient;
};

export default function MetaballsCanvas({
	color1,
	color2,
	noOfBalls,
}: {
	color1: string;
	color2: string;
	noOfBalls: number;
}) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const width = (canvas.width = window.innerWidth);
		const height = (canvas.height = window.innerHeight);

		const metaballs = new Metaballs(width, height, noOfBalls, color1, color2, ctx);

		const animate = () => {
			ctx.clearRect(0, 0, width, height);
			metaballs.renderMetaballs();
			requestAnimationFrame(animate);
		};

		animate();
	}, []);

	return <canvas ref={canvasRef} />;
}
