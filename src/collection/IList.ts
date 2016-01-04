module wormhole {
	export module collection {
		
		export type ElementHandler<T> = (e:T)=>boolean;
		
		export interface IList<T> {
			insert(e:T, idx?:number):void;
			remove(e:T, once?:boolean):void;
			length():number;
			indexOf(e:T):number;
			elementAt(idx:number):T;
			isContain(e:T):boolean;
			foreach(eh:ElementHandler<T>):void;
		}
	}
}
