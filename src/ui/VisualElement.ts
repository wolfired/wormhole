import * as component from '../component';
import * as signal from '../signal';

export class VisualElement implements component.IEntity, signal.ISignalRouter {
	public constructor() {
		this._entity.Get(component.Component4Transform);
		this._entity.Get(component.Component4Signal);
	}

	public TryGet<T extends component.Component>(cc: component.ComponentConstructor<T>): T | null {
		return this._entity.TryGet(cc);
	}

	public Get<T extends component.Component>(cc: component.ComponentConstructor<T>): T {
		return this._entity.Get(cc);
	}

	public AddHandler(sid: signal.SignalID, handler: signal.SignalHandler): void {
		this.Get(component.Component4Signal).AddHandler(sid, handler);
	}

	public DelHandler(sid: signal.SignalID, handler: signal.SignalHandler): void {
		this.Get(component.Component4Signal).DelHandler(sid, handler);
	}

	public Route(s: signal.Signal): void {
		this.Get(component.Component4Signal).Route(s);
	}

	private _entity: component.IEntity = new component.Entity();
}
