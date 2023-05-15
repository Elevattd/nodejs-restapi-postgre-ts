import express from 'express';
import cors from 'cors';
const app = express();

import router from './routes';

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(
	cors({
		origin: '*',
		credentials: true,
		methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
		allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization', 'authorization'],
	}),
);

app.use(router);

app.listen(3001);
console.log(`SERVER ON PORT = ${3001}`);
