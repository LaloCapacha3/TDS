import { Router } from 'express';
import loginRouter from './login';
import perfilRouter from './perfil';

const router = Router();

router.use('/login', loginRouter);
router.use('/perfil', perfilRouter);

export default router;