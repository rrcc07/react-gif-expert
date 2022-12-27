import React from 'react';
import { GiftGridItem } from './GiftGridItem';
import { UseFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({category}) => {

    //custom hook
    const {data:images, loading} = UseFetchGifs(category);
   
    return (
        <div>
            <h3>{category}</h3>
                {loading && <p>Loading..</p>}
                {
                    images.map(img=>(
                        <GiftGridItem
                            key= {img.id}
                            {...img}
                        />
                    ))
                }
        </div>
    );
};


GifGrid.propTypes = {

};


export default GifGrid;
