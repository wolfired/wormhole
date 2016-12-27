import { SignalID, Signal } from './Signal';

export type SignalHandler = (s: Signal) => void;

export interface ISignalRouter {
	AddHandler(sid: SignalID, handler: SignalHandler): void;
	DelHandler(sid: SignalID, handler: SignalHandler): void;
	Route(s: Signal): void;
}
