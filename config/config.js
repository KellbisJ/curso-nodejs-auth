require('dotenv').config(); // These are .env variables.

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: process.env.DATABASE_URL,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
  appMailPassword: process.env.APP_MAIL_PASSWORD,
  appMailEmail: process.env.APP_MAIL_EMAIL,
};

module.exports = { config };
