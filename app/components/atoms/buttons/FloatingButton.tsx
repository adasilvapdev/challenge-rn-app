import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '../../../styles/themes/default/ThemeProvider';

interface ButtonProps {
    onPress: () => void
    children: JSX.Element
}

const FloatingButton = ({ onPress, children }: ButtonProps) => {
    const { THEME } = useTheme();

    const styles2 = StyleSheet.create({
        simpleView: {
            flex: 1,
            backgroundColor: THEME.WHITE
        },
        button: {
            top: -22.5,
            justifyContent: 'center',
            alignItems: 'center',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: THEME.WHITE
        }
    })

    return (
        <View style={styles.container}>
            <View style={styles.svgContainer}>
                <View style={styles2.simpleView}></View>
                <Svg
                    width={75}
                    height={61}
                    viewBox="0 0 75 61"
                >
                    <Path
                        d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                        fill={THEME.WHITE}
                    />
                </Svg>
                <View style={styles2.simpleView}></View>
            </View>

            <TouchableOpacity
                style={styles2.button}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        </View>
    )
}

export default FloatingButton

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    svgContainer: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0
    },
})
