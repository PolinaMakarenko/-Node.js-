const userRouter = require('express').Router();

userRouter.get('/getUser', (req, res)=> {
  const { sessionId } = res.locals;
  // console.log('1', req.session.key);
  req.session.key = sessionId;
  res.json(req.session);
});

module.exports = userRouter;