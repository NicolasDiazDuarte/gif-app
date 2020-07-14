import React,{useState} from 'react'

export const GifExpertApp = () => {
    
    const [categories,setCategories]=useState(['Dragon ball','Yugioh','Simpsons']);

    const HandleAdd = () => {
        setCategories (cats => [...cats,'Coraje']);
    }
    
    
    
    return (
        <>
            
            <h1>GifExpertApp</h1>
            <button onClick={HandleAdd}>Agregar</button>
            <ol>
                {
                    categories.map(category => {
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
            <hr />
            
        </>
    )
}
