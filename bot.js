let users = {};

const perguntas = [
  "Qual a sua rede pastoral?",
  "Quem são os líderes do GC?",
  "Quem é o colíder?",
  "Quantidade de discípulos adultos?",
  "Qual a quantidade de discípulos crianças?",
  "Quem ministrou a palavra?",
  "Quem deu a palavra de oferta?",
  "Quantos discipulos adultos estiveram presentes hoje?",
  "Quais foram? (separar por vírgula)",
  "Quantos discipulos crianças estiveram presentes hoje?",
  "Quantas crianças ausentes tiveram hoje?",
  "Teve adultos ausentes? (justificar)",
  "Quantos visitantes tivemos hoje?",
  "Teve conversão? se sim quantas?",
  "Teve oferta em dinheiro?",
  "Alguma Observação?",
];

function start(client) {
  client.onMessage((message) => {
    const user = message.from;

    if (!users[user]) {
      users[user] = { respostas: [], etapa: 0 };
      client.sendText(user, "Olá, vamos preencher o relatório de GC !!");
      client.sendText(user, perguntas[0]);
      return;
    }

    let userData = users[user];

    if (userData.etapa < perguntas.length) {
      userData.respostas.push(message.body);

      if (userData.etapa === perguntas.length - 1) {
        const dataAtual = new Date().toLocaleDateString();
        const relatório = `
📋 RELATÓRIO DE GC
      
📅 Data: ${dataAtual}
👥  Rede pastoral/Supervisão: ${userData.respostas[0]}

🔹 Líder: ${userData.respostas[1]}
🔹 Colíder: ${userData.respostas[2]}
🔹 Quantidade de discípulos adultos: ${userData.respostas[3]}
🔹 Quantidade de discípulos crianças: ${userData.respostas[4]}
🔹 Ministrou a Palavra: ${userData.respostas[5]} 

🔹 Ministrou a oferta: ${userData.respostas[6]} 
🔹 Discípulos adultos presentes: ${userData.respostas[7]}
🔹 ${userData.respostas[8]}
🔹 Discípulos crianças presentes: ${userData.respostas[9]}

🔹 Crianças ausentes: ${userData.respostas[10]}

🔹 Adultos ausentes: ${userData.respostas[11]}

🔹 Visitantes: ${userData.respostas[12]}
🔹 Conversão: ${userData.respostas[13]}
🔹 Oferta em dinheiro: ${userData.respostas[14]}
🔹 Observação:${userData.respostas[15]}`;

        client.sendText(user, "📄 Seu relatório foi gerado com sucesso!");

        client.sendText(user, relatório);

        delete users[user];
      } else {
        userData.etapa++;
        client.sendText(user, perguntas[userData.etapa]);
      }
    }
  });
}

module.exports = { start };
