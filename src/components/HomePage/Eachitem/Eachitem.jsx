
import React from 'react'
import { useState } from 'react'
import './Eachitem.css'
import { assets } from '../../../assets/assets'

const Eachitem = ({ id, image, namee, owner, profilepic }) => {

  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className='each-item'>            
      <div className='title-container'>
        <p className='post-title'>{namee}</p>
      </div>
      <div className='each-item-img-container'>
        <img className='each-item-image' src={image} alt='' />
      </div>
      <div className='each-item-bottom'>
        <p className='time-to-read'>2 min read</p>
        <div>
          <img 
            className='bookmark-item-icon' 
            src={ isBookmarked ? assets.save_article_icon_filled : assets.save_article_icon } 
            alt='Bookmark'
            onClick={toggleBookmark}
            style={{ cursor:'pointer' }} 
          />
        </div>
      </div>       
    </div>
  )
}

export default Eachitem
