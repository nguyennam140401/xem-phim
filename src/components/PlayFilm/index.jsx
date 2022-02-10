import React from 'react'
import ReactPlayer from 'react-player'
import InforFilm from '../InforFilm'

const PlayFilm = ({ dataFilm }) => {
    console.log(dataFilm)
    const { data, sources, subtitles } = dataFilm
    console.log(data)
    return (
        <div>
            <ReactPlayer
                width="100%"
                height="auto"
                controls
                url={sources[0].url}
            />
            <InforFilm data={data} />
        </div>
    )
}

export default PlayFilm
