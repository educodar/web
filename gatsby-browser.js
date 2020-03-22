/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

const LogRocket = require("logrocket")

exports.onClientEntry = () => {
  // @todo Move LogRocket init data to environment variable
  LogRocket.init("9iy3ll/educodar")
}
