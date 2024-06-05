import { Router } from 'express';
import MutantRouter from './mutants.route.js'

const router = Router()

router.use('/', MutantRouter)

export default router;