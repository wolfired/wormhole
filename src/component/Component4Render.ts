import { Component, Reg } from './Component';
import { IEntity } from './IEntity';

@Reg
export class Component4Render extends Component {
	public constructor(host:IEntity) {
		super(host);
	}
}
