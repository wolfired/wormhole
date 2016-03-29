import { ElementHandler, IList } from './IList';

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
	
	public insert(e:T, idx?:number):void{
		if(undefined === idx || this._length < idx || 0 > idx){
			idx = this._length;
		}
		
		var nn:Node<T> = new Node<T>();
		nn.ele = e;
		
		if(idx < this._length / 2){
			this.forwardNode2Tail((n:Node<T>):boolean=>{
				if(0 === idx){
					nn.nxt = n;
					nn.pre = n.pre;
					
					n.pre.nxt = nn;
					n.pre = nn;
					
					++this._length;
					
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
					
					++this._length;
					
					return true;
				}
				
				--idx;
				
				return false;
			});
		}
	}
	
	public remove(e:T, once?:boolean):void{
		if(undefined === once){
			once = true;
		}
		
		this.forwardNode((n:Node<T>):boolean=>{
			if(e === n.ele){
				n.pre.nxt = n.nxt;
				n.nxt.pre = n.pre;
				
				n.pre = undefined;
				n.ele = undefined;
				n.nxt = undefined;
				
				--this._length;
				
				return once;
			}
			
			return false;
		});
	}
	
	public indexOf(e:T):number{
		var idx:number = -1;
		
		this.foreach((ele:T):boolean=>{
			++idx;
			
			if(e === ele){
				return true;
			}
			
			return false;
		});
		
		return idx;
	}
	
	public elementAt(idx:number):T{
		if(undefined === idx || this._length <= idx || 0 > idx){
			idx = this._length - 1;
		}
		
		var e:T = undefined;
		
		if(idx < this._length / 2){
			this.foreach((ele:T):boolean=>{
				if(0 === idx){
					e = ele;
					
					return true;
				}
				
				--idx;
				
				return false;
			});
		}else{
			idx = this._length - idx - 1;
			
			this.reverse((ele:T):boolean=>{
				if(0 === idx){
					e = ele;
					
					return true;
				}
				
				--idx;
				
				return false;
			});
		}
		
		return e;
	}
	
	public isContain(e:T):boolean{
		return -1 < this.indexOf(e);
	}
	
	public foreach(eh:ElementHandler<T>):void{
		this.forwardNode((n:Node<T>):boolean=>{
			return eh(n.ele);				
		});
	}
	
	private reverse(eh:ElementHandler<T>):void{
		this.reverseNode((n:Node<T>):boolean=>{
			return eh(n.ele);
		});
	}
	
	private forwardNode(nh:NodeHandler<T>):void{
		var n:Node<T> = this._head.nxt;
		var temporary:Node<T>;
		while(n !== this._tail){
			temporary = n.nxt;
			if(nh(n)){
				break;
			}
			n = temporary;
		}
	}
	
	private reverseNode(nh:NodeHandler<T>):void{
		var n:Node<T> = this._tail.pre;
		var temporary:Node<T>;
		while(n !== this._head){
			temporary = n.pre;
			if(nh(n)){
				break;
			}
			n = temporary;
		}
	}
	
	private forwardNode2Tail(nh:NodeHandler<T>):void{
		var n:Node<T> = this._head.nxt;
		var temporary:Node<T>;
		while(n !== this._head){
			temporary = n.nxt;
			if(nh(n)){
				break;
			}
			n = temporary;
		}
	}
			
	private reverseNode2Head(nh:NodeHandler<T>):void{
		var n:Node<T> = this._tail.pre;
		var temporary:Node<T>;
		while(n !== this._tail){
			temporary = n.pre;
			if(nh(n)){
				break;
			}
			n = temporary;
		}
	}
	
	private _head:Head<T>;
	private _tail:Tail<T>;
	
	private _length:number;
	public get length():number{ return this._length; }
}
