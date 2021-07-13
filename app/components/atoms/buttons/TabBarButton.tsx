import React from 'react';
import { StyleSheet } from 'react-native';
import { FloatingButton, TabButton } from './index'

const TabBarButton = ({ accessibilityState, children, onPress, }) => {
    let isSelected = accessibilityState.selected;

    if (isSelected) {
        return (
            <FloatingButton
                onPress={onPress}
                children={children}
            />
        )
    } else {
        return (
            <TabButton
                onPress={onPress}
                children={children}
            />
        )
    }
}

export default TabBarButton

const styles = StyleSheet.create({})