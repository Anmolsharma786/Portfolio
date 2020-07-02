// Name:- Anmol Sharma
// File Description:- This is file connects all the files like contact, service, about and projects
// Website Name:- Anmol's Portfolio
//Author name:- Anmol
'use strict';
var express = require('express');
var router = express.Router();

// GET home page. 
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/About', function (req, res) {
    res.render('About', { title: 'Anmol Sharma' });
});
router.get('/Projects', function (req, res) {
    res.render('Projects', { title: 'Project' });
});
router.get('/Services', function (req, res) {
    res.render('Services', { title: 'Services' });
});
router.get('/Contact', function (req, res) {
    res.render('Contact', { title: 'Contact' });
});
module.exports = router;
