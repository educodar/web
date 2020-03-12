import "./src/index"
const LogRocket = require("logrocket")

exports.onClientEntry = () => {
  LogRocket.init("9iy3ll/educodar")
}
