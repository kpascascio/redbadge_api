const router = require('express').Router();
const db = require('../models/index');
const Account = db.sequelize.import('../models/account');
const passport = require('passport');
require('../services/passport');
const requireJWT = passport.authenticate('jwt', {session: false});

router.post('/', requireJWT, (req, res)  => {
    console.log(req.user.uid, "user id")
    Account.create({
        account_nickname: req.body.an,
        account_balance: req.body.ab,
        userUid: req.user.uid,

    }).then(
        (successData) => {
            res.json({ data: successData})
        },
        (err) => {
            res.send({error: err})
        }
    )    
})

router.get('/' , requireJWT, (req, res, next) => {
    Account.findAll({where: {userUid:req.user.uid}}).then(
        (data) => res.json({message:  data}),
        (err) => res.json({error: err})
    )
})

module.exports = router;