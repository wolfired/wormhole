/// <reference path="../component/Entity.ts" />
/// <reference path="../component/Component4Transform.ts" />

import comp = wormhole.component;

module wormhole {
	export module ui {
		export class VisualElement extends comp.Entity {
			public constructor(){
				super();
				
				this.addComponent(comp.Component4Transform.ID);
			}
		}
	}
}