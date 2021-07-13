import React from 'react'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/AntDesign';
import { FeedNavigation } from '../../sections/home'
import { FavsNavigation } from '../../sections/favorites'
import { useTheme } from '../../../styles/themes/default/ThemeProvider';

const Tab = createBottomTabNavigator()

const HomeNavigation: React.FC = () => {
    const { THEME } = useTheme()
    return (
        <Tab.Navigator
            initialRouteName="FeedNavigation"
        // screenOptions={{
        //     headerShown: false
        // }}
        >
            <Tab.Screen
                name="FeedNavigation"
                component={FeedNavigation}
                options={{
                    tabBarAccessibilityLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <Icon name="home" size={30} color={THEME.PRIMARY} />
                    ),
                }}
            />
            <Tab.Screen
                name="FavsNavigation"
                component={FavsNavigation}
                options={{
                    tabBarAccessibilityLabel: 'Favorites',
                    tabBarIcon: ({ focused }) => (
                        <Icon name="heart" size={30} color={THEME.PRIMARY} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeNavigation