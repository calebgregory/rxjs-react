import 'rxjs-es/add/operator/map';
import 'rxjs-es/add/operator/scan';

class Agent {
  constructor() {
    this.registry = {};
  }

  addStream(stream$) {
    var registryID = Math.random();
    var sub = stream$
      .map((e) => 1)
      .scan((acc, v) => acc + v, 0)
      .subscribe((v) => { console.log('from agent:', v); });

    console.log('stream subscribed');
    this.registry[registryID] = sub;
    return registryID;
  }

  removeStream(registryID) {
    var sub = this.registry[registryID];
    sub.unsubscribe();
    console.log('stream unsubscribed')
    delete this.registry[registryID];
  }
}

const agent = new Agent();
export default agent;
