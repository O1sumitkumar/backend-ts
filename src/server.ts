import express, { Application } from 'express';
import indexRouter from './routes/index.js';

const app: Application = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}😒`);
});
