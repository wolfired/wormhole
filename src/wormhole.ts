/// <reference path="signal/SignalRouter.ts" />

import sig = wormhole.signal;




var sr = new sig.SignalRouter();
sr.addHandler(1000, (s:sig.Signal):void => { console.log(this) });
sr.route(new sig.Signal(1000));
