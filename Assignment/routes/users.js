// Name:- Anmol Sharma
// File Description:- This is file is user files
// Website Name:- Anmol's Portfolio
//Author name:- Anmol
'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

module.exports = router;
