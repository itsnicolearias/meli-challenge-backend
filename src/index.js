import express from 'express';
import morgan from 'morgan';
import { sequelize } from './config/database/index.js';

const app = express()

const PORT = process.env.port || 4000

app.use(morgan('dev'))

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');   
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(PORT, () => {
    console.log('Server running')
})