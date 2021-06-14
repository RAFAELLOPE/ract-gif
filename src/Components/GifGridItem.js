import React from 'react'

export const GifGridItem = ({img}) => {
    const {id, title, url } = img;

    return (
        <div className="animate__animated animate__bounce animate__repeat-2">
            <img key={id} src ={url} alt={title} />
            <p>{ title }</p>
        </div>
    )
}
