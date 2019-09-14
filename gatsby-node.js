const fs = require("fs")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

exports.onPostBuild = () => {
  const activeEnv =
    process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
  const googleVerificationCode = process.env.GATSBY_GOOGLE_VERIFICATION_CODE
  const fileRelativePath = `static/${googleVerificationCode}.html`
  const buffer = Buffer.from(fileRelativePath)
  const fileRawData = `google-site-verification: ${googleVerificationCode}`
  const encoding = "utf-8"
  const fileWriteCallback = error => {
    if (error) throw error
    console.log(`File ${filename} has been saved with content: ${data}`)
  }
  fs.writeFileSync(
    buffer,
    fileRawData,
    { encoding: encoding },
    fileWriteCallback
  )
}
