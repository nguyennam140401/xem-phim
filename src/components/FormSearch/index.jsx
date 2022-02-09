import React, { useState } from 'react'
import { Style } from './style'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { searchByKeyword } from '../../api/apiPhim'
const FormSearch = () => {
    const [textSearch, setTextSearch] = useState('')
    const [dataSearch, setDataSearch] = useState([])
    const changeInput = async (event) => {
        setTextSearch(event.target.value)
        const data = await searchByKeyword(textSearch)
        setDataSearch(data.data.searchResults)
        console.log(dataSearch)
    }
    return (
        <Style>
            <form>
                <InputBase
                    name="textSearch"
                    placeholder="Search...."
                    value={textSearch}
                    onChange={changeInput}
                    endAdornment={<SearchIcon sx={{ cursor: 'pointer' }} />}
                    fullWidth
                    sx={{
                        p: 1,
                        border: '1px solid var(--title-color)',
                        borderRadius: '5px',
                    }}
                />
            </form>
        </Style>
    )
}

export default FormSearch
