import { useState, useEffect } from 'react';
import { GET } from '../api/api';
import { API } from '../constants'

export const useProducts = () => {
    const [products, setProducts] = useState(null)
    const [allProducts, setAllProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllProducts(API.PRODUCTS)
    }, [])

    //* Get all products
    const getAllProducts = async (url: string) => {
        try {
            const { data: products } = await GET(url);
            console.log('products: ', products)
            setProducts(products)
            setAllProducts(products)
            setIsLoading(false)
        } catch (error) {
            console.log('[ERROR]: FeedScreen > getAllProducts: ', error)
        }
    }

    return {
        products,
        setProducts,
        isLoading,
        setIsLoading,
        allProducts,
    }
}