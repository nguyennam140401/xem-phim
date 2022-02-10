import React from 'react'
import ReactPlayer from 'react-player'
import { subtitleProxy } from '../../utils/sub'
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
                playing={true}
                config={{
                    file: {
                        attributes: {
                            crossOrigin: 'true',
                        },
                        tracks: [
                            {
                                kind: 'subtitles',
                                src: subtitleProxy(subtitles[0].url),
                                srcLang: 'en',
                                default: true,
                            },
                        ],
                    },
                }}
            />

            <InforFilm data={data} />
        </div>
    )
}

export default PlayFilm
