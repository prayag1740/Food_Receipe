import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const globalContext = createContext(null) ;

export default function GlobalState({children}) {
    const [searchParam, setSearchParams] = useState("") ;
    const [loading, setLoading] = useState(false);
    const [receipeList, setReceipeList] = useState([]);
    const [recipeDetailData, setReceipeDetailData] = useState([]);
    const [favoriteList, setFavoriteList] = useState([]);


    const navigate = useNavigate();

    async function handleSubmit(event) {
        setLoading(true) ;
        event.preventDefault() ;
        try {
            const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);
            const data = await res.json();
            if (data && data.data && data.data.recipes) {
                setReceipeList(data.data.recipes);
                setLoading(false) ;
                setSearchParams("");
                navigate("/")
            }
        } catch (e) {
            console.log(e);
            setLoading(false) ;
            setSearchParams("");
        }
    }


    return (
        <globalContext.Provider value={{searchParam, setSearchParams, handleSubmit, loading, setLoading, receipeList, setReceipeList, recipeDetailData, setReceipeDetailData, favoriteList, setFavoriteList}}>
                {children}
        </globalContext.Provider>
    )

}