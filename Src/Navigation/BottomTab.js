import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ChatNavigation from '../Screens/Chat/Navigation/ChatNavigation';
import CoursesNavigation from '../Screens/Courses/Navigation/CoursesNavigation';
import Searchcourses from '../Screens/Courses/Searhcourses';
import Home from '../Screens/Home/Home';
import ProfileNavigation from '../Screens/Profile/Navigation';
import HomeNavigation from '../Screens/Home/Navigation/HomeNavigation';

const Tab = createBottomTabNavigator();
export default function BottomTab() {
    return (
        <Tab.Navigator
            labeled={false}
            optimizationsEnabled={true}
            screenOptions={{
                tabBarStyle: { position: 'absolute' },
                tabBarInactiveTintColor: "#000",
                tabBarActiveTintColor: "#FAB815",
                tabBarShowLabel: false,
                headerShown: false,
                tabBarBackground: () => (
                    <LinearGradient
                        start={{ x: 0, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={{
                            height: 100
                        }}
                        colors={['#E6E0D7', '#fff', "#FFFFFF"]} />
                ),
            }}

        >
            <Tab.Screen
                name="Home" component={HomeNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="CoursesNavigation"
                component={CoursesNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-book-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Searchcourses"
                component={Searchcourses}
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="search1" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={ChatNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="chatbubble-ellipses-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileNavigation"
                component={ProfileNavigation}
                options={{
                    tabBarStyle: { display: "none" },
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>

    )
}