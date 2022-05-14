const express = require('express');
const router = express.Router();
const Controller = require('../controllers/Controller');

//GET
router.get('/', (req, res)=> res.render('home'));

router.get('/all', Controller.allPost);

router.get('/new', (req, res)=> res.render('nav'));


//POST
router.post('/', express.urlencoded({extended: true}), Controller.newPost);

router.post('/all', express.urlencoded({extended: true}), Controller.newPost);



router.post('/edit/:id',express.urlencoded({extended: true}), Controller.editPost)

router.get('/edit/:id', Controller.loadPost);



router.get('/delete/:id', Controller.deletePost);


module.exports = router;
