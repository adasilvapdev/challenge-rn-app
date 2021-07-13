import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FavsScreen } from '../../../screens/favorites';

const Stack = createStackNavigator();

const FavsNavigation: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, headerBackTitleVisible: false }}>
            <Stack.Screen
                name="FavsScreen"
                component={FavsScreen}
            />
        </Stack.Navigator>
    );
};

export default FavsNavigation;