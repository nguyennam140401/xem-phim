import React, { useEffect, useState } from 'react'
import { getTopSearch } from '../../api/apiPhim'
import { Style } from './style'
import BoxFilmSearch from '../BoxFilmSearch'
const TopSearch = () => {
    const [listFilm, setListFilm] = useState(null)
    useEffect(() => {
        const solve = async () => {
            const res = await getTopSearch()
            setListFilm(res.data.list)
        }
        solve()
    }, [])
    useEffect(() => {
        console.log(listFilm)
    }, [listFilm])
    return (
        <Style>
            <p className="title">Top Search</p>
            {listFilm !== null ? (
                <div className="listFilm">
                    {listFilm.map((film, idx) => {
                        return <BoxFilmSearch key={idx} data={film} />
                    })}
                </div>
            ) : (
                <div>Đang tải.....</div>
            )}
        </Style>
    )
}

export default TopSearch
