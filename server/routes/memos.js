import memo from '../models/memo';
import express from 'express';

const router = express.Router();

router.post('/', memo.write);
router.get('/', memo.list);
router.get('/:id', memo.show);

export default router;
