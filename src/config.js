module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || "development",
  //API_TOKEN: process.env.API_TOKEN || "dummy-api-token",
  // //DATABASE_URL:
  //     process.env.DATABASE_URL ||
  //     "postgres://dunder_mifflin@localhost:5432/bookmarks",
  DATABASE_URL:
    process.env.DATABASE_URL ||
    "postgres://dunder_mifflin@localhost:5432/bookmarks",
  TEST_DATABASE_URL:
    process.env.TEST_DATABASE_URL ||
    "postgresql://dunder_mifflin@localhost/bookmarks-test",
};
