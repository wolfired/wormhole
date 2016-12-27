import { Component, Register } from './Component';
import { IEntity } from './IEntity';

@Register
export class Component4Render extends Component {
	public constructor(host:IEntity) {
		super(host);
	}
}
