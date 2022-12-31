const ex = require('express');
const router = ex.Router();

router.get('/',(req,res)=>{
    res.send(__dirname+"/index.html");
})

module.exports = router;