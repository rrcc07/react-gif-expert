import React from 'react';
import { GiftGridItem } from './GiftGridItem';
import { UseFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    //custom hook
    const {data:images, loading} = UseFetchGifs(category);
   
    return (
        <>
        <h3>{category}</h3>
        <div className='card-grid'>
                {loading && <p>Loading..</p>}
                {
                    images.map(img=>(
                        <GiftGridItem
                            key= {img.id}
                            {...img}    //manda cada propiedad como una entidad independiente {title, url}
                        />
                    ))
                }
        </div>
        </>
    );
};


GifGrid.propTypes = {

};


export default GifGrid;
