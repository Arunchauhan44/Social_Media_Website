import React from 'react'

const Welcome = ({Fetchingpost}) => {
  return (
  
    <div >
        <h1> Welcome to this site </h1>
        <button className="btn btn-primary" type="button" onClick={Fetchingpost}> Fetching posts on server </button>

       
      
    </div>
  )
}

export default Welcome
