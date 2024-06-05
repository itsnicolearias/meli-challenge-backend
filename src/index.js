import express from 'express';
import morgan from 'morgan';
import { sequelize } from './config/database/index.js';
import { Dna } from './models/dna.model.js';
import indexRouter from './routes/index.js'

const app = express()

const PORT = process.env.port || 4000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', indexRouter)

try {
    await sequelize.authenticate();
    await Dna.sync();
    console.log('Connection has been established successfully.');   
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.listen(PORT, () => {
    console.log('Server running')
})