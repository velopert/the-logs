import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import DevServer from './utils/dev-server';
import config from '../config';


/*
 * Open Development Server
 */


if(process.env.NODE_ENV == 'development') {
    const devServer = new DevServer();
    devServer.run();    
}


/*
 * MongoDb Connection 
 */

const db = mongoose.connection;
db.on('error', console.error);
db.once('open', () => { console.log('Connected to mongod server!') });
mongoose.connect(config.mongodbUri);


/*
 * Setup Express.js Server
 */

const app = express();

app.use(bodyParser.json());


/*
 * Load API
 */

import api from './routes';
app.use('/api', api);



/* 
 * Load React Project
 */

app.use('/', express.static(__dirname + '/../public'));

app.get('*', (req, res) => {
    res.sendFile(config.rootDir + '/public/index.html');
});

/*
 * Open Express.js server
 */

const server = app.listen(config.port, () => {
    console.log('Express listening on port', config.port);
});
