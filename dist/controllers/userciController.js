"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.novoUsuario = exports.home = void 0;
const Userci_1 = require("../models/Userci");
const home = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let users = yield Userci_1.Userci.findAll;
});
exports.home = home;
// exportando para usar fora
const novoUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { name, email, password } = req.body;
    if (name) {
        const newUserci = Userci_1.Userci.build({ name });
        if (email) {
            newUserci.email = (email);
        }
        if (password) {
            newUserci.password = (password);
        }
        yield newUserci.save();
    }
    res.redirect('/cisms');
});
exports.novoUsuario = novoUsuario;
