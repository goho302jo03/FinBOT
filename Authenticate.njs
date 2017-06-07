#!/usr/local/bin/node
var Passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var BodyParser = require('body-parser');
var Express = require('express');

var accounts = {
  admin: {
    username: 'admin',
    password: '12345',
    id: 1,
  },
};

var loginStrategy = new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
  },
  function(username, password, done){
    user = accounts[username];

    if(user == null){
      return done(null, false, {message: 'Invalid user'});
    }else if(password != user.password){
      return done(null, false, {message: 'Invalid password'});
    }

    done(null, user);
  }
)

Passport.use('login', loginStrategy);

var app = Express();
app.use(BodyParser.urlencoded({extended: false}));
app.use(BodyParser.json());
app.use(Passport.initialize());

app.post(
  '/login', 
  Passport.authenticate('login', {session: false}),
  function(req, res){
    res.send('User ID'+req.user.id);
  }
);

app.listen(3000, function(){
  console.log('Listening on 3000');
});
