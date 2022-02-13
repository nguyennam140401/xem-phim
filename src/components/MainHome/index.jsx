import React, { useEffect, useState } from 'react'
import Banner from '../Banner'
import { getHome } from '../../api/apiPhim'
import FilmByCategory from '../FilmByCategory'
import BannerLoading from '../BoxLoading/BannerLoading'
import BoxFilmLoading from '../BoxLoading/BoxFilmLoading'
import { Grid, Skeleton } from '@mui/material'

const MainHome = () => {
    const [dataState, setDataState] = useState(null)
    useEffect(() => {
        const slv = async () => {
            const data = await getHome()

            setDataState(data.data)
        }
        slv()
    }, [])

    return (
        <div>
            {dataState && (
                <Banner
                    arrFilm={dataState.recommendItems[0].recommendContentVOList}
                />
            )}
            {dataState && dataState.recommendItems ? (
                dataState.recommendItems.slice(1).map((item, idx) => {
                    return (
                        <FilmByCategory
                            key={idx}
                            name={item.homeSectionName}
                            arrFilm={item.recommendContentVOList}
                        ></FilmByCategory>
                    )
                })
            ) : (
                <div>
                    <BannerLoading />
                    <Skeleton
                        height="1.5rem"
                        width="4rem"
                        sx={{ marginBottom: '1rem' }}
                    />
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
    )
}

export default MainHome
