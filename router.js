var express = require('express');
var router = express.Router();
const viewPath = './views/';

router.get('/', (req, res) => {
    res.sendFile(viewPath + 'index.html', { root: __dirname });
});
router.get('/about', (req, res) => {
    res.sendFile(viewPath + 'about.html', { root: __dirname });
});


module.exports = router;
