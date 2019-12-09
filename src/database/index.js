import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../models/User';
import Address from '../models/Address';

// const models = [Client, Employee, Company];

const connection = new Sequelize(databaseConfig);

User.init(connection);
Address.init(connection);
// Company.init(connection);

// Employee.associate(connection.models);

export default connection;
