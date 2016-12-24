export type ElementHandler<T> = (e:T)=>boolean;

export interface IList<T> {
	Insert(e:T, idx?:int32):void;
	Remove(e:T, once?:boolean):void;
	Length:int32;
	IndexOf(e:T):int32;
	ElementAt(idx:int32):T;
	IsContain(e:T):boolean;
	Foreach(eh:ElementHandler<T>):void;
	Reverse(eh:ElementHandler<T>):void;
}
