// routes/index.ts
import express, { Router, Request, Response } from 'express';
import authMiddleware from '../middleware/authMiddleware.js';

const router: Router = express.Router();

router.get('/', (_req: Request, res: Response) => {
    res.send('Homepage');
});

router.get('/protected', authMiddleware, (_req: Request, res: Response) => {
    res.send('Protected Route');
});
export default router;
