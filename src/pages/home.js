import React from 'react'
import { Hero, Categories, Products, TopProduct } from '../components'

const home = () => {
    return (
        <div>
            <Hero />
            <Categories />
            <Products />
            <TopProduct/>
        </div>


    )
}

export default home