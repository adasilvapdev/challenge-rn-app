import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FeedScreen, DetailsScreen } from '../../../screens/home';

const Stack = createStackNavigator();

const FeedNavigation: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, headerBackTitleVisible: false }}>
            <Stack.Screen
                name="FeedScreen"
                component={FeedScreen}
            />
            <Stack.Screen
                name="DetailsScreen"
                component={DetailsScreen}
            />

        </Stack.Navigator>
    );
};

export default FeedNavigation;