import React, { useContext } from 'react'
import Filter from '../components/Filter'
import { DataSearchContext } from '../context/DataSearchContext'
import ListFilm from './ListFilm'

const AllFilm = () => {
    const { filterState, idCategory, listFilm, changeIdCategory } =
        useContext(DataSearchContext)
    return (
        // <DataSearchContextProvider>
        <div style={{ padding: '2rem' }}>
            <div
                className="category"
                style={{ display: 'flex', gap: ' 1.5rem' }}
            >
                {filterState &&
                    filterState.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                className=""
                                onClick={() => {
                                    changeIdCategory(idx)
                                }}
                            >
                                {item.name}
                            </div>
                        )
                    })}
            </div>
            {filterState && (
                <Filter arrOption={filterState[idCategory].screeningItems} />
            )}
            {listFilm && <ListFilm arrFilm={listFilm.searchResults} />}
        </div>
        // </DataSearchContextProvider>
    )
}

export default AllFilm
