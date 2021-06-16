import React, { createContext, useState } from 'react'

export const StoreContext = createContext();
const Store = (props) => {

    const [products, setProducts] = useState([
        {
            id: 1,
            img: '/images/products/card1.png',
            name: 'Микроволновая печь Artel 23MX39',
            price: '1 500 000'
        },
        {
            id: 2,
            img: '/images/products/card2.png',
            name: 'Электрический чайный набор ART-TM-168',
            price: '300 000'
        },
        {
            id: 3,
            img: '/images/products/card3.png',
            name: 'Artel TV UA75H3502 (190 см) Android',
            price: '3 000 000'
        },
        {
            id: 4,
            img: '/images/products/card4.png',
            name: 'Автоматическая стиральная машина Artel 60C101-I-WH',
            price: '6 000 000'
        }
    ]);
    const state = {
        products: [products, setProducts],
    }
    return (
        <div>
            <StoreContext.Provider value={state}>
                {props.children}
            </StoreContext.Provider>
        </div>
    )
}

export default Store
