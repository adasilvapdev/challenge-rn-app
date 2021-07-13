import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useTheme } from '../../../styles/themes/default/ThemeProvider';

interface ButtonProps {
    category: string
    color?: string
}

const CategoryButton = ({
    category,
    color
}: ButtonProps) => {
    const { THEME } = useTheme();

    const styles = StyleSheet.create({
        button: {
            // flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: THEME.PRIMARY,
            width: 100,
            height: 40,
            borderRadius: 30,
            margin: 5
        },
        text: {
            color: THEME.WHITE
        }
    })

    return (
        <TouchableOpacity
            style={styles.button}
        >
            <Text style={styles.text}>{category}</Text>
        </TouchableOpacity>
    )
}

export default CategoryButton

