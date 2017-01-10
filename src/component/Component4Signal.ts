import * as signal from '../signal';

import { Component, Register, IEntity } from './internal';

@Register
export class Component4Signal extends Component implements signal.ISignalRouter {
    public constructor(host: IEntity) {
        super(host);
    }

    public AddHandler(sid: signal.SignalID, handler: signal.SignalHandler): void {
        this._router.AddHandler(sid, handler);
    }

    public DelHandler(sid: signal.SignalID, handler: signal.SignalHandler): void {
        this._router.DelHandler(sid, handler);
    }

    public Route(s: signal.Signal): void {
        this._router.Route(s);
    }

    private _router: signal.ISignalRouter = new signal.SignalRouter();
}
