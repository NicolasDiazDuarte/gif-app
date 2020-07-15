import React,{useState,useEffect} from 'react'

export const GifGrid= ({category})  => {

    useEffect(()=> {
        getGifs();
    },[])

    
   
    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?q=Coraje&limit=10&api_key=gQJ8XFxBCNYuaQLqmFUoTa3f8bDfxkVQ';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map( img =>{
            return{
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }

        } )


    }
   
    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
