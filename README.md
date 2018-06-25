# linkedin-social-login
in server root directory create a file called _config.js

var ids = {
  linkedin: {
    clientID: 'clientid',
    clientSecret: 'clientsecret',
    callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
  }
};

module.exports = ids;
