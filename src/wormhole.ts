export class Wormhole {
	public setup(w?:number, h?:number):Wormhole{
		window.onresize = (event:Event):void => {
			this._canvas.width = window.innerWidth;
			this._canvas.height = window.innerHeight;
		};
		
		document.body.style.margin = "0px";
		
		w = undefined == w ? window.innerWidth : w;
		h = undefined == h ? window.innerHeight : h;

		this._canvas = <HTMLCanvasElement> document.createElement("canvas");
		this._canvas.width = w;
		this._canvas.height = h;
		
		document.body.appendChild(this._canvas);
		
		this._context = <WebGLRenderingContext> this._canvas.getContext("webgl");
		this._context.clearColor(0.9, 0.9, 0.9, 1.0);
		
		return this;
	}
	
	public start():void{
		var loop = (dt:number):void=>{
			this._context.clear(this._context.COLOR_BUFFER_BIT);

			
			this._handle = window.requestAnimationFrame(loop);
		};
		
		loop(0.0);
	}
	
	public stop():void{
		window.cancelAnimationFrame(this._handle);
	}
	
	private _handle:number;
	
	private _canvas:HTMLCanvasElement;
	private _context:WebGLRenderingContext;
}
