const express = require("express");
const passport = require("passport");
const router = express.Router();

const isLogged = (req, res, next) => {
    if(!req.user){
      res.redirect('/user/noPermission');
    } else {
      next();
    }
  };

router.get("/logged", isLogged, (req, res) => {
    res.render("logged", { name: req.user.displayName, picture: req.user.photos[0].value });
});

router.get("/profile", isLogged, (req, res) => {
    res.render("profile");;
});

router.get("/profile/settings", isLogged, (req, res) => {
    res.render("profileSettings");
});

router.get("/no-permission", (req, res) => {
  res.render("noPermission");
});

router.get('/logout', (req, res) => {
    res.render("logout");
  });

module.exports = router;
