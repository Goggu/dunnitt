import { createContext, useContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [postList, setPostList] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);
    const [profile, setProfile] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/post_list')
      .then((response) => response.json())
      .then((data) => setPostList(data))
      .catch((error) => console.error("Error fetching post_list:", error));

    fetch('http://localhost:3000/bookmarks')
      .then((response) => response.json())
      .then((data) => setBookmarks(data))
      .catch((error) => console.error("Error fetching bookmarks:", error));

    fetch('http://localhost:3000/profile')
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error("Error fetching profile:", error));
}, []);

// Function to add or remove bookmarks
const toggleBookmar = (article) => {
    const isBookmarked = bookmarks.some((bookmark) => bookmark.id === article.id);

    if (isBookmarked) {
    // Remove bookmark
        axios.delete(`http://localhost:3000/bookmarks/${article.id}`)
        .then(() => {
            setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== article.id));
            console.log(`Removed article ${article.id} from bookmarks`);
        })
        .catch((error) => console.error("Error removing from bookmarks:", error));
    } else {
        // Add bookmark
        axios.post('http://localhost:3000/bookmarks', article)
        .then((response) => {
            setBookmarks([...bookmarks, response.data]);
            console.log(`Added article ${article.id} to bookmarks`);
        })
        .catch((error) => console.error("Error adding to bookmarks:", error));
    }

        // Update isSaved status in post_list
        axios.patch(`http://localhost:3000/post_list/${article.id}`, { isSaved: !isBookmarked })
        .then((response) => {
            setPostList(postList.map((post) =>
                post.id === article.id ? { ...post, isSaved: !isBookmarked } : post
            ));
            console.log(`Updated save status for article ${article.id}`);
        })
        .catch((error) => console.error("Error updating save status:", error));
};

    const contextValue = {
        post_list: postList,
        bookmarks,
        profile
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;