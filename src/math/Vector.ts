module wormhole {
	export module math {
		export class Vector {
			public static Addition(lh:Vector, rh:Vector, r?:Vector):Vector{
				if(undefined === r){
					r = new Vector();
				}
				
				r.x = lh.x + rh.x;
				r.y = lh.y + rh.y;
				r.z = lh.z + rh.z;
				r.w = 0.0;
				
				return r;
			}
			
			public static Subtraction(lh:Vector, rh:Vector, r?:Vector):Vector{
				if(undefined === r){
					r = new Vector();
				}
				
				r.x = lh.x - rh.x;
				r.y = lh.y - rh.y;
				r.z = lh.z - rh.z;
				r.w = 0.0;
				
				return r;
			}
			
			public static DotProduct(lh:Vector, rh:Vector, r?:Vector):Vector{
				if(undefined === r){
					r = new Vector();
				}
				
				r.x = lh.x * rh.x;
				r.y = lh.y * rh.y;
				r.z = lh.z * rh.z;
				r.w = 0.0;
				
				return r;
			}
			
			public static CrossProduct(lh:Vector, rh:Vector, r?:Vector):Vector{
				if(undefined === r){
					r = new Vector();
				}
				
				r.x = lh.y * rh.z - lh.z * rh.y;
				r.y = lh.z * rh.x - lh.x * rh.z;
				r.z = lh.x * rh.y - lh.y * rh.x;
				r.w = 0.0;
				
				return r;
			}

			public constructor(x:number = 0.0, y:number = 0.0, z:number = 0.0, w:number = 0.0){
				this._raw = [x, y, z, w];
			}
			
			public normalize():void{
				var len:number = this.length;
				this.x /= len;
				this.y /= len;
				this.z /= len;
			}
			
			public addition(rh:Vector):void{
				this.x += rh.x;
				this.y += rh.y;
				this.z += rh.z;
			}
			
			public subtraction(rh:Vector):void{
				this.x -= rh.x;
				this.y -= rh.y;
				this.z -= rh.z;
			}
			
			public dotProduct(rh:Vector):void{
				this.x *= rh.x;
				this.y *= rh.y;
				this.z *= rh.z;
			}
			
			public crossProduct(rh:Vector):void{
				Vector.CrossProduct(this, rh, temporary);
				this.x = temporary.x;
				this.y = temporary.y;
				this.z = temporary.z;
			}
			
			public get x():number{ return this._raw[0]; }
			public set x(value:number){ this._raw[0] = value; }
			
			public get y():number{ return this._raw[1]; }
			public set y(value:number){ this._raw[1] = value; }
			
			public get z():number{ return this._raw[2]; }
			public set z(value:number){ this._raw[2] = value; }

			public get w():number{ return this._raw[3]; }
			public set w(value:number){ this._raw[3] = value; }
			
			public get length():number{
				return Math.sqrt(this._raw[0] * this._raw[0] + this._raw[1] * this._raw[1] + this._raw[2] * this._raw[2]);
			}

			private _raw:number[];
		}
		
		var temporary:Vector = new Vector();
	}
}
