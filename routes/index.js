var express = require('express');
var router = express.Router();
var dbdo = require('../model/dbdo');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express Todo Demo' });
// });
router.get('/', dbdo.displayAll);

router.post('/create', dbdo.createItem);

router.get('/delete/:id', dbdo.deleteItem);

router.get('/edit/:id', dbdo.editItem);

router.post('/update/:id', dbdo.updateItem);

module.exports = router;
