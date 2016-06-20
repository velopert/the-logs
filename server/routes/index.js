import express from 'express';
import memos from './memos';

const router = express.Router();
router.use('/memos', memos);
export default router;
