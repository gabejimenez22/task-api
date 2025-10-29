import express from 'express';
import * as taskController from '../controllers/taskController.js';
import { validateTask, validateIdParam } from '../middleware/validateTask.js';


const router = express.Router();

router.get('/', taskController.getTasks);
router.post('/', validateTask, taskController.createTask);
router.get('/:id', validateIdParam, taskController.getTaskById);

export default router;