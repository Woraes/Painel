"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const Sistemas_1 = require("../models/Sistemas");
const createMenuObject_1 = require("../helpers/createMenuObject");
const search = (req, res) => {
    let query = req.query.q;
    // para o pesquisar não ter o comportamento de apertar enter e ele levar para lista
    //redirect
    if (!query) {
        res.redirect('/');
        return;
    }
    let list = Sistemas_1.Sistema.chamaNome(query);
    res.render('pages/page', {
        menu: (0, createMenuObject_1.createMenuObject)(''),
        list,
        //qnd a pessoa digita ficar na barra oq foi digitado então vamos pegar o query e mandar para pagina tambem
        // la em pages <input type="search" name="q" placeholder="Pesquise"  value="{{ query }}"/>
        query
    });
};
exports.search = search;
