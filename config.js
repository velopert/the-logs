var dotenv = require('dotenv');

dotenv.config();

module.exports = {
    rootDir: __dirname,
    port: process.env.PORT || 3000,
    devPort: process.env.DEVPORT || 3001,
    mongodbUri: process.env.MONGODB_URI,
};
