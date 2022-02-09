import React from 'react'
import Grid from '@mui/material/Grid'
import MainHome from '../components/MainHome'
// import Grid from '@mui/material/Grid'

const Home = () => {
    return (
        <Grid container spacing={2} sx={{ p: 4 }}>
            <Grid item xs={9}>
                <MainHome />
            </Grid>
            <Grid item xs={3}>
                Search
            </Grid>
        </Grid>
    )
}

export default Home
