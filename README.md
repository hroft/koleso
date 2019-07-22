# koleso


add config.js

module.exports = {
  ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 5000,
  URL: process.env.BASE_URL || "http://localhost:3000",
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://login:password@urrl_mongodb",
    JWT_SECRET: process.env.JWT_SECRET || 'super_secret'
};