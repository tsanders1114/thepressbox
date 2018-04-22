const
    router = require('express').Router(),
    Account = require('../models/index').Account,
    passport = require('passport');

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

router.post('/signin', passport.authenticate('local'), function (req, res) {
    res.send("LOGGEDIN");
});

router.get('/logout', function (req, res) {
    req.logout();
    res.send('LOGGED-OUT');
});

module.exports = router;