import React,{useContext} from 'react'
import './SimilarPosts.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../../context/StoreContext'
import EachSimilarPost from '../EachSimilarPost/EachSimilarPost'
import { Box } from '@mui/material'

const SimilarPosts = () => {

  const { post_list } = useContext(StoreContext)

  return (
    <Box className='similar-posts-list'>
      
      {post_list.map((item) =>{
        return <Link to={`/article/${item._id}`} key={item._id}>     {/* Wrap Eachitem with Link */}
          <EachSimilarPost id={item._id} namee={item.namee} image={item.image} />
          <hr />
        </Link>
      })}

    </Box>
  )
}

export default SimilarPosts
