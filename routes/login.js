const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});
router.post('/log', (req, res) => {
    const {username, password} = req.body;
    
})
module.exports = router;