import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();
const SECRET_KEY = process.env.JWT_SECRET || 'soyunsecreto';

router.post('/', (req: Request, res: Response) => {
    //console.log(req.body);
    const { correo, password } = req.body;
    if (!correo || !password) {
        res.status(400).json({ error: 'Correo y password son requeridos' });
        return;
    }
    
    const token = jwt.sign({ correo, password }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

export default router;