const express = require('express');
const mongoose = require('mongoose');
const { CONNECTION_STRING, PORT } = require('./env');

const cors = require('./middlewares/cors');
const catalogController = require('./controllers/catalog');
const usersController = require('./controllers/user');
const auth = require('./middlewares/auth');

start();

async function start() {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Database connected');
    } catch (err) {
        console.error('Database connection failed');
        process.exit(1);
    }

    const app = express();
    app.use(express.json());
    app.use(cors());
    app.use(auth());
    app.use('/catalog', catalogController);
    app.use('/users', usersController);

    app.listen(PORT, () => console.log(`REST service started on port ${PORT}...`));
}