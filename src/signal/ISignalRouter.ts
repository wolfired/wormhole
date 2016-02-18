/// <reference path="Signal.ts" />

namespace wormhole {
	export namespace signal {
		export type SignalHandler = (s:Signal)=>void;
		
		export interface ISignalRouter {
			addHandler(sid:SignalID, handler:SignalHandler):void;
			delHandler(sid:SignalID, handler:SignalHandler):void;
			route(s:Signal):void;
		}
	}
}