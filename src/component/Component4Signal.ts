import { Component, Reg } from './Component';
import { IEntity } from './IEntity';
import { ISignalRouter, SignalID, SignalHandler, SignalRouter, Signal } from '../signal';

@Reg
export class Component4Signal extends Component implements ISignalRouter {
    public constructor(host: IEntity) {
        super(host);
    }

    public AddHandler(sid: SignalID, handler: SignalHandler): void {
        this._router.AddHandler(sid, handler);
    }

    public DelHandler(sid: SignalID, handler: SignalHandler): void {
        this._router.DelHandler(sid, handler);
    }

    public Route(s: Signal): void {
        this._router.Route(s);
    }

    private _router: ISignalRouter = new SignalRouter();
}
