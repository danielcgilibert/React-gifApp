import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
 import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );


 


    return (
        <>
        <h3>{category}</h3>

        {loading&&<h2 className='animate__bounceIn'>Cargando...</h2>}

        { <div className="card-grid">
                {
                
                images.map( img => (
                    <GifGridItem  
                    key={img.id}
                    { ...img}
                    />
                ))    

                }
        </div> }
        </>
    )
}
