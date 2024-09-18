import { createContext } from "react";
import { post_list } from "../assets/assets";
import { bookmarks } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const contextValue = {
        post_list,
        bookmarks
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;