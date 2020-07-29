import React from 'react';
import PropTypes from 'prop-types';
import {useFetchGifs} from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid= ({category})  => {


    const {data:images,loading} = useFetchGifs(category);
    

   
    return (
        <>
            <h3 className="animate__fadeInLeft">{category}</h3>
            
            {loading && <p>loading</p>}
            <div className="card-grid animate__slideInDown">
                
                {
                    images.map( img=> (
                        <GifGridItem
                        key={img.id}  
                        {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
GifGrid.propTypes = {
    category:PropTypes.string.isRequired
}