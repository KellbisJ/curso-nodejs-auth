const boom = require('@hapi/boom');

const { config } = require('./../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(boom.unauthorized('Invalid API key'));
  }
}

function checkAdminRole(req, res, next) {
  console.log(req.user);
  const user = req.user;
  if (user.role === 'admin' || user.role === 'superadmin') {
    next();
  } else {
    next(boom.unauthorized('Insufficient permissions'));
  }
}
function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    console.log(req.user);
    if (roles.includes(user.role)) {
      next();
    } else {
      next(boom.unauthorized('Insufficient permissions'));
    }
  };
}

module.exports = { checkApiKey, checkAdminRole, checkRoles };
