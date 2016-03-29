import { SignalID, Signal } from './Signal';

export type SignalHandler = (s:Signal)=>void;

export interface ISignalRouter {
	addHandler(sid:SignalID, handler:SignalHandler):void;
	delHandler(sid:SignalID, handler:SignalHandler):void;
	route(s:Signal):void;
}