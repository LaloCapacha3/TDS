const express = require('express');
const router = express.Router();
const controller = require('./../controllers/news.controller')

router.get('', (req, res) => {
    res.send('Esta es mi ruta base de news, si quieres pedir algo a las noticias agrega /everything o /headlines a la peticion')
});

router.get('/sources', controller.getSources);
router.get('/headlines', controller.getHeadlineNews);
router.get('/everything', controller.getEverythingNews);

module.exports = router;