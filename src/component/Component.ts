import { IEntity } from './IEntity';

export type ComponentConstructor<T> = new (host: IEntity) => T;

export const COMPONENT_IDX: string = "COMPONENT_IDX";

export class Component {
	protected constructor(host: IEntity) {
		this.Host = host;
	}

	public readonly Host: IEntity;
}

let IDX: uint = 0;

export function Reg<T extends Component>(cc: ComponentConstructor<T>) {
	cc[COMPONENT_IDX] = IDX++;
}

export function Len(): uint {
	return IDX;
}
