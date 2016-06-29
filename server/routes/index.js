import express from 'express';
import memos from './memos';
import account from './account';
import log from './log';

const router = express.Router();
router.use('/memos', memos);
router.use('/account', account);
router.use('/log', log);

export default router;
