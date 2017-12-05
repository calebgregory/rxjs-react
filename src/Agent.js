import 'rxjs-es/add/operator/map';

class Agent {
  constructor() {
  }

  addStream(stream$) {
    stream$
      .map((e) => 1)
      .subscribe((v) => { console.log('from agent:', v); })
  }

  removeStream(stream$) {
    console.log(stream$)
  }
}

const agent = new Agent();
export default agent;
