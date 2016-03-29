import { SignalID, Signal } from './Signal';
import { SignalHandler, ISignalRouter } from './ISignalRouter';

type SignalHandlers = SignalHandler[];
type SignalHandlersMap = SignalHandlers[];

export class SignalRouter implements ISignalRouter{
	public constructor() {
	}
	
	public addHandler(sid:SignalID, handler:SignalHandler):void{
		this.handlers(sid).push(handler);
	}
	
	public delHandler(sid:SignalID, handler:SignalHandler):void{
		var handlers:SignalHandlers = this.handlers(sid);

		for(let i:number = 0; i < handlers.length; ++i){
			if(handlers[i] === handler){
				handlers.splice(i, 1);
				break;
			}
		}
	}

	public route(s:Signal):void{
		var handlers:SignalHandlers = this.handlers(s.sid);
		
		for(let i:number = 0; i < handlers.length; ++i){
			handlers[i](s);
		}
	}
	
	private handlers(sid:SignalID):SignalHandlers{
		if(undefined === this._handlers_map[sid]){
			this._handlers_map[sid] = [];
		}
		
		return this._handlers_map[sid];
	}
	
	private _handlers_map:SignalHandlersMap = [];
}
