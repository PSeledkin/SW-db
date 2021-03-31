import React from 'react'
import PropTypes from 'prop-types'
import './row.css'

const Row = ({leftElement, rightElement}) => {
    return (
      <div className="row mb2 people">
          <div className="col-md-6">
            {leftElement}
          </div>
          <div className="col-md-6">
            {rightElement}
          </div>
        </div>
    )
  }

  Row.propTypes = {
    leftElement: PropTypes.node,
    rightElement: PropTypes.node
  }
  export default Row;