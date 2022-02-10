import React, { useEffect, useState } from 'react'
import { getSearchOption, searchFilm } from '../api/apiPhim'
import Filter from '../components/Filter'
import ListFilm from './ListFilm'

const AllFilm = () => {
    const [dataSearch, setDataSearch] = useState(null)
    const [listFilm, setListFilm] = useState(null)
    const [idCategory, setIdCategory] = useState(0)
    useEffect(() => {
        const slv = async () => {
            const res = await getSearchOption()
            setDataSearch(res.data)
            const dataFilm = await searchFilm()
            setListFilm(dataFilm.data)
        }
        slv()
    }, [])
    return (
        <div style={{ padding: '2rem' }}>
            <div
                className="category"
                style={{ display: 'flex', gap: ' 1.5rem' }}
            >
                {dataSearch &&
                    dataSearch.map((item, idx) => {
                        return (
                            <div key={idx} className="">
                                {item.name}
                            </div>
                        )
                    })}
            </div>
            {dataSearch && (
                <Filter arrOption={dataSearch[idCategory].screeningItems} />
            )}
            {listFilm && <ListFilm arrFilm={listFilm.searchResults} />}
        </div>
    )
}

export default AllFilm
