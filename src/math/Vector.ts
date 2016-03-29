export class Vector {
	public static Addition(lh:Vector, rh:Vector, r?:Vector):Vector{
		if(undefined === r){
			r = new Vector();
		}
		
		r._raw[0] = lh._raw[0] + rh._raw[0];
		r._raw[1] = lh._raw[1] + rh._raw[1];
		r._raw[2] = lh._raw[2] + rh._raw[2];
		r.w = 0.0;
		
		return r;
	}
	
	public static Subtraction(lh:Vector, rh:Vector, r?:Vector):Vector{
		if(undefined === r){
			r = new Vector();
		}
		
		r._raw[0] = lh._raw[0] - rh._raw[0];
		r._raw[1] = lh._raw[1] - rh._raw[1];
		r._raw[2] = lh._raw[2] - rh._raw[2];
		r.w = 0.0;
		
		return r;
	}
	
	public static DotProduct(lh:Vector, rh:Vector, r?:Vector):Vector{
		if(undefined === r){
			r = new Vector();
		}
		
		r._raw[0] = lh._raw[0] * rh._raw[0];
		r._raw[1] = lh._raw[1] * rh._raw[1];
		r._raw[2] = lh._raw[2] * rh._raw[2];
		r.w = 0.0;
		
		return r;
	}
	
	public static CrossProduct(lh:Vector, rh:Vector, r?:Vector):Vector{
		if(undefined === r){
			r = new Vector();
		}
		
		r._raw[0] = lh._raw[1] * rh._raw[2] - lh._raw[2] * rh._raw[1];
		r._raw[1] = lh._raw[2] * rh._raw[0] - lh._raw[0] * rh._raw[2];
		r._raw[2] = lh._raw[0] * rh._raw[1] - lh._raw[1] * rh._raw[0];
		r.w = 0.0;
		
		return r;
	}

	public constructor(x:number = 0.0, y:number = 0.0, z:number = 0.0, w:number = 0.0){
		this._raw = new Float32Array(4);
		this._raw[0] = x;
		this._raw[1] = y;
		this._raw[2] = z;
		this._raw[3] = w;
	}
	
	public normalize():void{
		var len:number = this.length;
		this._raw[0] /= len;
		this._raw[1] /= len;
		this._raw[2] /= len;
	}
	
	public addition(rh:Vector):void{
		this._raw[0] += rh._raw[0];
		this._raw[1] += rh._raw[1];
		this._raw[2] += rh._raw[2];
	}
	
	public subtraction(rh:Vector):void{
		this._raw[0] -= rh._raw[0];
		this._raw[1] -= rh._raw[1];
		this._raw[2] -= rh._raw[2];
	}
	
	public dotProduct(rh:Vector):void{
		this._raw[0] *= rh._raw[0];
		this._raw[1] *= rh._raw[1];
		this._raw[2] *= rh._raw[2];
	}
	
	public crossProduct(rh:Vector):void{
		Vector.CrossProduct(this, rh, temporary);
		this._raw[0] = temporary._raw[0];
		this._raw[1] = temporary._raw[1];
		this._raw[2] = temporary._raw[2];
	}
	
	public get length():number{
		return Math.sqrt(this._raw[0] * this._raw[0] + this._raw[1] * this._raw[1] + this._raw[2] * this._raw[2]);
	}

	private _raw:Float32Array;
	public get x():number{ return this._raw[0]; }
	public set x(value:number){ this._raw[0] = value; }
	public get y():number{ return this._raw[1]; }
	public set y(value:number){ this._raw[1] = value; }
	public get z():number{ return this._raw[2]; }
	public set z(value:number){ this._raw[2] = value; }
	public get w():number{ return this._raw[3]; }
	public set w(value:number){ this._raw[3] = value; }
}

var temporary:Vector = new Vector();
