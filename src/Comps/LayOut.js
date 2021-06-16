import React from 'react'
import NavbarC from './NavbarC'
import FooterC from './FooterC'
const LayOut = (props) => {
    return (
        <div>
            <NavbarC />
                {props.children}
            <FooterC />
        </div>
    )
}

export default LayOut
