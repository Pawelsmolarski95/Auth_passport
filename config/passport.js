const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: '641678731963-uo413ifjmj6gm39lbok4i7j74fvtlp1m.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:8000/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
  }));
  
  passport.serializeUser((user, serialize) => {
    serialize(null, user);
  });
  
  passport.deserializeUser((obj, deserialize) => {
    deserialize(null, obj);
  });