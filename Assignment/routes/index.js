'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/About', function (req, res) {
    res.render('About', { title: 'Anmol Sharma' });
});
router.get('/Projects', function (req, res) {
    res.render('Projects', { title: 'Family Website' });
});
router.get('/Services', function (req, res) {
    res.render('Services', { title: 'Family Website' });
});
router.get('/Contact', function (req, res) {
    res.render('Contact', { title: 'Family Website' });
});
module.exports = router;
