import express, { Router } from 'express';
import ClassesControllers from './controllers/ClassesControllers';
import ConnectionsControllers from './controllers/ConnectionControleers';

const routes = express.Router();

const classesControlles = new ClassesControllers();
const coneControlles = new ConnectionsControllers();

routes.get('/classes', classesControlles.index);
routes.post('/classes', classesControlles.create);

routes.get('/connections', coneControlles.index);
routes.post('/connections', coneControlles.create);

export default routes;


