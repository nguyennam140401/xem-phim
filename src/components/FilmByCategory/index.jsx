import React from 'react'
import BoxFilm from '../BoxFilm'
import { Style } from './style'
const FilmByCategory = ({ name, arrFilm }) => {
    return (
        <Style>
            <h4>{name}</h4>
            <div className="list-film">
                {arrFilm.slice(0, 4).map((film, idx) => {
                    return <BoxFilm key={idx} data={film}></BoxFilm>
                })}
            </div>
        </Style>
    )
}

export default FilmByCategory
