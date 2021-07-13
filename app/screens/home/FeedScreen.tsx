import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { CategoryButton } from '../../components/atoms/buttons';
import { ProductItem } from '../../components/molecules/products';
import { useProducts, useCategories } from '../../hooks'
import { FlatList } from 'react-native-gesture-handler';
import { IMAGES } from '../../constants';
import { SIZES } from '../../styles/themes/BaseTheme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../../styles/themes/default/ThemeProvider';

const FeedScreen = () => {
    const { THEME } = useTheme()
    const { products, } = useProducts()
    const { categories, } = useCategories()

    const categoryRenderItem = (item) => {
        return (
            <CategoryButton
                category={item.item}
            />
        )
    }

    const productRenderItem = (item) => {
        return (
            <ProductItem
                index={item.index}
                item={item.item}
            />
        )
    }

    const renderHeader = () => {
        return (
            <View style={{ flexDirection: 'row', height: 50, justifyContent: "space-between" }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.PADDING * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={IMAGES.AVATAR}
                        resizeMode="contain"
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 70
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.PADDING * 2,
                        justifyContent: 'center'
                    }}
                >
                    <FontAwesome name="shopping-cart" size={30} color={THEME.PRIMARY} />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderHeader()}

            <View style={{
                flex: 1,
                // backgroundColor: "darkorange", 
                paddingTop: '5%'
            }} >
                <FlatList
                    horizontal
                    data={categories}
                    renderItem={categoryRenderItem}
                    keyExtractor={(index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export default FeedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: '2%',
        paddingLeft: '2%'
    }
})