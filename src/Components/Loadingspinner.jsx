import React from 'react'

function Loadingspinner() {
  return (

    <center>
      <div className="d-flex justify-content-center spinner">
  <div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
    </center>
  )
}

export default Loadingspinner;
