# 📋 Relatório de GC (Grupo de Crescimento)
Este projeto é um bot de WhatsApp desenvolvido em JavaScript para gerar relatórios de Grupo de Crescimento (GC). O bot faz uma série de perguntas e, ao final, gera um relatório detalhado com as respostas fornecidas pelo usuário

## 🚀 Tecnologias Utilizadas
Node.js: Ambiente de execução JavaScript no servidor.
WhatsApp Web API (Cliente WhatsApp): Comunicação com os usuários no WhatsApp.
JavaScript (ES6): Linguagem de programação usada para a lógica do bot.

## 🔍 Como Funciona
O bot envia uma mensagem inicial para o usuário, pedindo para preencher o relatório de GC.
O bot faz uma sequência de perguntas e o usuário vai respondendo uma a uma.
Após a última resposta, o bot gera um relatório detalhado com as informações coletadas.
O relatório é enviado de volta ao usuário de forma estruturada e formatada.
Ao final, os dados do usuário são apagados da memória para evitar repetições do processo

## 🧑‍💻 Estrutura do Projeto
1. Arquivo app.js:
Contém a lógica principal para interagir com o WhatsApp e controlar o fluxo de perguntas e respostas.
As respostas do usuário são armazenadas em memória e o relatório final é gerado no final.
2. Arquivo perguntas.js:
Contém o array de perguntas que o bot faz ao usuário durante a coleta dos dados.
3. Gerenciamento de Usuários:
Armazenamento de estado: Os dados dos usuários são armazenados temporariamente na variável users durante a interação.
Fluxo de perguntas: O bot faz as perguntas em sequência e armazena as respostas. Ao final, um relatório completo é gerado.


## 📄 Exemplo de Relatório Gerado
Ao finalizar o processo, o bot gera e envia um relatório para o usuário no formato abaixo:

📋 **RELATÓRIO DE GC**

📅 **Data**: 21/02/2025  
👥 **Rede pastoral/Supervisão**: Rede X  

🔹 **Líder**: João  
🔹 **Colíder**: Maria  
🔹 **Quantidade de discípulos adultos**: 15  
🔹 **Quantidade de discípulos crianças**: 10  
🔹 **Ministrou a Palavra**: João  

🔹 **Ministrou a oferta**: Maria  
🔹 **Discípulos adultos presentes**: 12  
🔹 João, Carlos, Lucas  
🔹 **Discípulos crianças presentes**: 8  

🔹 **Crianças ausentes**: 2  

🔹 **Adultos ausentes**: 3  

🔹 **Visitantes**: 5  
🔹 **Conversão**: 2  
🔹 **Oferta em dinheiro**: R$ 150,00  
🔹 **Observação**: Evento abençoado!
