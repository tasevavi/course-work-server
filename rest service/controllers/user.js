const router = require('express').Router();
const { isGuest } = require('../middlewares/guards');
const { register, login, logout } = require('../services/userService');
const mapErrors = require('../utils/errorMapper');

router.post('/register', isGuest(), async (req, res) => {
    console.log('>>>>REQUEST BODY',req.body);//works!
    try {
        const email = req.body.email;
        const password = req.body.password;
        const rePassword = req.body.rePassword;

        validateCredentials(email, password, rePassword);

        const result = await register(email.trim().toLowerCase(), password.trim());
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        const result = await login(req.body.email.trim().toLowerCase(), req.body.password.trim());
        res.json(result);
        console.log('>>>>>SUCCESSFUL LOGIN'); //works!
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.post('/logout', (req, res) => {
    logout(req.user?.token);
    res.status(204).end();
    console.log('>>>>>>SUCCESSFUL LOGOUT'); //works!
});

function validateCredentials(email, password, rePassword) {

    if (password.trim() == '' || email.trim() == '') {
        throw new Error('Email and password are required');
    }
    if (password.length < 4) {
        throw new Error('Password should be at least 3 letters long');
    } 
    if (!/[a-zA-Z0-9]+$/.test(password)) {
        throw new Error ('Password should consists only from Englis letters or digits');
    }
    if (password != rePassword) {
        throw new Error('Passwords dont\'t match');
    }
}

module.exports = router;