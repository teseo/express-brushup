import express, { Request, Response } from 'express';
import userRouter from './routes/user';
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.get('/', (req: Request, res: Response) => {
  res.render('index', { text: 'world' });
});

app.use('/users', userRouter);
app.listen(3000);
