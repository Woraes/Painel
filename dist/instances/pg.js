"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize"); //1 importa o sequelize config banco
const dotenv_1 = __importDefault(require("dotenv")); //3 fixar a config
dotenv_1.default.config(); //4
//2 agora vamos fazer um export para configurar o PG que vai ser a propia conexão
// aqui vai receber varios parametros PG_DB Bnaco de dados / PG_USER usuario do banco / PG_PASSWORD senha do banco
//depois as configuração da PORT
exports.sequelize = new sequelize_1.Sequelize(process.env.PG_DB, //5 aqui estamos dizendo que as informações vinda são uma string
process.env.PG_USER, process.env.PG_PASSWORD, {
    dialect: 'postgres',
    port: parseInt(process.env.PG_PORT) //port / parseInt para trsformar em um number
});
