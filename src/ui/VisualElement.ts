/// <reference path="../component/Component4Transform.ts" />
/// <reference path="../component/Entity.ts" />
/// <reference path="../signal/ISignalRouter.ts" />

import comp = wormhole.component;
import sig = wormhole.signal;

namespace wormhole {
	export namespace ui {
		export class VisualElement extends comp.Entity implements sig.ISignalRouter {
			public constructor(){
				super();
				
				this.addComponent(comp.Component4Transform.ID);
			}
			
			public addHandler(sid:sig.SignalID, handler:sig.SignalHandler):void{
				
			}
			
			public delHandler(sid:sig.SignalID, handler:sig.SignalHandler):void{
				
			}
			public route(s:sig.Signal):void{
				
			}
		}
	}
}
