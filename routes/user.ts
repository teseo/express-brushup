import express, { NextFunction, Request, Response } from 'express';
const router = express.Router();

interface User {
  name: string;
}

interface UserRequestParams extends Request {
  user?: User;
}

router.get('/', (req: Request, res: Response) => {
  res.send('User List');
});

router.post('/', (req: Request, res: Response) => {
  res.send('Create user');
});

router.get('/new', (req: Request, res: Response) => {
  res.render('users/new');
});

const users = [{ name: 'Kyle' }, { name: 'Sally' }];
router.param(
  'id',
  (
    req: UserRequestParams,
    res: Response,
    next: NextFunction,
    id: number
  ) => {
    req.user = users[id];
    next();
  }
);

router
  .route('/:id')
  .get((req: UserRequestParams, res: Response) => {
    console.log(req.user);
    res.send(`Get user with Id ${req.params.id}`);
  })
  .put((req: Request, res: Response) => {
    res.send(`Put user with Id ${req.params.id}`);
  })
  .delete((req: Request, res: Response) => {
    res.send(`Deletek user with Id ${req.params.id}`);
  });

export default router;
