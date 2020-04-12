var express = require('express');
var router = express.Router();
const viewPath = './views/';

router.get('/', (req, res) => {
    res.sendFile(viewPath + 'seoul.html', { root: __dirname });
});
router.get('/suwon', (req, res) => {
    res.sendFile(viewPath + 'suwon.html', { root: __dirname });
});
router.get('/dongyun', (req,res) => {
    res.sendFile(viewPath + 'dongyun.html', {root: __dirname});
})
router.get('/about', (req, res) => {
    res.sendFile(viewPath + 'about.html', { root: __dirname });
});


module.exports = router;
