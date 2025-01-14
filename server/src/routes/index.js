import userRouter from './userRoutes.js';
import productRouter from './productRoutes.js';

export default function configureRoutes(app) {
  app.use('/api/users', userRouter);
  app.use('/api/products', productRouter);
}
