import React, { useEffect, useState } from 'react'
import Banner from '../Banner'
import { getHome } from '../../api/apiPhim'
import FilmByCategory from '../FilmByCategory'
const MainHome = () => {
    const [dataState, setDataState] = useState(null)
    useEffect(() => {
        const slv = async () => {
            const data = await getHome()

            setDataState(data.data)
        }
        slv()
    }, [])

    return (
        <div>
            {dataState && (
                <Banner
                    arrFilm={dataState.recommendItems[0].recommendContentVOList}
                />
            )}
            {dataState &&
                dataState.recommendItems &&
                dataState.recommendItems.slice(1).map((item, idx) => {
                    return (
                        <FilmByCategory
                            key={idx}
                            name={item.homeSectionName}
                            arrFilm={item.recommendContentVOList}
                        ></FilmByCategory>
                    )
                })}
        </div>
    )
}

export default MainHome
