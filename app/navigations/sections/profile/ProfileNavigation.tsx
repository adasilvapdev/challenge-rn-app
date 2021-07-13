import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../../../screens/profile';

const Stack = createStackNavigator();

const ProfileNavigation: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, headerBackTitleVisible: false }}>
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
            />
        </Stack.Navigator>
    );
};

export default ProfileNavigation;