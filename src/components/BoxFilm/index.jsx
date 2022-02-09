import React from 'react'
import { Style } from './style'
const BoxFilm = ({ data }) => {
    const { jumpAddress, imageUrl, title } = data
    return (
        <Style>
            <a href={jumpAddress}>
                <div className="bx_img">
                    <img src={imageUrl} alt="" />
                </div>
                <p>{title}</p>
            </a>
        </Style>
    )
}

export default BoxFilm
