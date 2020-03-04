const express = require('express'),
    router = express.Router();

router.get('/', (req,res) => {
    res.render('template', {
        locals: {
            title: 'Success'
        },
        partials: {
            partial: 'partial-success'
        }
    })
})

module.exports = router;