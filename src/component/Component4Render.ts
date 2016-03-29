import { ComponentID, Component } from './Component';

export class Component4Render extends Component {
	public static ID:ComponentID = Component.Register(Component4Render);
	
	public constructor() {
		super();
	}
}
