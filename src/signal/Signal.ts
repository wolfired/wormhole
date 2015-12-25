module wormhole {
	export module signal {
		export type SignalID = number;
		
		export class Signal {
			sid:SignalID;
			
			constructor(sid:SignalID) {
				this.sid = sid;
			}
		}
	}
}
