const express = require('express');
const signUptemplate = require('../dbmodels/signUpmodel');
const router = express.Router();
const bcrypt = require('bcrypt');
router.post('/signup', async (req, res) => {

    const saltPassword = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(req.body.password, saltPassword);
    const signedUpUser = new signUptemplate({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password: secPassword
    })

    signedUpUser.save()
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router;