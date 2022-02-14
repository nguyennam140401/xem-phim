import React from 'react'
import { Link } from 'react-router-dom'
import { Style } from './style'
import LazyLoad from 'react-lazyload'
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
    // console.log(domainType, category)
    return (
        <Style>
            <LazyLoad once offset={200}>
                <Link
                    to={`/movie/${id}?domain=${domainType || category || '0'}`}
                >
                    <div className="bx_img">
                        <img src={imageUrl || coverVerticalUrl} alt="" />
                    </div>
                    <p>{title || name}</p>
                </Link>
            </LazyLoad>
        </Style>
    )
}

export default BoxFilm
