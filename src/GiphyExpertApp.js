import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GiphyExpertApp = () => {

    const [categories, setCategories] = useState(['OnePunch']);
    
  return (
    <>
      <h2>GiphyExpertApp</h2>
      <hr/>
      <AddCategory setCategories={setCategories}/>
      <ol>
        { 
            categories.map((category) => (
                <GifGrid 
                    category={category}
                    key={category}
                />
            ))

        }
      </ol>
    </>
  )
}

export default GiphyExpertApp

