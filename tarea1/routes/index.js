const express = require('express');
const router = express.Router();

const newsRoutes = require('./news');

router.get('', (req, res) => {
    res.send('Esta es mi ruta base, si quieres pedir algo a las noticias agrega /news a la peticion');
});

router.use('/news',newsRoutes);

module.exports = router;