import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useProducts, useCategories } from '../../hooks'

const FeedScreen = () => {
    const { products, } = useProducts()
    const { categories, } = useCategories()

    useEffect(() => {
        console.log('--- products: ', products)
        console.log('----------------------------------------')
        console.log('--- categories: ', categories)
        console.log('-----')
    }, []);

    return (
        <View style={styles.container}>
            <Text>Feed Screen</Text>
        </View>
    )
}

export default FeedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    }
})