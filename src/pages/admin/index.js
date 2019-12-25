import React from "react"
import { Helmet } from "react-helmet"

export default () => (<><Helmet>
  <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"/>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</Helmet></>)
