module wormhole {
	export module signal {
		export type SignalID = number;
		
		export class Signal {
			public constructor(sid:SignalID) {
				this._sid = sid;
			}
			
			private _sid:SignalID;
			public get sid():SignalID { return this._sid; }
		}
	}
}
