import React from 'react'
import { Style } from './style'
import { Link } from 'react-router-dom'
const Navigation = () => {
    const nav = [
        {
            name: 'Home',
            url: '/',
        },
        {
            name: 'All Film',
            url: '/movie',
        },
    ]
    return (
        <Style>
            <Link className="logo" to="/">
                PhimNV
            </Link>
            <div className="nav">
                {nav.map((item, idx) => {
                    return (
                        <Link key={idx} to={`${item.url}`}>
                            {item.name}
                        </Link>
                    )
                })}
            </div>
        </Style>
    )
}

export default Navigation
