import React, { useContext } from 'react'
import { globalContext } from '../../context'
import ReceipeItem from '../../components/receipe-item';

export default function Home() {

  const {loading, receipeList} = useContext(globalContext) ;
  console.log(receipeList);

  if (loading) return <div>Loading !! Please Wait ....</div> 

  return (
    <div className='py-8 container mx-auto flex flex-wrap justify-content gap-10'>
    {
      receipeList && receipeList.length > 0 ? (
        receipeList.map((item) => <ReceipeItem item={item}/>)
      ) : (<div className='lg:text-4xl text-xl mx-20 text-center text-black font-extrabold'>Nothing to show .. Please search something</div>)
    }
    </div>
  )
}
