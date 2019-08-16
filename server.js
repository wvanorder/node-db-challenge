const express = require('express');

const ProjectRouter = require('./projects/project-router.js');

const server = express();

server.use(express.json());

server.use('/api/projects', ProjectsRouter);

module.exports = server;