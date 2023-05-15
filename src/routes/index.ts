import { Router } from 'express';
import { deleteuser, getUserById, getUsers, postUser, updateUser } from '../controllers/users.controller';
const router = Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', postUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteuser);

export default router;
