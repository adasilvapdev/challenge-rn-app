import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FeedScreen, FavsScreen, DetailsScreen } from '../../../screens/home'

const HomeNavigation: React.FC = () => {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator
            initialRouteName="FeedScreen"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="FeedScreen"
                component={FeedScreen}
            />
            <Stack.Screen
                name="FavsScreen"
                component={FavsScreen}
            />
            <Stack.Screen
                name="DetailsScreen"
                component={DetailsScreen}
            />
        </Stack.Navigator>
    )
}

export default HomeNavigation