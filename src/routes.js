import { Router } from 'express';

import './database';
import UserController from './controllers/UserController';
import AddressController from './controllers/AddressController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/address', AddressController.store);

export default routes;
