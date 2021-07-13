import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'

const ProductItem = ({
    item,
    index
}) => {
    const { category, description, id, price, title, image } = item;
    // console.log('index: ', index)
    // console.log('item: ', item)
    // console.log('---------------')

    return (
        <TouchableOpacity style={{
            borderWidth: 1,
            // justifyContent: "space-around",

        }}>
            <Image
                resizeMode="cover"
                style={{
                    width: 100,
                    height: 200
                }}
                // source={{ uri: 'https://cdn.dribbble.com/users/5031392/screenshots/12323394/media/b41def978acd09ed8943b44d33ed7d21.png?compress=1&resize=1200x900' }}
                source={{ uri: `${item.image}` }}
            />
        </TouchableOpacity>
    )
}

export default ProductItem

const styles = StyleSheet.create({})
