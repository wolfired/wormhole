/// <reference path="Component.ts" />

namespace wormhole {
	export namespace component {
		export class Entity {
			public constructor() {
				this._component_map = [];
			}
			
			public addComponent<T extends Component>(cid:ComponentID):T{
				var c:T = <T> this._component_map[cid];
				
				if(undefined === c){
					c = Component.Creator<T>(cid, this);
					
					this._component_map[cid] = c;
				}

				return c;
			}
			
			public delComponent<T extends Component>(cid:ComponentID):T{
				var c:T = <T> this._component_map[cid];
				
				if(undefined !== c){
					Component.Deleter(c);
					
					delete this._component_map[cid];
				}

				return c;
			}
			
			public getComponent<T extends Component>(cid:ComponentID):T{
				return <T> this._component_map[cid];
			}
			
			public isContain(cid:ComponentID):boolean{
				return undefined !== this._component_map[cid];
			}
			
			protected _component_map:Component[];
		}
	}
}