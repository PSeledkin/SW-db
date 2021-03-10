import React from 'react'
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
  export default Row;