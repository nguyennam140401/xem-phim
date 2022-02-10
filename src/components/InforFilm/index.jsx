import { CalendarViewMonth, Star } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Style } from './style'
const InforFilm = ({ data }) => {
    const {
        // aliasName,
        // episodeCount,
        introduction,
        name,
        tagNameList,
        year,
        score,
        episodeVo,
    } = data
    // const tags = [1, 2, 3]
    return (
        <Style>
            <h3>{name}</h3>
            <div className="score">
                <span>
                    <Star sx={{ color: 'yellow' }} />
                    {score}
                </span>
                <span>
                    <CalendarViewMonth sx={{ color: 'blue' }} /> {year}
                </span>
            </div>
            <div className="list-tags">
                {tagNameList.map((item, idx) => {
                    return (
                        <span className="tag" key={idx}>
                            {item}
                        </span>
                    )
                })}
            </div>
            <p className="intro">{introduction}</p>
            <div className="list-episode">
                {episodeVo.map((item, idx) => {
                    return (
                        <Link
                            to={`?episode=${item.seriesNo}`}
                            key={idx}
                            className="episode"
                        >
                            {item.seriesNo}
                        </Link>
                    )
                })}
            </div>
        </Style>
    )
}

export default InforFilm
