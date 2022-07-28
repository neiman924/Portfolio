
const withAuth = require('../utils/auth');
const withAdmin = require('../utils/admin');

const router = require('express').Router();
const { Comment } = require('../models');

router.get('/', async (req, res) => {
  // If the user is already logged in, redirect the request to another route
  res.render('homepage', {
    logged_in: req.session.logged_in,
    name: req.session.name,
    permission: req.session.permission,
  });
  return;
});
//-----------------------------------------------------------------------------------------------
router.get('/admin',withAuth, withAdmin, async (req, res) => {
  try {
    // Get all MEDs and JOIN with user data
    const commentData = await Comment.findAll({});

    const comments = commentData.map((comment) => comment.get({ plain: true }));
    console.log('============================================',comments)

    res.render('admin', { 
      comments, 
      permission: req.session.permission,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//-----------------------------------------------------------------------------------------------
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
    res.redirect('/');
  } else {
    res.redirect('/');
  }
});
module.exports = router;
