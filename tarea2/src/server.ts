import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './routes';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
