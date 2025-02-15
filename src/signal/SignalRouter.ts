import { SignalID, Signal, SignalHandler, ISignalRouter } from './internal';

type SignalHandlers = SignalHandler[];
type SignalHandlersMap = SignalHandlers[];

export class SignalRouter implements ISignalRouter {
	public constructor() {
	}

	public AddHandler(sid: SignalID, handler: SignalHandler): void {
		this.handlers(sid).push(handler);
	}

	public DelHandler(sid: SignalID, handler: SignalHandler): void {
		var handlers: SignalHandlers = this.handlers(sid);

		for (let i: number = 0; i < handlers.length; ++i) {
			if (handlers[i] === handler) {
				handlers.splice(i, 1);
				break;
			}
		}
	}

	public Route(s: Signal): void {
		var handlers: SignalHandlers = this.handlers(s.Sid);

		for (let i: number = 0; i < handlers.length; ++i) {
			handlers[i](s)
		}
	}

	private handlers(sid: SignalID): SignalHandlers {
		let handlers = this._handlers_map[sid]
		if (void 0 === handlers) {
			this._handlers_map[sid] = handlers = [];
		}

		return handlers;
	}

	private _handlers_map: SignalHandlersMap = [];
}
