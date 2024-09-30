
import React, { useState } from "react";
import axios from "axios";
import './AddPost.css';

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [owner, setOwner] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      title,
      content,
      owner,
      date,
      image
    };

    try {
      await axios.post("http://localhost:3000/post_list", newPost); // Assuming JSON server is running on localhost:3000
      alert("Article uploaded successfully!");
    } catch (error) {
      console.error("Error uploading article:", error);
    }
  };

  return (
    <div className="upload-container">
      <h2>Create New Article</h2>
      <form onSubmit={handleSubmit}>

        <div>
          <label>Title:</label>
          <input type="text" value={title}
            onChange={(e) => setTitle(e.target.value)}
            required />
        </div>

        <div>
          <label>Content:</label>
          <textarea value={content}
            onChange={(e) => setContent(e.target.value)}
            required />
        </div>

        <div>
          <label>Owner:</label>
          <input type="text" value={owner}
            onChange={(e) => setOwner(e.target.value)}
            required />
        </div>

        <div>
          <label>Date:</label>
          <input type="date" value={date}
            onChange={(e) => setDate(e.target.value)}
            required />
        </div>

        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} required />
        </div>

        <button type="submit">Upload Article</button>
      </form>
    </div>
  );
};

export default AddPost;
