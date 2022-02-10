import { Star } from '@mui/icons-material'
import React from 'react'
import { Style } from './style'
const SerieFilm = ({ data }) => {
    console.log(data)
    return (
        <Style>
            <div className="series">
                <h4>In the series</h4>
                {!data.refList || data.refList.length === 0 ? (
                    <div>Không có các phần phim khác</div>
                ) : (
                    <div>
                        {data.refList.map((film, idx) => {
                            return (
                                <div className="film" key={idx}>
                                    <div className="bx-img">
                                        <img
                                            src={film.coverVerticalUrl}
                                            alt={film.name}
                                        />
                                    </div>
                                    <p className="name">{film.name}</p>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            <div className="series">
                <h4>Some film like this</h4>
                {!data.likeList || data.likeList.length === 0 ? (
                    <>Không có phim nào tương tự</>
                ) : (
                    <>
                        {data.likeList.map((film, idx) => {
                            return (
                                <div className="film" key={idx}>
                                    <div className="bx-img">
                                        <img
                                            src={film.coverVerticalUrl}
                                            alt={film.name}
                                        />
                                    </div>
                                    <div className="about">
                                        <p className="name">{film.name}</p>
                                        <span>
                                            <Star sx={{ color: 'yellow' }} />
                                            {film.score}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
        </Style>
    )
}

export default SerieFilm
