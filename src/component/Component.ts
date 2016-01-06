/// <reference path="Entity.ts" />

module wormhole {
	export module component {
		export type ComponentID = number;
		
		export class Component {
			
			public constructor() {
			}
			private _host:Entity;
			public get host():Entity {
				return this._host;
			}
		}
		
		export type ComponentConstructor = new()=>Component;
		
		var componentConstructors:ComponentConstructor[] = [];
		
		export function Register(cc:ComponentConstructor):ComponentID{
			return <ComponentID> (componentConstructors.push(cc) - 1);
		}
		
		export function Generator<T extends Component>(cid:ComponentID):T{
			return <T> new componentConstructors[cid]();
		}
	}
}
