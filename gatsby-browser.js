require("./src/index")
const LogRocket = require("logrocket")

exports.onClientEntry = () => {
  // @todo Move LogRocket init data to environment variable
  LogRocket.init("9iy3ll/educodar")
}
