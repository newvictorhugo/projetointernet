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

function gerarPaginaPotencia(requisicao, resposta){
    try{
        const numero = Number(requisicao.query.numero);
        let conteudoResposta = `
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Potência de 1 a 100 da base ${numero}</title>
        </head>
        <body>
            <h1>Potência de 1 a 100 da base ${numero}</h1>
            <ul>
        `
        for(let i=0;i<101;i++){
            const linha = `<li>${numero} elevado a ${i} = ${numero**i}</li>`
            conteudoResposta += linha;
        }
        conteudoResposta+=`
            </ul>
        </body>
        </html>
        `
        resposta.end(conteudoResposta)
    } catch(erro){
        resposta.end(`
        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Erro</title>
        </head>
        <body>
            <h1>Não foi possível processar a sua requisição</h1>
            <h2>Erro ao tentar gerar os resultados</h2>
            <h2>Na barra de endereço digite http://http://localhost:3000/potencia?numero=2</h2>
            <h3>${erro.message}</h3>
        </body>
        </html>`)
        return;
    }
}
app.get('/', paginaInicial)
app.get('/potencia', gerarPaginaPotencia)

app.listen(porta, host, () =>{
    console.log(`Servidor executando em http://${host}:${porta}.`);
});