/* eslint-disable @typescript-eslint/no-var-requires */
// const express = require('express');
import { default as express } from 'express';
const ParseDashboard = require('parse-dashboard');
const ParseServer = require('parse-server').ParseServer;

const apiData = {
  appName: 'Parse Server Application',
  databaseURI: 'mongodb://localhost:27017/parsedb',
  appId: 'SCWASRTWXK9Y6AVYMP3KFC',
  masterKey: 'LASDK823JKHXR87YSDFJSDHF8DFHASFDF',
  serverURL: 'http://0.0.0.0:1337/parse',
  publicServerURL: 'http://0.0.0.0:1337/parse',
  port: 1337,
  keyPairs: {
    javascriptKey: 'H15KRXCWRXCY5Q',
  },
};
const options = { allowInsecureHTTP: true };
const dashboard = new ParseDashboard(
  {
    apps: [
      {
        serverURL: 'http://ip/parse',
        appId: apiData.appId,
        masterKey: apiData.masterKey,
        appName: apiData.appName,
      },
    ],
    users: [
      {
        user: 'sdykae',
        pass: 'sdykae',
      },
    ],
  },
  options,
);

const api = new ParseServer(apiData);

const app = express();
app.use('/parse', api);
app.use('/', dashboard);
const httpServer = require('http').createServer(app);
httpServer.listen(4040);
