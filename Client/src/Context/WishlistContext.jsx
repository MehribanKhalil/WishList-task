import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/UseLocalStorage";

export const WishlistContext = createContext();

const WishListProvider = ({ children }) => {

    const [favItems,setFavItems]=useLocalStorage("WishList")
    // const [addedToWishlist, setAddedToWishlist] = useState(false); 
    const addToWishList=(item)=>{
        const isItemExist = favItems.find((x) => x.id === item.id);

        if (!isItemExist) {
            setFavItems([...favItems,{...item}])
            return
        }
        else{
        }
    }

    const removeFromWishList=(item)=>{
        setFavItems(favItems.filter((x)=> x.id !== item.id ))

    }

    
    const data={
        favItems,
        addToWishList,
        removeFromWishList
    }
    return (
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}

export default WishListProvider

export const useWishListContext=()=>useContext(WishlistContext)