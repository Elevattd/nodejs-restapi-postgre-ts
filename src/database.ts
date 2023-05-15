import { Pool } from 'pg';

export const postegreSQL = new Pool({
	user: 'postgres',
	host: 'localhost',
	password: 'admin',
	database: 'restapits',
	port: 5432,
});
