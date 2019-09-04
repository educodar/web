const fs = require("fs")
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
const dotenv = require("dotenv").config({
  path: `.env.${activeEnv}`,
})

exports.onPostBuild = () => {
  const googleVerificationFile = process.env.GATSBY_GOOGLE_VERIFICATION_FILE
  const filename = `static/${googleVerificationFile}.html`
  // const filename = "static/googled6815cf0bb7979e2.html"

  const buffer = Buffer.from(filename)

  const data = `google-site-verification: ${googleVerificationFile}`
  // const data = "google-site-verification: googled6815cf0bb7979e2.html"

  const encoding = "utf-8"
  const callback = error => {
    if (error) {
      throw error
    }
    console.log(`File ${filename} has been saved with content: ${data}`)
  }

  fs.writeFileSync(buffer, data, { encoding: encoding }, callback)
}
