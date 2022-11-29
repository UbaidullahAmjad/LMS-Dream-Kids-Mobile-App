import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ChatScreen from '../ChatScreen';
import ChattingWithPerson from '../ChattingWithPerson';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const ChatStack = createNativeStackNavigator()

export default function ChatNavigation({ navigation, route }) {
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
       
        if (routeName == "ChattingWithPerson") {
            navigation.setOptions({tabBarStyle: {display: 'none'}});
        } else {
            navigation.setOptions({tabBarStyle: {display: 'flex'}});
        }
    }, [navigation, route]);
    return (
        <ChatStack.Navigator
            screenOptions={{
                headerShown: false

            }}
        >
            <ChatStack.Screen
                name='ChatScreen'
                component={ChatScreen}
            />
            <ChatStack.Screen
                name='ChattingWithPerson'
                component={ChattingWithPerson}

            />

        </ChatStack.Navigator>
    )
}