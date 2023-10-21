import cors from 'cors';
import express, { ErrorRequestHandler, Request, Response } from 'express';
import morgan from 'morgan';

import { router } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(router);

app.use((err: ErrorRequestHandler, req: Request, res: Response) => {
  console.error(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
