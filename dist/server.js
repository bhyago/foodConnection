"use strict";

require("reflect-metadata");
require("express-async-errors");
var _express = _interopRequireDefault(require("express"));
var _routes = require("./shared/infra/http/routes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_express.default.json());
app.use(_routes.routes);
app.use((err, request, response, next) => {
  if (err instanceof Error) {
    return response.status(400).json({
      message: err.message
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  });
});
app.listen(3333, () => console.log("Server is running"));