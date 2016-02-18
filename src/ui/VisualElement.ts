/// <reference path="../component/Entity.ts" />
/// <reference path="../component/Component4Transform.ts" />

import comp = wormhole.component;

		export class VisualElement extends comp.Entity {
namespace wormhole {
	export namespace ui {
			public constructor(){
				super();
				
				this.addComponent(comp.Component4Transform.ID);
			}
		}
	}
}