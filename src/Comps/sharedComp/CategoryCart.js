import React from 'react'
import { Link } from 'react-router-dom'
const CategoryCart = (props) => {
    const h3css = {position: 'absolute',left:'40px', bottom: '-130px', color: 'white', fontSize: `${props.fsize}`}
    return (
        <Link style={{position:'relative'}}>
            <img style={{width: '100%'}} src={props.img} alt={props.children} />
            <h3 style={h3css}>{props.children}</h3>
        </Link>
    )
}

export default CategoryCart
