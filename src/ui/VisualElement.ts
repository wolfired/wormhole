import { Component, Component4Transform, ComponentConstructor, Entity, IEntity, Component4Render, Component4Signal } from '../component';
import { ISignalRouter, Signal, SignalHandler, SignalID, SignalRouter } from '../signal';

export class VisualElement implements IEntity, ISignalRouter {
	public constructor() {
		this._entity.Get(Component4Transform);
		this._entity.Get(Component4Signal);
	}

	public TryGet<T extends Component>(cc: ComponentConstructor<T>): T {
		return this._entity.TryGet(cc);
	}

	public Get<T extends Component>(cc: ComponentConstructor<T>): T {
		return this._entity.Get(cc);
	}

	public AddHandler(sid: SignalID, handler: SignalHandler): void {
		this.Get(Component4Signal).AddHandler(sid, handler);
	}

	public DelHandler(sid: SignalID, handler: SignalHandler): void {
		this.Get(Component4Signal).DelHandler(sid, handler);
	}

	public Route(s: Signal): void {
		this.Get(Component4Signal).Route(s);
	}

	private _entity: IEntity = Entity.New();
}
