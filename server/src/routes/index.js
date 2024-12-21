import userRouter from './userRoutes.js';

export default function configureRoutes(app) {
  app.use('/api/users', userRouter);
}
