import PropTypes from "prop-types"
import React from "react"

const propTypes = {
  label: PropTypes.string,
  file: PropTypes.string,
}

const defaultProps = {
  label: "",
  file: "",
}

const DownloadButton = ({ label, file, ...props }) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      download={`Educodar-${label}.pdf`}
      href={file}
      {...props}
    >
      {label}
    </a>
  )
}

DownloadButton.propTypes = propTypes
DownloadButton.defaultProps = defaultProps

export default DownloadButton
