import  { Router } from 'express';
import MutantController from '../controllers/mutant.controller.js';


const router = Router()
const mutantController = new MutantController();

router.get('/mutants', mutantController.getDna)
router.post('/mutants', mutantController.createDna)
router.get('/stats', mutantController.getStats)


export default router;