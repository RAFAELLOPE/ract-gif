import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    
    /* const [images, setImages] = useState([])

    useEffect(() => {
        getGifs( category ).then( setImages )
    }, [ category ]) */

    const {data:images, loading} = useFetchGifs( category );
    

    return (
        <>
        { loading ? <p>Loading...</p> :<p>Loaded</p> }

        <div className="card-grid">
            <h3>{ category }</h3>
            {
               
               images.map( img => (
                          <GifGridItem key= {img.id} 
                                       img = {img}
                            />
                         ))

            }
        </div>
        </>
    )
}
