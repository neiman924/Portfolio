const router = require('express').Router();
const session = require('express-session');
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
  try {
    console.log(req.session);
    const newComment = await Comment.create({
      ...req.body,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
