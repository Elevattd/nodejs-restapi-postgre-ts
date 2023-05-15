import { Router } from 'express';
import {
	deleteuser,
	getUserById,
	getUsers,
	getUsersByParams,
	postUser,
	updateUser,
} from '../controllers/users.controller';
const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.get('/users', getUsersByParams);
router.post('/users', postUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteuser);

export default router;
