

const
    router = require('express').Router(),
    Account = require('../models/index').Authenticator,
    passport = require('passport');
    Axios=require('axios');

router.post('/signup', function (req, res) {
    Account.register(new Account({
        username: req.body.username
    }), req.body.password, function (err, account) {
        if (err) {
            return res.send("FAILED");
        }

        passport.authenticate('local')(req, res, () => {
            req.session.save((err) => {
                if (err) {
                    return next(err);
                }

                console.log(req.user);
                res.send('SUCCESS');
            });
        });
    });
});;

router.post('/signin', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        if (err) {
            res.send('error 500');
        }

        if (! user) {
            res.send('unauthorized user');
        }
        req.login(user, loginErr => {
            if (loginErr) {
                return next(loginErr);
            }
            res.send('Login success');
        });
    })(req, res, next);
});

router.get('/logout', function (req, res) {
    req.logout();
    res.send('LOGGED-OUT');
});

module.exports = router;