import {  Request, Response,  } from "express";
import {Op} from 'sequelize';

import { Userci } from '../models/Userci';


export const home = async (req: Request, res: Response)=>{
let users = await Userci.findAll
}
// exportando para usar fora
export const novoUsuario = async (req: Request, res: Response,) =>{
    let {name, email, password} = req.body;

    if(name) {
        const newUserci = Userci.build({name});

        if (email){
            newUserci.email = (email);
        }
        if (password){
            newUserci.password = (password);
        }
        await newUserci.save();
    }
    res.redirect('/cisms');

   
}