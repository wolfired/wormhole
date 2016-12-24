export type SignalID = uint32;

export class Signal {
	public constructor(sid: SignalID) {
		this.Sid = sid;
	}

	public readonly Sid: SignalID;
}
