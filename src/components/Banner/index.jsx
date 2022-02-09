import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Style } from './style'
const Banner = ({ arrFilm }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    }
    return (
        <Style>
            <div className="banner-film">
                <Slider {...settings}>
                    {arrFilm &&
                        arrFilm.map((film, idx) => {
                            return (
                                <div className="banner-item" key={idx}>
                                    <div className="bx-img">
                                        <img
                                            src={film.imageUrl}
                                            alt={film.title}
                                        />
                                    </div>
                                    <p className="name">{film.title}</p>
                                </div>
                            )
                        })}
                </Slider>
            </div>
        </Style>
    )
}

export default Banner
