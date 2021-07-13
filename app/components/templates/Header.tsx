import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { IMAGES } from '../../constants';
import { SIZES } from '../../styles/themes/BaseTheme';
import { useTheme } from '../../styles/themes/default/ThemeProvider';

const Header = () => {
    const { THEME } = useTheme()

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

export default Header

const styles = StyleSheet.create({})
