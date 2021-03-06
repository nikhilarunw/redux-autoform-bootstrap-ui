import fs from 'fs';
import React from 'react';
import express, { Router } from 'express';
import path from 'path';
import webpackConfig from '../../webpack.config.demo.dev';
import colors from 'colors';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function(request, file, callback) {
        callback(null, "./demo/uploads");
    },
    filename: function(request, file, callback) {
        callback(null, file.originalname + '-' + Date.now())
    }
});

const upload = multer({storage});

const webpackCompiler = webpack(webpackConfig);

require.extensions['.html'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};

const development = process.env.NODE_ENV !== 'production';

let app = express();

let router = new Router();

router.post("/upload", (request, response) => {
    upload.array("fileData")(request, response, (err) => {
        if(err) {
            response.json({status: false, message: "There was an error while uploading files."});
            return;
        }

        response.json({status: true, message: "Files correctly uploaded."});
    })
});

app.use(router);


if (development) {
    app.use(webpackMiddleware(webpackCompiler));
    app.use(webpackHotMiddleware(webpackCompiler));
    app.use((request, response) => {
        let wrap = require('../client/index.html')
            .replace(/\$\{css\}/g, '')
            .replace(/\$\{js\}/g, '/bundle.js');

        response.status(200).send(wrap);
    });
} else {
    app.use(express.static(path.join(__dirname, '../demo-built')));
}

app.listen(4000, '0.0.0.0', () => {
    console.log(colors.green(`Redux Autoform started at http://localhost:4000/. NODE_ENV: ${process.env.NODE_ENV}`));
});
