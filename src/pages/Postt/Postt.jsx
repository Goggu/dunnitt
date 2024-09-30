import React, { useContext, useState, useEffect } from 'react';
import './Postt.css';
import { StoreContext } from '../../context/StoreContext';
import { useParams } from 'react-router-dom'; 
import SimilarPosts from '../../components/PostPage/SimilarPosts/SimilarPosts';
import { assets } from '../../assets/assets';

const Postt = () => {
  const { id } = useParams();
  const { post_list } = useContext(StoreContext); // This is the post_list, togg..rk from StoreContext
  const [selectedMenu, setSelectedMenu] = useState('');
  const {toggleBookmark} = useState(StoreContext);
  
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  
  const article = post_list.find((item) => item.id === id); // Find the article that matches the ID

  useEffect(() => {
    if (article) {
      setLiked(article.isLiked);
      setSaved(article.isSaved);
    }
  }, [article]);

  if (!article) {
    return <div>Article not found</div>;
  }

  // Handle like toggle
  const toggleLike = () => {
    const newLikeStatus = !liked;
    setLiked(newLikeStatus);

    fetch(`http://localhost:3000/post_list/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isLiked: newLikeStatus }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Updated like status:', data);
      })
      .catch((error) => {
        console.error('Error updating like status:', error);
      });
  };

  return (
    <div className='article-page'>
      <div className='current-article' component="main" sx={{ flexGrow: 1, p: 3, marginTop: -4, marginBottom: 2, marginRight: 0 }}>
        <div className="header-container"> 
          <h1 className="title">{article.namee}</h1>     
        </div>

        <div>
          <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '5px 0px 5px 36px', opacity: 0.6, width: '92%' }}/>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="meta-info">    
              <img src={`http://localhost:5173${article.profilepic}`} alt={article.owner} />
              <p>&nbsp;{article.owner}</p>                
            </div>
            <div className='like-dislike-comment-share'>
              <img
                className='like-icon'
                src={liked ? assets.like_icon : assets.like_icon_filled}
                alt='Like'
                onClick={toggleLike}
                style={{ cursor: 'pointer' }} />
              <img 
                className='share_icon' 
                src={assets.share_icon} 
                alt='Share' />
              <img
                className='save-article-icon'
                src={saved ? assets.save_article_icon_filled : assets.save_article_icon}
                alt='Save'
                onClick={() => toggleBookmark(article)}
                style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid #ddd', margin: '5px 0px 5px 36px', opacity: 0.6, width: '92%' }}/>
        </div>

        <div className="content-container">
          <p className='content'>{article.content}</p>
        </div>
      </div>

      <div className='similar-articles'>
        {<SimilarPosts selectedMenu={setSelectedMenu} />}
      </div>
    </div>
  );
}

export default Postt;
