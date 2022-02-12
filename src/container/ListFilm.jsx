import { Box } from '@mui/material'
import React, { useContext } from 'react'
import BoxFilm from '../components/BoxFilm'
// import { DataSearchContext } from '../context/DataSearchContext'
// import { getTopSearch } from '../api/apiPhim'
const ListFilm = ({ arrFilm }) => {
    // console.log(arrFilm)
    // const tmp = useContext(DataSearchContext)
    // console.log(tmp)
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
