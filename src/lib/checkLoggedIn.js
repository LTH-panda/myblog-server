const checkLoggedIn = (req, res, next) => {
  if (!res.locals.user) {
    return res.status(401).send("no admin");
  }
  return next();
};

module.exports = checkLoggedIn;
