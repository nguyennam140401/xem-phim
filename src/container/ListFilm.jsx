import { Box } from '@mui/material'
import React from 'react'
import BoxFilm from '../components/BoxFilm'
// import { getTopSearch } from '../api/apiPhim'
const ListFilm = ({ arrFilm }) => {
    // console.log(arrFilm)
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {arrFilm &&
                arrFilm.map((film, idx) => {
                    return (
                        <BoxFilm
                            key={idx}
                            data={film}
                            style={{ width: '100%' }}
                        />
                    )
                })}
        </Box>
    )
}

export default ListFilm
