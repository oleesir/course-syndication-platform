import express from 'express';
import db from './db/index';
import routes from './routes/index';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', routes);

const port = parseInt(process.env.PORT, 10) || 3000;


const server = app.listen(port, () => console.log(`Connected to port ${port}`));

export { server };

export default app;
