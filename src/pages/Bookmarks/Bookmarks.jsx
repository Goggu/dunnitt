import React from 'react'
import { useContext } from 'react'
import './Bookmarks.css'
import { StoreContext } from '../../context/StoreContext'
import Eachitem from '../../components/HomePage/Eachitem/Eachitem'
import { Link } from 'react-router-dom'

const Bookmarks = () => {
  
  const { bookmarks } = useContext(StoreContext)

  return (
    <div className='post-display-list'>
      {bookmarks.map((item) =>{
        return <Link to={`/article/${item._id}`} key={item._id}> {/* Wrap Eachitem with Link */}
          <Eachitem id={item._id} namee={item.namee} owner={item.owner} image={item.image} profilepic={item.profilepic} />
        </Link>
      })}
    </div>
  )
}

export default Bookmarks

