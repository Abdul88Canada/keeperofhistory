import express from 'express';

import { getBusinesses, getOneBusiness, createBusiness, updateBusiness, deleteBusiness } from '../controllers/business.js';

const router = express.Router(); 

router.get('/', getBusinesses);
router.get('/:id', getOneBusiness);
router.post('/', createBusiness);
router.patch('/:id', updateBusiness);
router.delete('/:id', deleteBusiness);

export default router;