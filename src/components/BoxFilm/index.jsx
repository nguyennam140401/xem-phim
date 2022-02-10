import React from 'react'
import { Link } from 'react-router-dom'
import { Style } from './style'
const BoxFilm = ({ data }) => {
    const {
        imageUrl,
        title,
        id,
        coverVerticalUrl,
        name,
        domainType,
        category,
    } = data
    console.log(domainType, category)
    return (
        <Style>
            <Link
                to={`/movie/${id}?domain=${
                    domainType !== 'undefined' ? domainType : category
                }`}
            >
                <div className="bx_img">
                    <img src={imageUrl || coverVerticalUrl} alt="" />
                </div>
                <p>{title || name}</p>
            </Link>
        </Style>
    )
}

export default BoxFilm
