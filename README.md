# ProjetoPainel

# Instalação
# projeto-nodets-site
Tem que ter instalado para rodar o projeto

npm install -g nodemon 

npm install -g typescript

npm install -g ts-node

npm install --save sequelize  "Sequelize é uma biblioteca JS que facilita o gerenciamento de um banco de dados SQL

npm install --save-dev @types/sequelize  "sequelize types"

npm install --save validator

npm install --save-dev @types/validator

npm install pg pg-hstore   "Postgre" Banco de Dados

Criar pasta instances onde vai ficar o arq pg.ts que tem info do banco de dados e vamos para o 

npm install express mustache-express dotenv

npm install --save-dev @types/express @types/mustache-express @types/node

# GitHub*
Criaar um new repository no site pegar a url
terminal (git clone url)
ele cria .gitignore e README.md

depois no terminal iniciar o git

git init
git commit -m "first commit"
git branch -M main
git remote add origin https://seu html do projeto
git push -u origin main

git add .  para adicionar
git push -u     para subir os arquivos

# Inicio

no terminal iniciar o npm

(npm init)
cria o package.json (onde está as config )
prenche os campos ou prencha depois pelo package.json

Caso de erro de privilegio entrar no powershell windows e colocar  (Get-ExecutionPolicy)

Aceitar para todos

depois rodar esse comando no power
( Set-ExecutionPolicy Unrestricted)

pronto

agora (npm init) , 

(tsc --init) cria tsconfig.ts


# Criar Pastas*
depois criar as pastas "src", dentro dela criar pasta "controllers", "models", "routes" e"views" e fora criar  "public" "_html"  << pasta auxiliar.


# Tsconfig*
entrar no tsconfig.ts e descomentar  e colocar o caminho da pasta "rootDir":"/src"
fazer isso tmb no "outDir":"/dist" pra caso prescise dar o build no projeto
descomentar "moduleResolution": "node" (par o type script saber que tipo de projeto estamos fazendo)

# server.ts
depois ir na pasts src e criar o arquivo server.ts


em package-jonson vamos em scrip e criamos um atalho para rodar o servidor
"start-dev": "nodemon -e ts,json,mustache src/server.ts"
para rodar o projeto "npm run start-dev"

# Criando Servidor

vamos importar as bibliotecas que vamos utilizar
no server.ts

"import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';"

agora fazer as devidas configuraçoes

"dotenv.config();"

depois na raiz criar um arquivo chamado .env
# .env
A porta usada 

PORT=3333 

configuração do PgAdmin

PG_DB=PainelFuncional
PG_USER=postgres
PG_PASSWORD=******
PG_PORT=5432


# instances
vamos criar uma pasta chamada instance dentro de src
essa pasta vai conter um arquivo com nome do banco utilizado no meu caso postgre
pg.ts

existe uma função que testa se a conexão foi feita ela testa 
dentro de um teste.ts faça isso 

//apenas para testar a conexão com banco
import {sequelize} from '../instances/pg';

export const cisms = async (req: Request, res: Response) =>{
    try{
        await sequelize.authenticate();
        console.log("Conetado");

    }catch(error){
        console.log("Deu erro:", error);
    }
}



para poder colocar as info do Banco

depois vamos criar o Model para isso devemos ter configurado as dependecias acima

# Model


depois vamos criar o servidor em server.ts

"const server = express();"

agora nosso template

"server.set('view engine', 'mustache');" //passei 2 dias para achar essas miseria de aspas no musteche saushaushuash

configurar aonde vai ser as pastas do nosso projeto
views nome da pasta
path.join(__dirname,) onde vai ser a pasta do arquivo
views e junta com views

"server.set('views', path.join(__dirname, 'views'));"

setar a engine para rodar a função mustache criada acima
"server.engine('mustache', mustache());"

agora vamos configurar a pasta publica onde vai ficar os css e as imagens,
configura uma pasta de arquivos estaticos
"'../public'"  voltar uma pasta para ir para pasta public ../
"server.use(express.static(path.join(__dirname, '../public')));"

Agora colocar //rotas pois aqui que vamos configurar nossas rotas


agora colocamos o servidor para rodar

"server.listen(process.env.PORT);"

# Criando rotas
Na pasta routes criar um arq index.ts

dentro dele vamos importar
"import {Router} from 'express';"

começando a usar ele

"const router = Router();"

dar um "export default router;"  e vamos configura

acima do "export default router;"

Primeira rota a configurar é a rota Home

router.get recebe "/" raiz do projeto

router.get('/')

configuração basica para ver rodando

"router.get('/', (req, res)=>{
    res.send('home');
})"

"export default router;"

Adicionado essa rota agora vamos no servidor  server.ts

vamos dar um import

"import mainRoutes from './routes/index';"

"'./routes/index'" pode apenas por "'./routes'" qnd o arquivo se chamar index.ts
que tambem funciona

agora acima de server.listen

vamos colocar as rotas

"server.use(mainRoutes);"

ja vamos criar a pagina de não encontrado

"server.use((req, res)=>{
    res.send('Página Não Encontrada')
})"

Agora com a primeira rota criada ja podemos rodar o projeto

no terminal "npm run start-dev"

agora pode ir no navegador digitar localhost:PORT e a porta que foi configurada

# Controllers

Analisando seu projeto vamos criar uma controller pageController.ts pois a pagina vai se manter a mesma nas outras rotas chamadas e vamos criar um arq chamado searchController.ts que sera responsavel pela busca

no arq pageController.ts

"import { Request, Response } from "express";"

vai ser a primeira pagina do page

"const home = (req: Request, res: Response) =>{

}"

poderia dar uma renderização porem ainda não criamos as views
mais seria assim

// "res.render('pages/page');"

agora eu tenho que exporta ela para poder utilizar no lado de fora

"export const home = (req: Request, res: Response) =>{

    // "res.render('pages/page');"

}"

agora vamos em routes no arq index.ts para importa para la

"import * as PageController from '../controllers/pageController'"

depois podemos importar a proxima que será

"import * as SearchController from '../controllers/searchController'
"
depois devemos ir no arq searchController emcontrollers para prencher

import { Request, Response } from "express";

"export const search = (req: Request, res: Response) =>{


    // res.render('pages/search');

}"

agora eu já posso usar os meus controllers

Agora vamos criar as nossas rotas de acordo com o projeto que no caso são 5

no arq index.ts na pasta routes
ai mudamos a variavel router.get para o caminho

"router.get('/',PageController.home );"

vamos para a proxima rota

"router.get('/dogs',PageController.dogs );"
"router.get('/cats',PageController.cats );"
"router.get('/fishes',PageController.fishes );"

apos a criação temos que voltar em controllers pageControlle.ts e criar
os controllers em cada arq de controller

exmplo arq searchController.ts

import { Request, Response } from "express";

export const search = (req: Request, res: Response) =>{


    // res.render('pages/search');

}

# Viwes

agora na pasta viwes vamos criar uma pasta chamada
pages e outra chamada partials onde vai ficar os parcias do nosso layout  

na pasta partials vamos criar uma arq chamado 
header.mustache
footer.mustache

no arq index.html vamos pegar o inicio do menu e recortar no header.mustache

vamos no href="css/style.css" e colocar uma /no começo href="/css/style.css" e no  href="/images/favicon.png" /> tmb para apontar para raiz

agora vamos direcionar os caminhos no html

<div class="container">
        <a href="/">Home</a>

Depois de ir vendo os caminhos vamos colocar as rotas certas

<li class="/sigs"><a href="">SIGS</a></li>

pode ver as rotas na pasta routes

depois vamos pegar o footer.mustache que é a parte de baixo do index.html

agora vamos para pasta pages criar uma nova pagina html

lembrando que qnd as paginas são iguais eu crio um só view mudando apenas o conteudo dos dados que eu to mandando

na pasta page criar um arq page.mustache

dentro dele eu vou colocar o meio do index.html

depois eu vou no final e colocar
{{partials/footer}}

e no inicio 
{{>partials/header}}

depois vou até page controller e vou descomentar
export const home = (req: Request, res: Response) =>{
    res.render('pages/page');

}








