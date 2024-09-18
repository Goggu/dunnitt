import React, { useState } from 'react';
import './AddPost.css';
import { post_list } from '../../assets/assets';

const AddPost = () => {
  const [namee, setNamee] = useState('');
  const [owner, setOwner] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newArticle = {
      _id: (post_list.length + 1).toString(), // Assuming IDs are sequential integers
      namee,
      owner,
      image,
      content: content.split('\n'), // Split content by new lines to create paragraphs
    };
    post_list.push(newArticle); // Add the new article to the post_list
    // Reset form
    setNamee('');
    setOwner('');
    setImage('');
    setContent('');
  };

  return (
    <div className='form-container'>
      <h2 className='add-post-heading'>Add New Article</h2>
      <form className="add-post-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <div className='textwrap'>
            <input
              type="text" placeholder="Title" 
              value={namee}
              onChange={(e) => setNamee(e.target.value)}
              required
              className="title-input"
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="text" placeholder='Author'
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="file" 
            accept="image/*" 
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                setImage(file);
              }
            }}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            value={content} placeholder="Content"
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button type="submit">Add Article</button>
      </form>
    </div>
  );
};

export default AddPost;
