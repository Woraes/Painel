import express, {Router} from 'express';

import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';
import * as UserciController from '..//controllers/userciController';



const router = Router();


router.get('/',PageController.home );
router.get('/pontobiometrico',PageController.pontobiometrico );
router.get('/sigs',PageController.sigs );
router.get('/samu',PageController.samu );
router.get('/cisms',PageController.cisms );
router.get('/ghbam',PageController.ghbam );
router.get('/pacs',PageController.pacs );
router.get('/ris',PageController.ris );
router.get('/esus',PageController.esus );
router.get('/loginci', PageController.loginci)
router.post('/novousuario', UserciController.novoUsuario)
router.get('/prodig',PageController.prodig );

router.get('/search',SearchController.search);

export default router;

