import { ElementHandler, IList } from './internal';

/**
 * 节点
 */
class Node<T> {
	public pre: Node<T> = null!;
	public ele: T = null!;
	public nxt: Node<T> = null!;
}
/** 头节点 */
type Head<T> = Node<T>;
/** 尾节点 */
type Tail<T> = Node<T>;

/**
 * 节点迭代处理器
 * @param {Node<T>} n - 节点
 * @returns {bool} - 是否要中止迭代
 */
type NodeHandler<T> = (n: Node<T>) => bool;

/**
 * 双向链表
 */
export class LinkedList<T> implements IList<T> {
	public constructor() {
		this._head.pre = this._tail;
		this._head.nxt = this._tail;

		this._tail.pre = this._head;
		this._tail.nxt = this._head;
	}

	public Insert(e: T, idx: int32 = this._length): void {
		if (0 > idx || this._length < idx) {
			idx = this._length;
		}

		let nn: Node<T> = new Node<T>();
		nn.ele = e;

		if (idx < this._length / 2) {
			this.forwardNode2Tail((n: Node<T>): bool => {
				if (0 === idx) {
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
		} else {
			idx = this._length - idx;
			this.reverseNode2Head((n: Node<T>): bool => {
				if (0 === idx) {
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

	public Remove(e: T, times: int32 = 1): void {
		this.forwardNode((n: Node<T>): bool => {
			if (e === n.ele) {
				n.pre.nxt = n.nxt;
				n.nxt.pre = n.pre;

				n.pre = null!;
				n.ele = null!;
				n.nxt = null!;

				--this._length;

				return 0 === --times;
			}

			return false;
		});
	}

	public IndexOf(e: T): int32 {
		let idx: int32 = -1;

		this.Foreach((ele: T): bool => {
			++idx;

			if (e === ele) {
				return true;
			}

			return false;
		});

		return idx;
	}

	public ElementAt(idx?: int32): T {
		if (0 === this._length) {
			return null!;
		}

		if (void 0 === idx || 0 > idx || this._length <= idx) {
			idx = this._length - 1;
		}

		let e: T = null!;

		if (idx < this._length / 2) {
			this.Foreach((ele: T): bool => {
				if (0 === idx) {
					e = ele;

					return true;
				}

				--idx;

				return false;
			});
		} else {
			idx = this._length - idx - 1;

			this.Reverse((ele: T): bool => {
				if (0 === idx) {
					e = ele;

					return true;
				}

				--idx;

				return false;
			});
		}

		return e;
	}

	public IsContain(e: T): bool {
		return -1 < this.IndexOf(e);
	}

	public Foreach(eh: ElementHandler<T>): void {
		this.forwardNode((n: Node<T>): bool => {
			return eh(n.ele);
		});
	}

	public Reverse(eh: ElementHandler<T>): void {
		this.reverseNode((n: Node<T>): bool => {
			return eh(n.ele);
		});
	}

	/**
	 * 正向迭代节点，不包括头尾
	 */
	private forwardNode(nh: NodeHandler<T>): void {
		let n: Node<T> = this._head.nxt;
		let temporary: Node<T>;
		while (n !== this._tail) {
			temporary = n.nxt;
			if (nh(n)) {
				break;
			}
			n = temporary;
		}
	}

	/**
	 * 反向迭代节点，不包括头尾
	 */
	private reverseNode(nh: NodeHandler<T>): void {
		let n: Node<T> = this._tail.pre;
		let temporary: Node<T>;
		while (n !== this._head) {
			temporary = n.pre;
			if (nh(n)) {
				break;
			}
			n = temporary;
		}
	}

	private forwardNode2Tail(nh: NodeHandler<T>): void {
		let n: Node<T> = this._head.nxt;
		let temporary: Node<T>;
		while (n !== this._head) {
			temporary = n.nxt;
			if (nh(n)) {
				break;
			}
			n = temporary;
		}
	}

	private reverseNode2Head(nh: NodeHandler<T>): void {
		let n: Node<T> = this._tail.pre;
		let temporary: Node<T>;
		while (n !== this._tail) {
			temporary = n.pre;
			if (nh(n)) {
				break;
			}
			n = temporary;
		}
	}

	private _head: Head<T> = new Node<T>();
	private _tail: Tail<T> = new Node<T>();

	private _length: int32 = 0;
	public get Length(): int32 { return this._length; }
}
