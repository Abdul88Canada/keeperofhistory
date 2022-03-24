import express from 'express';

import { getUser, createUser, updateUser, deleteUser } from '../controllers/user.js';

const router = express.Router(); 

router.get('/:email', getUser);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;