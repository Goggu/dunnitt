import React from 'react'
import './PostHeader.css'

const PostHeader = ({id,namee,image}) => {
  return (
    <div className="header-container"> 

      <h1 className="title">{namee}</h1>     

    </div>
  )
}

export default PostHeader
