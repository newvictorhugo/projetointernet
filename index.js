import express from 'express';

const app = express();

const host = '0.0.0.0'; // ip genérico que representa todas as interfaces
const porta = 3000;

//requisição e parametros que o express automaticamente passará para a sua função
function paginaInicial(requisicao, resposta){
    resposta.send(`<!DOCTYPE html>
    <html lang="pt-br">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Seja bem vindo a minha primeira aplicação</title>
    </head>
    <body>
        <h1>Hello World</h1>
    </body>
    </html>`)
    resposta.end();
}
app.get('/', paginaInicial)

app.listen(porta, host, () =>{
    console.log(`Servidor executando em http://${host}:${porta}.`);
});