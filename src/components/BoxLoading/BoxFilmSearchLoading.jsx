import { Grid, Skeleton } from '@mui/material'
import React from 'react'

const BoxFilmSearchLoading = () => {
    return (
        <div>
            <Grid container sx={{ marginBottom: '1rem' }}>
                <Grid item>
                    <Skeleton variant="circular" width={70} height={70} />
                </Grid>
                <Grid item sx={{ flex: 1 }}>
                    <Skeleton width="100%" sx={{ marginLeft: '1rem' }} />
                    <Skeleton width="50%" sx={{ marginLeft: '1rem' }} />
                </Grid>
            </Grid>
        </div>
    )
}

export default BoxFilmSearchLoading
