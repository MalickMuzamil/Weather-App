import express from 'express';
const router = express.Router();

import SearchModuleFunction from '../Controller/controller.js'


router.post("/search" , SearchModuleFunction)


export default router;