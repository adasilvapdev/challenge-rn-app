import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TabBarButton } from '../../../components/atoms/buttons'
import { FeedNavigation } from '../../sections/home';
import { FavsNavigation } from '../../sections/favorites';
import { ProfileNavigation } from '../../sections/profile';
import { CartNavigation } from '../../sections/cart';
import { useTheme } from '../../../styles/themes/default/ThemeProvider';

const Tab = createBottomTabNavigator()

const HomeNavigation: React.FC = () => {
    const { THEME } = useTheme()
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: styles.tabBarOptions
            }}
        >
            <Tab.Screen
                name="FeedNavigation"
                component={FeedNavigation}
                options={{
                    tabBarAccessibilityLabel: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="home" size={30} color={focused ? THEME.PRIMARY : THEME.DEFAULT} />
                    ),
                    tabBarButton: (props: any) => (
                        <TabBarButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="FavsNavigation"
                component={FavsNavigation}
                options={{
                    tabBarAccessibilityLabel: 'Favorites',
                    tabBarIcon: ({ focused }) => (
                        <AntDesign name="heart" size={25} color={focused ? THEME.PRIMARY : THEME.DEFAULT} />
                    ),
                    tabBarButton: (props: any) => (
                        <TabBarButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="CartNavigation"
                component={CartNavigation}
                options={{
                    tabBarAccessibilityLabel: 'Cart',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="user" size={28} color={focused ? THEME.PRIMARY : THEME.DEFAULT} />
                    ),
                    tabBarButton: (props: any) => (
                        <TabBarButton
                            {...props}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="ProfileNavigation"
                component={ProfileNavigation}
                options={{
                    tabBarAccessibilityLabel: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="shopping-cart" size={28} color={focused ? THEME.PRIMARY : THEME.DEFAULT} />
                    ),
                    tabBarButton: (props: any) => (
                        <TabBarButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeNavigation

const styles = StyleSheet.create({
    tabBarOptions: {
        borderTopWidth: 0,
        backgroundColor: "transparent",
        elevation: 0,
    },
});