import { Sequelize } from 'sequelize'; //1 importa o sequelize config banco
import dotenv from 'dotenv'; //3 fixar a config


dotenv.config();//4

//2 agora vamos fazer um export para configurar o PG que vai ser a propia conexão
// aqui vai receber varios parametros PG_DB Bnaco de dados / PG_USER usuario do banco / PG_PASSWORD senha do banco
//depois as configuração da PORT
export const sequelize = new Sequelize(
    process.env.PG_DB as string,  //5 aqui estamos dizendo que as informações vinda são uma string
    process.env.PG_USER as string,
    process.env.PG_PASSWORD as string,
    {
        dialect: 'postgres', // dialeto
        port: parseInt(process.env.PG_PORT as string) //port / parseInt para trsformar em um number
    }
);