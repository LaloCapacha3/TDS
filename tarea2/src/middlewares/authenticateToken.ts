import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'soyunsecreto';

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization');
    if (!token) {
        res.status(401).json({ error: 'Acceso denegado, token no proporcionado' });
        return;
    }

    try {
        jwt.verify(token.replace('Bearer ', ''), SECRET_KEY);
        next();
    } catch (error) {
        res.status(401).json({ error: 'Token inválido' });
        return;
    }
};

export default authenticateToken;
