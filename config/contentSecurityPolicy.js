const contentSecurityPolicy = [
  `base-uri 'self';`,
  `connect-src 'self' r.lr-ingest.io;`,
  `default-src 'self';`,
  `form-action 'self';`,
  `font-src 'self' data:;`,
  `img-src 'self' data:;`,
  `object-src 'none';`,
  `script-src 'self' 'unsafe-inline' 'unsafe-eval';`,
  `script-src-elem 'self' 'unsafe-inline' cdn.lr-ingest.io identity.netlify.com unpkg.com;`,
  `style-src 'self' 'unsafe-inline';`,
  `worker-src blob: data:`,
]

module.exports = contentSecurityPolicy
