const { API_TOKEN, authToken } = require("./config");
const logger = require("./logger");

function validateToken(req, res, next) {
  const authToken = req.get("Authorization");
  console.log(authToken);
  console.log(API_TOKEN);
  logger.error(`Unauthorized request to path: ${req.path}`);

  //check this code- something wrong with this that wont let auth work//
  // if (!authToken || authToken !== API_TOKEN) {
  //   return res.status(401).json({ error: "Unauthorized request" });
  // }

  if (!authToken || authToken.split(" ")[1] !== API_TOKEN) {
    return res.status(401).json({ error: "Unauthorized request" });
  }

  next();
}

module.exports = validateToken;

// if (!authToken || authToken.split(" ")[1] !== API_TOKEN) {
//   return res.status(401).json({ error: "Unauthorized request" });
// }
