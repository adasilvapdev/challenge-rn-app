import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { GET, POST } from '../../api/api';

const FeedScreen = () => {
    const getData = async (url: string) => {
        try {
            const { data: products } = await GET(url);
            console.log('products: ', products)
        } catch (error) {
            console.log('[ERROR]: FeedScreen > getData: ', error)
        }
    }

    useEffect(() => {
        getData('products/4')
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