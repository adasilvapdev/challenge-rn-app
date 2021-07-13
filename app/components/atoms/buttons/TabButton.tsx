import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { useTheme } from '../../../styles/themes/default/ThemeProvider';

interface ButtonProps {
    onPress: () => void
    children: JSX.Element
}

const TabButton = ({ children, onPress }: ButtonProps) => {
    const { THEME } = useTheme();

    const styles = StyleSheet.create({
        button: {
            flex: 1,
            height: 60,
            backgroundColor: THEME.WHITE
        }
    })

    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={1}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )
}

export default TabButton