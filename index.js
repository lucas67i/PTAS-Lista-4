// Protocolo HTTP.
const http = require("http")

// Endereço da maquina que será o servidor.
const host = "localhost"

// A Porta é um número que da acesso ao servidor, ela pode ir de 1 até 65235.
const porta = 3000

const resposta = function(req, res){
    res.end(`
    <html>
        <head>
            <meta charset="utf-8">
            <style>
                body{
                    color: black;
                    background-color: green
                }
                
                .container{
                  text-align: center
                }
            </style>
        </head>
        <body>
            <h1>Meu nome é Lucas Ribeiro Silva, tenho 16 anos e estou cursando Técnico em Informatica no IFMS.</h1>
        </body>
    </html>
    `)
}

const servidor = http.createServer(resposta)

// Um servidor, nada mais é do que um "Programa" que tem como finalidade escutar uma porta e dar uma resposta. 
servidor.listen(porta, host, function(){
    console.log("Servidor funcionando.")
})