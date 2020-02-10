import React from 'react'

const Notification = ({ message, toggle }) => {
    if (message === null) {
      return null
    }

    if(toggle==='error'){
    return (
      <div className="error">
        {message}
      </div>
    )
    }
    if(toggle==='addition'){
      return(
        <div className="addition">
        {message}
      </div>
      )
    }
  }

  
export default Notification