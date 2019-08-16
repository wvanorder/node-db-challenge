const express = require('express');

const projectModel = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({message: 'Youre good to do stuff here' });
})