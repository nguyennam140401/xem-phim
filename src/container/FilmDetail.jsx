import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getDetailFilm } from '../api/apiPhim'
import PlayFilm from '../components/PlayFilm'
import SerieFilm from '../components/SerieFilm'
import { getFilmDetail } from '../utils/getFilmDetail'

const FilmDetail = () => {
    const [dataFilmDetail, setDataFilmDetail] = useState(null)
    const { movieId } = useParams()
    let location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    // console.log(queryParams.get('episode') || 0)
    const episodeIndex = queryParams.get('episode') - 1 || 0
    useEffect(() => {
        const slv = async () => {
            const data = await getFilmDetail(movieId, episodeIndex)
            console.log(data)
            setDataFilmDetail(data)
        }
        slv()
    }, [episodeIndex, movieId])
    return (
        <Grid container sx={{ p: 4 }} spacing={4}>
            <Grid item xs={9}>
                {dataFilmDetail && <PlayFilm dataFilm={dataFilmDetail} />}
            </Grid>
            <Grid item xs={3}>
                {dataFilmDetail && <SerieFilm data={dataFilmDetail.data} />}
            </Grid>
        </Grid>
    )
}

export default FilmDetail
