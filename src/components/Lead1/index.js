import React from "react"
import { Link } from "gatsby"
import "./styles.css"

const Lead1 = ({ leadTitle, leadText, linkText }) => (
  <div className="lead1">
    <h3>{leadTitle}</h3>
    <p>
      {leadText}&nbsp;
      <Link to="/" className="call-link">
        {linkText}
      </Link>
    </p>
  </div>
)

export default Lead1
