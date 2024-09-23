import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [postList, setPostList] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/post_list')
      .then((response) => response.json())
      .then((data) => setPostList(data))
      .catch((error) => console.error("Error fetching post_list:", error));

    fetch('http://localhost:3000/bookmarks')
      .then((response) => response.json())
      .then((data) => setBookmarks(data))
      .catch((error) => console.error("Error fetching bookmarks:", error));
  }, []);

    const contextValue = {
        post_list: postList,
        bookmarks
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;