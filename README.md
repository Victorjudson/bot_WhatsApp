Relatório de GC (Grupo do Caminho)
Este projeto consiste em um bot de WhatsApp desenvolvido em JavaScript, que coleta dados de um usuário para gerar um relatório de GC (Grupo de Crescimento). O bot faz uma série de perguntas e, ao final, gera um relatório com as respostas fornecidas.

Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript no servidor.
WhatsApp Web API (cliente de WhatsApp): Comunicação com os usuários no WhatsApp.
JavaScript (ES6): Linguagem de programação usada para a lógica do bot.
Como Funciona
O bot envia uma mensagem inicial para o usuário no WhatsApp, solicitando o preenchimento do relatório de GC.
O bot faz uma série de perguntas e o usuário responde a cada uma delas.
Após o preenchimento completo do formulário, o bot gera um relatório com as respostas fornecidas.
O relatório é enviado de volta ao usuário no formato de texto formatado, com todos os dados fornecidos.
Após a geração do relatório, os dados do usuário são apagados da memória para garantir que o processo não seja repetido.
Estrutura do Projeto
1. Arquivo app.js:
Contém a lógica principal para interação com o WhatsApp e o fluxo de perguntas e respostas. Quando o usuário responde, as respostas são armazenadas e ao final, um relatório é gerado.

2. Arquivo perguntas.js:
Contém o array de perguntas que o bot fará ao usuário.

3. Gerenciamento de usuários:
Armazenamento de estado: Os dados dos usuários são armazenados temporariamente em memória, na variável users. Cada usuário é identificado pelo número de telefone (ou identificador único).
Fluxo de perguntas: O bot segue a ordem das perguntas e as respostas são armazenadas em um array.
Como Rodar o Projeto
1. Instalar dependências
Primeiro, instale as dependências necessárias:

bash
Copiar
Editar
npm install
2. Iniciar o servidor
Inicie o servidor com o comando:

bash
Copiar
Editar
node app.js
Isso irá rodar o bot e ele ficará aguardando as mensagens no WhatsApp.

3. Configuração do WhatsApp
Este bot utiliza uma API de WhatsApp Web para enviar e receber mensagens. Certifique-se de ter a configuração correta do cliente para o WhatsApp, como a autenticação necessária.

Como Funciona o Fluxo
O usuário envia uma mensagem ao bot (pode ser um comando ou qualquer interação inicial).
O bot começa o processo de perguntas, com a primeira pergunta sendo a sobre "Qual a sua rede pastoral?".
A cada nova resposta, o bot incrementa a etapa e envia a próxima pergunta.
Quando todas as perguntas forem respondidas, o bot gera o relatório de GC, que é enviado ao usuário.
Após a finalização, os dados do usuário são excluídos.
Exemplo de Relatório Gerado
Após preencher todas as perguntas, o usuário receberá um relatório com a seguinte estrutura:

yaml
Copiar
Editar
📋 RELATÓRIO DE GC

📅 Data: 21/02/2025
👥 Rede pastoral/Supervisão: Rede X

🔹 Líder: João
🔹 Colíder: Maria
🔹 Quantidade de discípulos adultos: 15
🔹 Quantidade de discípulos crianças: 10
🔹 Ministrou a Palavra: João

🔹 Ministrou a oferta: Maria
🔹 Discípulos adultos presentes: 12
🔹 João, Carlos, Lucas
🔹 Discípulos crianças presentes: 8

🔹 Crianças ausentes: 2

🔹 Adultos ausentes: 3

🔹 Visitantes: 5
🔹 Conversão: 2
🔹 Oferta em dinheiro: R$ 150,00
🔹 Observação: Evento abençoado!
Contribuições
Se você quiser contribuir para este projeto, sinta-se à vontade para enviar pull requests. Fique à vontade também para abrir issues com sugestões ou melhorias!

Licença
Este projeto é licenciado sob a MIT License - veja o arquivo LICENSE para mais detalhes.
