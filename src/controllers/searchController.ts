import { Request, Response } from "express";

import { Sistema } from "../models/Sistemas";
import { createMenuObject } from "../helpers/createMenuObject";


export const search = (req: Request, res: Response) =>{

    let query: string = req.query.q as string;


    // para o pesquisar não ter o comportamento de apertar enter e ele levar para lista
    //redirect
    if(!query){
        res.redirect('/');
        return;
    }

    let list = Sistema.chamaNome(query);

    res.render('pages/page',{
        menu: createMenuObject(''),
        list,
        //qnd a pessoa digita ficar na barra oq foi digitado então vamos pegar o query e mandar para pagina tambem
        // la em pages <input type="search" name="q" placeholder="Pesquise"  value="{{ query }}"/>
        query

    })

}