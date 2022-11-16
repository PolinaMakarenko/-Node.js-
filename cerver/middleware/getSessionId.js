module.exports = function getSessionId(req, res, next) {
    const sessionId = req.sessionID;
    res.locals.sessionId = sessionId;
    console.log(sessionId);
  
    next();
  };
  