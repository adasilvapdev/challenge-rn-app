import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FavsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Favs Screen</Text>
        </View>
    )
}

export default FavsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignSelf: "center"
    }
})
