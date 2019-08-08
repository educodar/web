import React from "react"
import { Link } from "gatsby"
import "./styles.css"

const Lead2 = ({ leadTitle, leadText, linkText }) => (
  <div className="lead2">
    <h4>{leadTitle}</h4>
    <p>
      {leadText}&nbsp;
      <Link to="/" className="call-link">
        {linkText}
      </Link>
    </p>
  </div>
)

export default Lead2
