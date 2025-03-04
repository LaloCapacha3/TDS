import { Router, Request, Response } from 'express';
import authenticateToken from '../middlewares/authenticateToken';
import jwt from 'jsonwebtoken';

const router = Router();
const SECRET_KEY = process.env.JWT_SECRET || 'soyunsecreto';

router.get('/', authenticateToken, (req: Request, res: Response) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            res.status(401).json({ error: 'Token no proporcionado' });
            return;
        }
        
        const decoded = jwt.verify(token, SECRET_KEY) as { correo: string, password: string };
        res.json({ correo: decoded.correo, password: decoded.password });
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
    }
});

export default router;
