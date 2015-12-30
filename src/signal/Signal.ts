module wormhole {
	export module signal {
		export type SignalID = number;
		
		export class Signal {
			public constructor(sid:SignalID) {
				this.sid = sid;
			}
			
			public sid:SignalID;
		}
	}
}
