import PubSub from "pubsub-js";

export default class MensagemErro {
  publicar(erros) {
    erros.map(error => {
      PubSub.publish("error-validacao", error);
    });
  }
}
