import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useProducts } from '../../hooks/useProducts'

const FeedScreen = () => {
    const {
        products,
    } = useProducts()

    useEffect(() => {
        console.log('--- products: ', products)
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