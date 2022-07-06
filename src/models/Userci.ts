
//apenas para testar a conexão com banco
import { timeStamp } from 'console';
import { Request, Response } from 'express';

import {Model, DataTypes} from 'sequelize'//importa model e datatypes do sequelize
import {sequelize} from '../instances/pg';// aqui importamos a instancia criada para configuração do banco pg


//apenas para testar a conexão com banco
// export const home = async (req: Request, res: Response) =>{
//     try{
//         await sequelize.authenticate();
//         console.log("Conetado");

//     }catch(error){
//         console.log("Deu erro:", error);
//     }

// }

// aqui vamos declarar os tipos que o input está recebnedo
// criar um type para ensinar o sequelize oq que ja temos no banco

//type do meu usuario externder um type que já tem com o meu type novo

//1 Cria a interface
//2 da um nome do type
//3 extends Model
//4 agora exporta ele com export
//5 definir as colunas com sua definição
// criado o type geral
    export interface UserInstanceCI extends Model{
        id: number;
        name: string;
        email: string;
        password: string;

    }
    //agora vamos para o sequelize ensinar ele como trabalhar
//1 export const nome recebe sequelize que e o desta conexão e vamos usar o .define 
//que vai definir para nos a configuração
//2 define vai receber <UserInstance>
//3 repito o nome do model
// agora vamos detalhar as colunas



export const Userci = sequelize.define<UserInstanceCI>("Userci", {
    id:{
        primaryKey: true,//id chave primaria true
        type: DataTypes.INTEGER,//type dele 
        autoIncrement: true,// para o banco fazer a incrementação do id 
},
name:{
    type: DataTypes.STRING,
    
},
email:{
    type: DataTypes.STRING,
},
password:{
    type: DataTypes.STRING,
}
},{
   tableName: 'userci',
   timestamps: false,

});

