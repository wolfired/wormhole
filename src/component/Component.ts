import { New } from 'gots/lib/errors';

import { IEntity } from './internal';

/** 组件尚未注册 */
export const ErrNotRegister: error = New("component is not register");

export type ComponentType = typeof Component;
export type ComponentConstructor<T> = new (host: IEntity) => T;

export class Component {
	public static readonly IDX: uint = 0;

	protected constructor(host: IEntity) {
		this.Host = host;
	}

	public readonly Host: IEntity;
}

/**
 * 组件注册器
 */
export function Register(cc: ComponentType) {
	(<{ IDX: uint }>cc).IDX = (<{ IDX: uint }>Component).IDX++;
}

/** 注册组件数量 */
export function Length(): uint {
	return Component.IDX;
}
