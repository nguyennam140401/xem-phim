import React from 'react'
import { Style } from './style'
const BoxFilmSearch = ({ data }) => {
    const { cover, title, id } = data
    return (
        <Style>
            <a href="/">
                <div className="bx-img">
                    <img src={cover} alt={title} />
                </div>
                <p>{title}</p>
            </a>
        </Style>
    )
}

export default BoxFilmSearch
