/// <reference path="Signal.ts" />
/// <reference path="SignalScope.ts" />

module wormhole {
	export module signal {
		/**
		 * SignalRouter
		 */
		export class SignalRouter {
			
			private static handler_map_global:(((signal:Signal) => void)[])[] = [];
			
			private handler_map_local:(((signal:Signal) => void)[])[] = [];
			
			private scope:SignalScope;
			
			constructor(scope?:SignalScope) {
				this.scope = undefined === scope ? SignalScope.GLOBAL : scope;
			}
			
			addHandler(sid:number, handler:(signal:Signal) => void, scope?:SignalScope):void{
				scope = undefined === scope ? this.scope : scope;
				
				var handler_map:((signal:Signal) => void)[] = this.handler_map(sid, scope);
				
				handler_map.push(handler);
			}
			
			delHandler(sid:number, handler:(signal:Signal) => void, scope?:SignalScope):void{
				scope = undefined === scope ? this.scope : scope;

				var handler_map:((signal:Signal) => void)[] = this.handler_map(sid, scope);

				for(var idx:number = 0; idx < handler_map.length; idx += 1){
					if(handler_map[idx] === handler){
						handler_map.splice(idx);
						break;
					}
				}
			}

			route(signal:Signal, scope?:SignalScope):void{
				var sid:number = signal.sid;
				scope = undefined === scope ? this.scope : scope;
				
				var handler_map:((signal:Signal) => void)[] = this.handler_map(sid, scope);
				
				for(var idx:number = 0; idx < handler_map.length; idx += 1){
					handler_map[idx](signal);
				}
			}
			
			private handler_map(sid:number, scope:SignalScope):((signal:Signal) => void)[]{
				if(SignalScope.LOCAL === scope){
					if(undefined === this.handler_map_local[sid]){
						this.handler_map_local[sid] = [];
					}
					
					return this.handler_map_local[sid];
				}else if(SignalScope.GLOBAL === scope){
					if(undefined === SignalRouter.handler_map_global[sid]){
						SignalRouter.handler_map_global[sid] = [];
					}

					return SignalRouter.handler_map_global[sid];
				}
				
				return undefined;
			}
		}
	}
}
