import { Grid } from '@mui/material'
import React, { useContext } from 'react'
import BoxFilmLoading from '../components/BoxLoading/BoxFilmLoading'
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
            {listFilm ? (
                <ListFilm arrFilm={listFilm.searchResults} />
            ) : (
                <div>
                    <Grid
                        container
                        width="100%"
                        spacing={4}
                        sx={{ width: '100%' }}
                    >
                        <Grid item xs={3}>
                            <BoxFilmLoading />
                        </Grid>
                        <Grid item xs={3}>
                            <BoxFilmLoading />
                        </Grid>
                        <Grid item xs={3}>
                            <BoxFilmLoading />
                        </Grid>
                        <Grid item xs={3}>
                            <BoxFilmLoading />
                        </Grid>
                    </Grid>
                </div>
            )}
        </div>
        // </DataSearchContextProvider>
    )
}

export default AllFilm
