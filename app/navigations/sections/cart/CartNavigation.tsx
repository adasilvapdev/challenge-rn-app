import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CartScreen } from '../../../screens/cart';

const Stack = createStackNavigator();

const CartNavigation: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, headerBackTitleVisible: false }}>
            <Stack.Screen
                name="CartScreen"
                component={CartScreen}
            />
        </Stack.Navigator>
    );
};

export default CartNavigation;