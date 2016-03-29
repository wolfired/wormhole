import { Entity } from '../component/Entity';
import { Component4Transform } from '../component/Component4Transform';
import { ISignalRouter, SignalHandler } from '../signal/ISignalRouter';
import { SignalID, Signal } from '../signal/Signal';

export class VisualElement extends Entity implements ISignalRouter {
	public constructor(){
		super();
		
		this.addComponent(Component4Transform.ID);
	}
	
	public addHandler(sid:SignalID, handler:SignalHandler):void{
		
	}
	
	public delHandler(sid:SignalID, handler:SignalHandler):void{
		
	}
	
	public route(s:Signal):void{
		
	}
}
