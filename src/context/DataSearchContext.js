import { createContext, useEffect, useState } from 'react'
import { getSearchOption, searchFilm } from '../api/apiPhim'
export const DataSearchContext = createContext()

const DataSearchContextProvider = ({ children }) => {
    // const [category, setCategory] = useState(null)
    const [loading, setLoading] = useState(true)
    const [filterState, setFilterState] = useState(null)
    const [listFilm, setListFilm] = useState(null)
    const [idCategory, setIdCategory] = useState(0)
    const [optionSearch, setOptionSearch] = useState({
        area: '',
        category: '',
        order: 'up',
        params: '',
        size: 20,
        subtitles: '',
        year: '',
    })
    const changeIdCategory = (id) => {
        setOptionSearch({
            area: '',
            category: '',
            order: 'up',
            size: 20,
            subtitles: '',
            year: '',
            params: filterState[id].params,
        })
        setIdCategory(id)
    }
    const handleChangeOption = (event) => {
        const field = event.target.name
        const value = event.target.value
        setOptionSearch({ ...optionSearch, [field]: value })
    }
    useEffect(() => {
        // console.log('load fi')
        const slv = async () => {
            const res = await getSearchOption()
            setFilterState(res.data)
        }
        slv()
    }, [])
    useEffect(() => {
        console.log('change option search')
        const slv = async () => {
            const dataFilm = await searchFilm(optionSearch)
            setListFilm(dataFilm.data)
        }
        slv()
    }, [optionSearch])
    const data = {
        filterState,
        idCategory,
        listFilm,
        changeIdCategory,
        handleChangeOption,
        optionSearch,
    }
    return (
        <DataSearchContext.Provider value={data}>
            {children}
        </DataSearchContext.Provider>
    )
}
export default DataSearchContextProvider
