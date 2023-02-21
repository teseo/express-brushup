import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.send('User List');
});

router.get('/new', (req: Request, res: Response) => {
  res.send('User new form');
});

export default router;
