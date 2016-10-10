export default class LivePeopleWebsocket {
  constructor(url, dispatcher) {
    this.websocket = new WebSocket(`ws://${url}`);
    this.dispatcher = dispatcher
    this.websocket.onmessage = function (event) {
      dispatcher(event.data)
    }
  }

  postMessage(obj) {
    this.websocket.send(
      JSON.stringify(obj)
    );
  }

  close() {
    this.websocket.close();
  }

}
