import { Box } from '@mui/material'
import React from 'react'
import BoxFilm from '../components/BoxFilm'

const ListFilm = ({ arrFilm }) => {
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
