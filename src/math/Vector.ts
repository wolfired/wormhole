export class Vector {
	public static Addition(lh: Vector, rh: Vector, r: Vector = new Vector()): Vector {
		r._raw[0] = lh._raw[0] + rh._raw[0];
		r._raw[1] = lh._raw[1] + rh._raw[1];
		r._raw[2] = lh._raw[2] + rh._raw[2];

		return r;
	}

	public static Subtraction(lh: Vector, rh: Vector, r: Vector = new Vector()): Vector {
		r._raw[0] = lh._raw[0] - rh._raw[0];
		r._raw[1] = lh._raw[1] - rh._raw[1];
		r._raw[2] = lh._raw[2] - rh._raw[2];

		return r;
	}

	public static DotProduct(lh: Vector, rh: Vector, r: Vector = new Vector()): Vector {
		r._raw[0] = lh._raw[0] * rh._raw[0];
		r._raw[1] = lh._raw[1] * rh._raw[1];
		r._raw[2] = lh._raw[2] * rh._raw[2];

		return r;
	}

	public static CrossProduct(lh: Vector, rh: Vector, r: Vector = new Vector()): Vector {
		r._raw[0] = lh._raw[1] * rh._raw[2] - lh._raw[2] * rh._raw[1];
		r._raw[1] = lh._raw[2] * rh._raw[0] - lh._raw[0] * rh._raw[2];
		r._raw[2] = lh._raw[0] * rh._raw[1] - lh._raw[1] * rh._raw[0];

		return r;
	}

	public constructor(x: float32 = 0.0, y: float32 = 0.0, z: float32 = 0.0, w: float32 = 0.0) {
		this._raw[0] = x;
		this._raw[1] = y;
		this._raw[2] = z;
		this._raw[3] = w;
	}

	public Normalize(): void {
		var len: float32 = this.Length;
		this._raw[0] /= len;
		this._raw[1] /= len;
		this._raw[2] /= len;
	}

	public Addition(rh: Vector): void {
		this._raw[0] += rh._raw[0];
		this._raw[1] += rh._raw[1];
		this._raw[2] += rh._raw[2];
	}

	public Subtraction(rh: Vector): void {
		this._raw[0] -= rh._raw[0];
		this._raw[1] -= rh._raw[1];
		this._raw[2] -= rh._raw[2];
	}

	public DotProduct(rh: Vector): void {
		this._raw[0] *= rh._raw[0];
		this._raw[1] *= rh._raw[1];
		this._raw[2] *= rh._raw[2];
	}

	public CrossProduct(rh: Vector): void {
		let t = Vector.CrossProduct(this, rh);
		this._raw[0] = t._raw[0];
		this._raw[1] = t._raw[1];
		this._raw[2] = t._raw[2];
	}

	public get Length(): float32 {
		return Math.sqrt(this._raw[0] * this._raw[0] + this._raw[1] * this._raw[1] + this._raw[2] * this._raw[2]);
	}

	private _raw: Float32Array = new Float32Array(4);
	public get X(): float32 { return this._raw[0]; }
	public set X(value: float32) { this._raw[0] = value; }
	public get Y(): float32 { return this._raw[1]; }
	public set Y(value: float32) { this._raw[1] = value; }
	public get Z(): float32 { return this._raw[2]; }
	public set Z(value: float32) { this._raw[2] = value; }
	public get W(): float32 { return this._raw[3]; }
	public set W(value: float32) { this._raw[3] = value; }
}
