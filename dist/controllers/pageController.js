"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prodig = exports.loginci = exports.ris = exports.pacs = exports.ghbam = exports.samu = exports.sigs = exports.pontobiometrico = exports.home = void 0;
//importar o models criado para filtragem de busca
const Sistemas_1 = require("../models/Sistemas");
//importar a função criada para ACTIVE que está no helper
const createMenuObject_1 = require("../helpers/createMenuObject");
//importar
const home = (req, res) => {
    let list = Sistemas_1.Sistema.getAll();
    res.render('pages/page', {
        banner: {
            title: 'Painel Funcional',
            background: 'bannerhome.jpg'
        },
        menu: (0, createMenuObject_1.createMenuObject)('todos'),
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
};
exports.home = home;
const pontobiometrico = (req, res) => {
    let list = Sistemas_1.Sistema.chamaNome('pontobiometrico');
    res.render('pages/pontobiometrico', {
        banner: {
            title: 'Ponto Biometrico',
            background: 'ponto-banner.jpg',
            descricao: 'Torna os processos de RH mais eficientes'
        },
        menu: (0, createMenuObject_1.createMenuObject)("pontobiometrico"),
        list
    });
};
exports.pontobiometrico = pontobiometrico;
const sigs = (req, res) => {
    //res.redirect('https://inovarepontodigital.com.br/login');
    res.render('pages/sigs', {
        banner: {
            title: 'SIGS',
            background: 'sigs.jpg',
            descricao: 'Sistema Integrado de Gestão em Saúde',
        },
        menu: (0, createMenuObject_1.createMenuObject)("sigs"),
    });
};
exports.sigs = sigs;
const samu = (req, res) => {
    res.render('pages/samu', {
        banner: {
            title: 'SAMU',
            background: 'samu.png',
            descricao: 'Pagina em construção',
        },
        menu: (0, createMenuObject_1.createMenuObject)("samu"),
    });
};
exports.samu = samu;
//  export const cisms = (req: Request, res: Response) =>{
//   res.render('pages/cisms',{
//     banner:{
//       title:'Controle de CI',
//       background:'ci.jpeg',
//       descricao:'Pagina em construção',
//     },
//     menu: createMenuObject("cisms"),
//   });
//  }
const ghbam = (req, res) => {
    res.render('pages/ghbam', {
        banner: {
            title: 'GHBAM',
            background: 'ghbam.jpg',
            descricao: 'Gestão Hospitalar de Boletim Atendimento Médico',
        },
        menu: (0, createMenuObject_1.createMenuObject)("ghbam"),
    });
};
exports.ghbam = ghbam;
const pacs = (req, res) => {
    res.render('pages/pacs', {
        banner: {
            title: 'PACS',
            background: 'pacs.jpg',
            descricao: 'Vizualizador de Tomografias e Raio-X',
        },
        menu: (0, createMenuObject_1.createMenuObject)("pacs"),
    });
};
exports.pacs = pacs;
const ris = (req, res) => {
    res.render('pages/ris', {
        banner: {
            title: 'RIS',
            background: 'ris.jpg',
            descricao: 'Sitema de Laudos Médicos',
        },
        menu: (0, createMenuObject_1.createMenuObject)("ris"),
    });
};
exports.ris = ris;
//  export const esus = (req: Request, res: Response) =>{
//   res.render('pages/esus',{
//     banner:{
//       title:'ESUS',
//       background:'esus.png',
//       descricao:'Estratégia e-SUS Atenção Primária',
//     },
//     menu: createMenuObject("esus"),
//   });
//  }
const loginci = (req, res) => {
    res.render('pages/loginci', {
        banner: {
            title: 'Login CI',
            background: '',
            descricao: 'Faça Seu Login',
        },
        menu: (0, createMenuObject_1.createMenuObject)(""),
    });
};
exports.loginci = loginci;
const prodig = (req, res) => {
    res.render('pages/prodig', {
        banner: {
            title: 'PRODIGI',
            background: 'prodig.png.png',
            descricao: 'Processos Digitais',
        },
        menu: (0, createMenuObject_1.createMenuObject)("prodig"),
    });
};
exports.prodig = prodig;
