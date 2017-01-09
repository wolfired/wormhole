import { Component, Register, IEntity } from './internal';

@Register
export class Component4Transform extends Component {
	public constructor(host:IEntity) {
		super(host);
	}
}
