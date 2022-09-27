"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Userci = void 0;
const sequelize_1 = require("sequelize"); //importa model e datatypes do sequelize
const pg_1 = require("../instances/pg"); // aqui importamos a instancia criada para configuração do banco pg
//agora vamos para o sequelize ensinar ele como trabalhar
//1 export const nome recebe sequelize que e o desta conexão e vamos usar o .define 
//que vai definir para nos a configuração
//2 define vai receber <UserInstance>
//3 repito o nome do model
// agora vamos detalhar as colunas
exports.Userci = pg_1.sequelize.define("Userci", {
    id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true, // para o banco fazer a incrementação do id 
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
    }
}, {
    tableName: 'userci',
    timestamps: false,
});
