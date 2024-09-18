import React from 'react';
import './EachSimilarPost.css'; 

const EachSimilarPost = ({id,image,namee}) => {
  return (
    <div className='each-item-container'>
      <div className='each-item-info'>
        <p className='post-heading'>{namee}</p>
      </div>
    </div>
  );
}

export default EachSimilarPost;
