import React from 'react'
import { Link } from 'react-router-dom'
import { Style } from './style'
const BoxFilmSearch = ({ data }) => {
    const { cover, title, id, domainType } = data
    // console.log(id, domainType)
    return (
        <Style>
            <Link to={`/movie/${id}`}>
                <div className="bx-img">
                    <img src={cover} alt={title} />
                </div>
                <p>{title}</p>
            </Link>
        </Style>
    )
}

export default BoxFilmSearch
