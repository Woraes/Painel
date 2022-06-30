import {Router} from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

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

router.get('/search',SearchController.search);

export default router;

