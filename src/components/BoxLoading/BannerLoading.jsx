import { Skeleton } from '@mui/material'
import React from 'react'

const BannerLoading = () => {
    return (
        <div>
            <Skeleton
                sx={{ marginBottom: '2rem' }}
                variant="rectangular"
                width="100%"
                height={300}
            />
        </div>
    )
}

export default BannerLoading
