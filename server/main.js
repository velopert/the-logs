import DevServer from './utils/dev-server';

import express from 'express';
import mongoose from 'mongoose';

import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';

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
db.once('open', () => { console.log('Connected to mongod server!'); });
mongoose.connect(config.mongodbUri);

/*
 * Setup passport
 */


import User from './models/user';




/*
 * Setup Express.js Server
 */

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({
     secret: 'CodebLAB2016!!',
     resave: false,
     saveUninitialized: true
 }));
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

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
