import { Component, Register } from './Component';
import { IEntity } from './IEntity';

@Register
export class Component4Transform extends Component {
	public constructor(host:IEntity) {
		super(host);
	}
}
