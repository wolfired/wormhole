import { Component, Reg } from './Component';
import { IEntity } from './IEntity';

@Reg
export class Component4Transform extends Component {
	public constructor(host:IEntity) {
		super(host);
	}
}
