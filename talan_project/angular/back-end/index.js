import express from "express";
import cors from 'cors';
import { consultorRouter } from './routes/routes.js';


const app = express();

app.use(cors());

app.use(express.json());


// routes
app.use('/api/consultor', consultorRouter);
app.listen(3000);
console.log('The app is listening at http://localhost:3000');