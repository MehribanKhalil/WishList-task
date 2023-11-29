import React from 'react'
import { useFetch } from '../../hooks/UseFetch'
import ProductCard from '../ProductCard'
import './index.scss'
const Products = () => {
    const baseUrl = "http://localhost:5000/products"
    const [products, isLoading] = useFetch(baseUrl)
    return (
        <div>
            <div className="container">
                <div className="row">
                {
                    isLoading ? <p>Loading...</p>
                        :
                        products.map((product) => (
                            <ProductCard    
                                key={product.id}
                                {...product}
                                item={product}
                            />
                        ))
                }
                </div>
               
            </div>
        </div>
    )
}

export default Products