import { Skeleton } from '@mui/material'
import React from 'react'

const BoxFilmLoading = () => {
    return (
        <div>
            <Skeleton
                variant="rectangular"
                width="100%"
                height="300px"
                sx={{ marginBottom: '1rem' }}
            />
            <Skeleton width="100%" height="1.5rem" />
        </div>
    )
}

export default BoxFilmLoading
