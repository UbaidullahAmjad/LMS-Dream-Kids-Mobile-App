import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SettingHome from '../Screen/SettingHome';
import EditProfile from '../Screen/EditProfile';
import EditParentProfile from '../Screen/EditParent';
import AboutDreamKid from '../Screen/AboutDreamKid';
import FAQs from '../Screen/FAQ';
import MyCourses from '../Screen/MyCourses';


const SettingStack = createNativeStackNavigator()

export default function SettingNavigation(){
    return(
        <SettingStack.Navigator
            screenOptions={{
                headerShown:false
            }}
        >
            <SettingStack.Screen
                name='SettingHome'
                component={SettingHome}
            />
            <SettingStack.Screen
                name='EditProfile'
                component={EditProfile}
            />
            <SettingStack.Screen
                name='EditParentProfile'
                component={EditParentProfile}
            />
            <SettingStack.Screen
                name='AboutDreamKid'
                component={AboutDreamKid}
            />
            <SettingStack.Screen
                name='FAQs'
                component={FAQs}
            />
            <SettingStack.Screen
                name='MyCourses'
                component={MyCourses}
            />
          

        </SettingStack.Navigator>

    )
}