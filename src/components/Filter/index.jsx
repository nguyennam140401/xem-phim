import { FormControl, Grid } from '@mui/material'
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Style } from './style'
const Filter = ({ arrOption }) => {
    const [optionFilter, setOptionFilter] = useState({
        size: 50,
        params: '',
        area: '',
        category: '',
        year: '',
        subtitles: '',
        order: 'up',
    })
    const handleChange = (event) => {
        const field = event.target.name
        const value = event.target.value
        setOptionFilter({ ...optionFilter, [field]: value })
    }
    return (
        <Style>
            <Grid container sx={{ marginBottom: '1.5rem' }}>
                {arrOption &&
                    arrOption.map((item, idx) => {
                        return (
                            <Grid item key={idx}>
                                <FormControl
                                    sx={{ minWidth: 100, marginRight: 2 }}
                                >
                                    <select
                                        value={
                                            optionFilter[
                                                `${item.items[0].screeningType}`
                                            ]
                                        }
                                        name={item.items[0].screeningType}
                                        label="Age"
                                        onChange={handleChange}
                                        size="small"
                                    >
                                        {item.items.map((i, index) => {
                                            return (
                                                <option
                                                    hidden={
                                                        index === 0 &&
                                                        idx !==
                                                            arrOption.length - 1
                                                    }
                                                    key={index}
                                                    value={i.params}
                                                >
                                                    {i.name}
                                                </option>
                                            )
                                        })}
                                    </select>
                                </FormControl>
                            </Grid>
                        )
                    })}
            </Grid>
        </Style>
    )
}

export default Filter
