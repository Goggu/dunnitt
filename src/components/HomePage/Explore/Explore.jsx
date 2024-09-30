import React, { useContext } from 'react'
import './Explore.css'
import { StoreContext } from '../../../context/StoreContext'
import Eachitem from '../Eachitem/Eachitem'
import { Link } from 'react-router-dom'

const Explore = () => {

  const {post_list} = useContext(StoreContext)

  if (!post_list || post_list.length === 0) {
    return <p>Loading posts...</p>; // Handle loading state
  }

  return (
    <div className='post-display-list'>
      {post_list.map((item) =>{
        return <Link to={`/article/${item.id}`} key={item.id}> {/* Wrap Eachitem with Link */}
          <Eachitem 
            id={item.id} 
            namee={item.namee} 
            owner={item.owner} 
            image={item.image} 
            profilepic={item.profilepic} />
        </Link>
      })}
    </div>
  )
}

export default Explore
