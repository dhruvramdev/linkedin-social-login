const passport = require('passport');
const LinkedInStrategy = require('passport-linkedin');
const User = require('../models/user');
const config = require('../_config');
const init = require('./init');

passport.use(new LinkedInStrategy({
    consumerKey: config.linkedin.clientID,
    consumerSecret: config.linkedin.clientSecret,
    callbackURL: config.linkedin.callbackURL,
    profileFields: ['id', 'first-name', 'last-name', 'maiden-name', 'email-address', 'headline', 'location', 'industry', 'num-connections', 'summary', 'specialties', 'positions', 'picture-urls::(original)', 'public-profile-url']
  },
  (token, tokenSecret, profile, done) => {
  	const { displayName, id:linkedinID } = profile;
    const { emailAddress, headline, location: {name: location}, numConnections, publicProfileUrl, positions: {title: positionTitle = "", summary: positionSummary = ""}} = profile._json;
    
    const searchQuery = {
      linkedinID
    };

    const updates = {
      displayName,
      linkedinID,
      emailAddress,
      headline,
      location,
      numConnections,
      publicProfileUrl,
      positionTitle,
      positionSummary,
      token
    };

    const options = {
      upsert: true
    };

    // update the user if s/he exists or add a new user
    User.findOneAndUpdate(searchQuery, updates, options, (err, user) => {
      if(err) {
        return done(err);
      } else {
        return done(null, user);
      }
    });
  }
));

// serialize user into the session
init();


module.exports = passport;
