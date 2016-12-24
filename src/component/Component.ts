import { IEntity } from './IEntity';

export type ComponentType = typeof Component;
export type ComponentConstructor<T> = new (host: IEntity) => T;

export class Component {
	public static readonly IDX: uint = 0;

	protected constructor(host: IEntity) {
		this.Host = host;
	}

	public readonly Host: IEntity;
}

export function Reg<T extends Component>(cc: ComponentConstructor<T> & ComponentType) {
	(<{ IDX: uint }>cc).IDX = (<{ IDX: uint }>Component).IDX++;
}

export function Len(): uint {
	return Component.IDX;
}
