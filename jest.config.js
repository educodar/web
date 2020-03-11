module.exports = {
  collectCoverage: true,
  coverageDirectory: "./coverage/",
  coveragePathIgnorePatterns: ["/.cache/", "/cypress/", "/node_modules/"],
  globals: {
    __PATH_PREFIX__: ``,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
  testPathIgnorePatterns: [".cache", "cypress", "node_modules"],
  testURL: `http://localhost:8000`,
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
}
