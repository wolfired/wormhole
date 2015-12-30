module wormhole {
	export module collection {
		
		export type ElementHandler<T> = (e:T)=>boolean;
		
		export interface IList<T> {
			foreach(eh:ElementHandler<T>):void;
			insert(e:T, idx?:number):void;
			remove(e:T, once?:boolean):void;
		}
	}
}
