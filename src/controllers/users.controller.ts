import { Request, Response } from 'express';
import { postegreSQL } from '../database';
import { QueryResult } from 'pg';

export const getUsers = async (req: Request, res: Response) => {
	try {
		const { rows: users }: QueryResult = await postegreSQL.query('SELECT * FROM users');

		res.status(200).send({ data: users, message: '', succes: true });

		res;
	} catch (error) {
		res.status(500).send({ data: null, message: `${(error as Error).message}`, succes: true });
	}
};

export const getUserById = async (req: Request, res: Response) => {
	try {
		const { rows: user }: QueryResult = await postegreSQL.query(`SELECT * FROM users WHERE id=${req.params.id}`);
		res.status(200).send({ data: user, message: '', succes: true });
	} catch (error: unknown) {
		res.status(500).send({ data: null, message: `${(error as Error).message}`, succes: true });
	}
};

export const postUser = async (req: Request, res: Response) => {
	const { email, name } = req.body;
	try {
		await postegreSQL.query(`INSERT INTO users (name, email) VALUES ($1, $2)`, [name, email]);
		res.status(200).send({ data: req.body, message: '', succes: true });
	} catch (error: unknown) {
		res.status(500).send({ data: null, message: `${(error as Error).message}`, succes: true });
	}
};

export const updateUser = async (req: Request, res: Response) => {
	const { email, name } = req.body;
	const { id } = req.params;
	try {
		await postegreSQL.query(`UPDATE users SET email = $1, name = $2 WHERE id =$3`, [email, name, id]);
		res.status(200).send({ data: req.body, message: '', succes: true });
	} catch (error: unknown) {
		res.status(500).send({ data: null, message: `${(error as Error).message}`, succes: true });
	}
};

export const deleteuser = async (req: Request, res: Response) => {
	const { id } = req.params;
	try {
		await postegreSQL.query(`DELETE FROM users WHERE id =$1`, [id]);
		res.status(200).send({ data: req.body, message: '', succes: true });
	} catch (error: unknown) {
		res.status(500).send({ data: null, message: `${(error as Error).message}`, succes: true });
	}
};
