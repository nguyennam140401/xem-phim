import React, { useState } from 'react'
import { Style } from './style'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { searchByKeyword } from '../../api/apiPhim'
import BoxFilmSearch from '../BoxFilmSearch'
const FormSearch = () => {
    const [textSearch, setTextSearch] = useState('')
    const [dataSearch, setDataSearch] = useState([])
    const changeInput = async (event) => {
        if (event.target.value === '') {
            setDataSearch([])
            return
        }
        setTextSearch(event.target.value)
        const data = await searchByKeyword(textSearch)
        setDataSearch(data.data.searchResults)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <Style>
            <form onSubmit={handleSubmit}>
                <InputBase
                    name="textSearch"
                    placeholder="Search...."
                    value={textSearch}
                    onChange={changeInput}
                    endAdornment={<SearchIcon sx={{ cursor: 'pointer' }} />}
                    fullWidth
                    autoComplete="off"
                    // onBlur={() => {
                    //     setDataSearch([])
                    // }}
                    // list={false}
                    sx={{
                        p: 1,
                        border: '1px solid var(--title-color)',
                        borderRadius: '5px',
                    }}
                />
            </form>
            {dataSearch && dataSearch.length > 0 && (
                <div className="result">
                    {dataSearch.map((item, idx) => {
                        return (
                            <BoxFilmSearch
                                key={idx}
                                data={item}
                            ></BoxFilmSearch>
                        )
                    })}
                </div>
            )}
        </Style>
    )
}

export default FormSearch
