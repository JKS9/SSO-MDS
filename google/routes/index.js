const router = require('express').Router();

router.get('/', async function(req,res,next){
    res.send('vous étes sur la page home, vas sur "/login" <a href="/auth">login</a>')
});

module.exports = router;