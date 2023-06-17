const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
    if (req.user) {

        res.render('logged', { name: req.user.displayName, pictureUrl: req.user.photos[0].value });
      } else {
        res.redirect('no-Permission');
      }
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
    if (req.user) {

      res.render('profile');
    } else {
      res.redirect('no-Permission');
    }
  });

router.get('/profile/settings', (req, res) => {
    if (req.user) {
      res.render('profileSettings');
    } else {
      res.redirect('no-Permission');
    }
  });



module.exports = router;