import { useState, useEffect } from 'react';
import { GET } from '../api/api';
import { API } from '../constants'

export const useCategories = () => {
    const [categories, setCategories] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllCategories(API.CATEGORIES)
    }, [])

    //* Get all products
    const getAllCategories = async (url: string) => {
        try {
            const { data: categories } = await GET(url);
            console.log('categories: ', categories)
            setCategories(categories)
            setIsLoading(false)
        } catch (error) {
            console.log('[ERROR]: useCategories > getAllCategories: ', error)
        }
    }

    return {
        categories,
        setCategories,
        isLoading,
        setIsLoading,
    }
}