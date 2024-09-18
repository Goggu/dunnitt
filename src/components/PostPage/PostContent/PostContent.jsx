import React from 'react'
import './PostContent.css'

const PostContent = ({id,content}) => {
  
  return (
    <div className="content-container">
      <p className='content'>{content}</p>
    </div>
  )
}

export default PostContent
