import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BoxFilm from '../components/BoxFilm'
// import { getTopSearch } from '../api/apiPhim'
const ListFilm = ({ arrFilm }) => {
    console.log(arrFilm)
    return (
        <Grid container spacing={2}>
            {arrFilm &&
                arrFilm.map((film, idx) => {
                    return (
                        <Grid item key={idx} xs={3}>
                            <BoxFilm data={film} />
                        </Grid>
                    )
                })}
        </Grid>
    )
}

export default ListFilm
