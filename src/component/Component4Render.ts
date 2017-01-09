import { Component, Register, IEntity } from './internal';

@Register
export class Component4Render extends Component {
	public constructor(host:IEntity) {
		super(host);
	}
}
