/**
 * 元素迭代处理器
 * @param {T} e - 元素
 * @returns {bool} - 是否要中止迭代
 */
export type ElementHandler<T> = (e: T) => bool;

/**
 * 表
 */
export interface IList<T> {
	/**
	 * 插入元素到表
	 * @param {T} e - 元素
	 * @param {int32} idx - 索引
	 */
	Insert(e: T, idx?: int32): void;

	/**
	 * 从表移除元素
	 * @param {T} e - 元素
	 * @param {int32} times - 移除数量
	 */
	Remove(e: T, times?: int32): void;

	/**
	 * 表长度
	 */
	Length: int32;

	/**
	 * 获取元素的正向索引
	 * @param {T} e - 元素
	 * @returns {int32} - 索引
	 */
	IndexOf(e: T): int32;

	/**
	 * 获取给定索引处元素
	 * @param {int32} idx - 索引
	 * @returns {T | null} - 元素
	 */
	ElementAt(idx: int32): T;

	/**
	 * 是否包含元素
	 * @param {T} e - 元素
	 */
	IsContain(e: T): bool;

	/**
	 * 正向迭代元素
	 * @param {ElementHandler<T>} eh - 元素处理器
	 */
	Foreach(eh: ElementHandler<T>): void;

	/**
	 * 反向迭代元素
	 * @param {ElementHandler<T>} eh - 元素处理器
	 */
	Reverse(eh: ElementHandler<T>): void;
}
