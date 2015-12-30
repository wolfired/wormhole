/// <reference path="IList.ts" />

module wormhole {
	export module collection {
		
		class Node<T> {
			public pre:Node<T>;
			public ele:T;
			public nxt:Node<T>;
		}
		
		type Head<T> = Node<T>;
		type Tail<T> = Node<T>;
		
		type NodeHandler<T> = (n:Node<T>)=>boolean;
		
		export class LinkedList<T> implements IList<T> {
			public constructor(){
				this._head = new Node<T>();
				this._tail = new Node<T>();
				
				this._head.pre = this._tail;
				this._head.nxt = this._tail;
				
				this._tail.pre = this._head;
				this._tail.nxt = this._head;
				
				this._length = 0;
			}
			
			public foreach(eh:ElementHandler<T>):void{
				this.forwardNode((n:Node<T>):boolean=>{
					return eh(n.ele);				
				});
			}
			
			public insert(e:T, idx?:number):void{
				if(undefined === idx || this._length < idx){
					idx = this._length;
				}
				
				var nn:Node<T> = new Node<T>();
				nn.ele = e;
				
				if(idx < this._length / 2.0){
					this.forwardNode2Tail((n:Node<T>):boolean=>{
						if(0 === idx){
							nn.nxt = n;
							nn.pre = n.pre;
							
							n.pre.nxt = nn;
							n.pre = nn;
							
							return true;
						}
						
						--idx;
						
						return false;
					});
				}else{
					idx = this._length - idx;
					this.reverseNode2Head((n:Node<T>):boolean=>{
						if(0 === idx){
							nn.nxt = n.nxt;
							nn.pre = n;
							
							n.nxt.pre = nn;
							n.nxt = nn;
						}
						
						--idx;
						
						return false;
					});
				}
				
				++this._length;
			}
			
			public remove(e:T, once?:boolean):void{
				if(undefined === once){
					once = true;
				}
				
				this.forwardNode((n:Node<T>):boolean=>{
					if(e === n.ele){
						n.pre.nxt = n.nxt;
						n.nxt.pre = n.pre;
						
						return once;
					}
					
					return false;
				});
			}
			
			private forwardNode(nh:NodeHandler<T>):void{
				var n:Node<T> = this._head.nxt;
				while(n !== this._tail){
					if(nh(n)){
						break;
					}
					n = n.nxt;
				}
			}
			
			private forwardNode2Tail(nh:NodeHandler<T>):void{
				var n:Node<T> = this._head.nxt;
				while(n !== this._head){
					if(nh(n)){
						break;
					}
					n = n.nxt;
				}
			}
			
			private reverseNode2Head(nh:NodeHandler<T>):void{
				var n:Node<T> = this._tail.pre;
				while(n !== this._tail){
					if(nh(n)){
						break;
					}
					n = n.pre;
				}
			}
			
			private _head:Head<T>;
			private _tail:Tail<T>;
			
			private _length:number;
		}
	}
}
