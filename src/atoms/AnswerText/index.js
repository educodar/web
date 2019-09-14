import React from "react"

export default ({ children }) => (
  <>
    <dd
      itemScope
      itemProp="acceptedAnswer"
      itemType="https://schema.org/Answer"
    >
      <div itemProp="text">{children}</div>
    </dd>
  </>
)
