const authorisedIds = [1234];

function isUserAllowed(req) {
  const userId = req.body.userId;
  if (userId && authorisedIds.includes(userId)) {
    return true;
  }
  return false;
}

module.exports = {
  isUserAllowed,
};