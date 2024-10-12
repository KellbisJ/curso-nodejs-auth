const jwt = require('jsonwebtoken');

const secret = 'myCat';
const payload = {
  sub: 1,
  role: 'customer',
};

function signtoken(payload, secret) {
  return jwt.sign(payload, secret);
}

const token = signtoken(payload, secret);
console.log(token);
