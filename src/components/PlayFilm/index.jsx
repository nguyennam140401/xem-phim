import React from 'react'
import ReactPlayer from 'react-player'

const PlayFilm = ({ dataFilm }) => {
    console.log(dataFilm)
    const { data, sources, subtitles } = dataFilm
    return (
        <div>
            <ReactPlayer width="100%" height="auto" controls url={sources[0].url} />
        </div>
    )
}

export default PlayFilm
