import React, { useContext } from 'react'
import { globalContext } from '../../context'
import ReceipeItem from '../../components/receipe-item';


export default function Favourites() {

    const { favoriteList} = useContext(globalContext);

    return (
      <div className='py-8 container mx-auto flex flex-wrap justify-center gap-10'>
        {
          favoriteList && favoriteList.length > 0 ? (
            favoriteList.map((item) => <ReceipeItem item={item} />)
          ) : (<div>
            Nothing is added in Favourites
          </div>)
        }
      </div>
    )

}