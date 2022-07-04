import { Sequelize } from 'sequelize'; // config banco
import dotenv from 'dotenv'; // fixar a config


dotenv.config();

//agora vamos fazer um export para configurar o PG
export const sequelize = new Sequelize(
    process.env.PG_DB as string,  // aqui estamos dizendo que as informações vinda são uma string
    process.env.PG_USER as string,
    process.env.PG_PASSWORD as string,
    {
        dialect: 'postgres',
        port: parseInt(process.env.PG_PORT as string)
    }
);