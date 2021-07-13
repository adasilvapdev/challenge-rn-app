import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CategoryButton } from '../../components/atoms/buttons'
import { useProducts, useCategories } from '../../hooks'
import { FlatList } from 'react-native-gesture-handler';

interface CategoryProps {
    category: string
}

const FeedScreen = () => {
    const { products, } = useProducts()
    const { categories, } = useCategories()

    // useEffect(() => {
    //     console.log('--- products: ', products)
    //     console.log('----------------------------------------')
    //     console.log('--- categories: ', categories)
    //     console.log('-----')
    // }, []);


    const renderItem = (item) => {
        // console.log('item: ', item)
        return (
            <CategoryButton
                category={item.item}
            />
        )
    }

    return (
        <View style={styles.container}>
            <Text>Feed Screen</Text>
            <FlatList
                horizontal
                data={categories}
                renderItem={renderItem}
                keyExtractor={(index) => index.toString()}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default FeedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center",
        marginLeft: '1%',
        marginRight: '1%',
    }
})