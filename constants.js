var fs = require('fs')
  , ini = require('ini');

var config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));

global.db = {
    host: config.db.HOST,
    port: config.db.PORT,
    username: config.db.USERNAME,
    password: config.db.PASSWORD
};
