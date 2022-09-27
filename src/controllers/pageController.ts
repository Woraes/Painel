import { Request, Response } from "express";

//importar o models criado para filtragem de busca
import {Sistema} from '../models/Sistemas'

//importar a função criada para ACTIVE que está no helper
import {createMenuObject} from '../helpers/createMenuObject';

//importar

export const home = (req: Request, res: Response) =>{
  let list = Sistema.getAll();

 res.render('pages/page',{
      banner:{
        title:'Painel Funcional',
        background:'bannerhome.jpg'
      },
      menu: createMenuObject('todos'),
      // menu:{
      //   todos:true,
      //   pontobiometrico:false,
      //   sigs:false,
      //   samu:false,
      //   cisms:false,
      //   ghbam:false,
      //   pacs:false,
      //   ris:false,
      //   esus:false
      // }
      list

 });
  

}

export const pontobiometrico = (req: Request, res: Response) =>{

    let list = Sistema.chamaNome('pontobiometrico');

    res.render('pages/pontobiometrico',{
      banner:{
        title:'Ponto Biometrico',
        background:'ponto-banner.jpg',
        descricao:'Torna os processos de RH mais eficientes'
      },
      menu: createMenuObject("pontobiometrico"),
      list
    });
   
   }
   export const sigs = (req: Request, res: Response) =>{

     //res.redirect('https://inovarepontodigital.com.br/login');
     res.render('pages/sigs',{
      banner:{
        title:'SIGS',
        background:'sigs.jpg',
        descricao:'Sistema Integrado de Gestão em Saúde',
        
      },
      menu: createMenuObject("sigs"),
    });
   
   }

   export const samu = (req: Request, res: Response) =>{
    res.render('pages/samu',{
      banner:{
        title:'SAMU',
        background:'samu.png',
        descricao:'Pagina em construção',
        
      },
      menu: createMenuObject("samu"),
    });
   
   }

   export const cisms = (req: Request, res: Response) =>{
    res.render('pages/cisms',{
      banner:{
        title:'Controle de CI',
        background:'ci.jpeg',
        descricao:'Pagina em construção',
        
      },
      menu: createMenuObject("cisms"),
    });
   
   }

   export const ghbam = (req: Request, res: Response) =>{

    res.render('pages/ghbam',{
      banner:{
        title:'GHBAM',
        background:'ghbam.jpg',
        descricao:'Gestão Hospitalar de Boletim Atendimento Médico',
        
      },
      menu: createMenuObject("ghbam"),
    });
   
   }

   export const pacs = (req: Request, res: Response) =>{

    res.render('pages/pacs',{
      banner:{
        title:'PACS',
        background:'pacs.jpg',
        descricao:'Vizualizador de Tomografias e Raio-X',
        
      },
      menu: createMenuObject("pacs"),
    });
   
   }

   export const ris = (req: Request, res: Response) =>{

    res.render('pages/ris',{
      banner:{
        title:'RIS',
        background:'ris.jpg',
        descricao:'Sitema de Laudos Médicos',
        
      },
      menu: createMenuObject("ris"),
    });
   
   }

   export const esus = (req: Request, res: Response) =>{

    res.render('pages/esus',{
      banner:{
        title:'ESUS',
        background:'esus.png',
        descricao:'Estratégia e-SUS Atenção Primária',
        
      },
      menu: createMenuObject("esus"),
    });
   
   }

  export const progdig = (req: Request, res: Response) =>{

    res.render('pages/progdig',{
      banner:{
        title:'PROGDIG',
        background:'progdig.png.png',
        descricao:'Processo Digitais',
        
      },
      menu: createMenuObject("progdig"),
    });
   
   }
