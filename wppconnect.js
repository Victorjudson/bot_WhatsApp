const wppconnect = require("@wppconnect-team/wppconnect");
const { start } = require("./bot");

function creatClient() {
  wppconnect
    .create()
    .then((client) => {
      start(client);
    })
    .catch((error) => {
      console.log("erro ao conectar com o WhatsApp", error);
    });
}

module.exports = { creatClient };
