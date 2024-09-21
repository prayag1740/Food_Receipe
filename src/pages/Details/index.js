import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { globalContext } from '../../context';

export default function Details() {

  const {id} = useParams() ;
  const {recipeDetailData, setReceipeDetailData, favoriteList, setFavoriteList} = useContext(globalContext);

  async function fetchRecipeDetails ()  {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
    const data = await response.json() ;
    console.log(data);
    if (data && data.data) {
      setReceipeDetailData(data.data);
    }
  }

  useEffect (() => {
    fetchRecipeDetails() ;
  }, [])

  function handleFavouriteButton(recipeData) {
      const recipeId = recipeData.id ;
      const recipeFound = favoriteList.find(obj => obj.id === recipeId);
      if (recipeFound) {
        const updatedFavouriteList = favoriteList.filter(obj => obj.id !== recipeId) ;
        setFavoriteList(updatedFavouriteList);
      } else {
        const copiedFavouriteList = [...favoriteList];
        copiedFavouriteList.push(recipeData);
        setFavoriteList(copiedFavouriteList);
      }
  }

  function getButtonText(recipeData) {
    const recipeId = recipeData.id ;
    const recipeFound = favoriteList.find(obj => obj.id === recipeId);
    if (recipeFound) {
      return "Remove from Favourites" ;
    } else {
      return "Add to Favourites" ;
    }
  }

  console.log(favoriteList, "favouriteList");

  console.log(recipeDetailData?.recipe);
  return (
    <div className='container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='row-start-2 lg:row-start-auto'>
          <div className='h-96 overflow-hidden rounded-xl group'>
            <img src={recipeDetailData?.recipe?.image_url} className='w-full h-full object-cover block group-hover:scale-105 duration-300'></img>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <span className='text-medium text-cyan-700 font-medium'>
            {recipeDetailData?.recipe?.publisher}
          </span>
          <h3 className='font-bold text-2xl truncate text-black'>
            {recipeDetailData?.recipe?.title }
          </h3>
          <div>
            <button className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider my-3 inline-block shadow-md bg-black text-white' onClick={ () => handleFavouriteButton(recipeDetailData.recipe)}>{getButtonText(recipeDetailData?.recipe)}</button>
          </div>
          <div>
          <span className='text-xl font-semibold text-black'>Ingredients :</span>
          <ul className='flex flex-col gap-3'>
            {recipeDetailData?.recipe?.ingredients.map((ing) => (
              <li>
                <span className='text-xl font-semibold text-black'>
                  {ing.quantity} {ing.unit}
                </span>
                <span className='text-xl font-semibold text-black'>
                  {ing.description}
                </span>
              </li>
            )) }
          </ul>
        </div>
        </div>
    </div>
  )
}