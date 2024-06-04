import express from 'express';
import morgan from 'morgan';

const app = express()

const PORT = process.env.port || 4000

app.use(morgan('dev'))

app.listen(PORT, () => {
    console.log('Server running')
})