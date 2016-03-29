import { Entity } from './Entity';

export type ComponentID = number;
export type ComponentConstructor = new()=>Component;

export class Component {
	public static Register(cc:ComponentConstructor):ComponentID{
		return <ComponentID> (Component.componentConstructors.push(cc) - 1);
	}
	
	public static Creator<T extends Component>(cid:ComponentID, h:Entity):T{
		var c:T = <T> new Component.componentConstructors[cid]();
		c._host = h;
		return c;
	}
	
	public static Deleter(c:Component):void{
		c._host = undefined;
	}
	
	public constructor() {
	}
	
	private static componentConstructors:ComponentConstructor[] = [];

	private _host:Entity;
	public get host():Entity { return this._host; }
}


