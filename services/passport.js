const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('../models/index').sequelize;
const User = db.import('../models/users');
const bcrypt = require('bcryptjs');

passport.use(new LocalStrategy(
    { usernameField: 'email' },
    (email, password, done) => {
        User.findOne({ where: { email: email } }).then(
            (user) => {
                if (!user) return done(null, false, { message: 'Incorrect email.' });

                if (!bcrypt.compareSync(password, user.password)) return done(null, 'Incorrect password');

                return done(null, user);
            },
            (err) => done(err))
    })
)

passport.use(new JWTStrategy(
    { jwtFromRequest: ExtractJwt.fromHeader('authorization'), secretOrKey: process.env.JWTSECRET },
    (payload, done) => {
        User.findOne({where:{uid:payload.sub}}).then(
            (user) =>{
                done(null, user)
            },
            (error) => done(error)
        )
    }
))

module.exports = passport;