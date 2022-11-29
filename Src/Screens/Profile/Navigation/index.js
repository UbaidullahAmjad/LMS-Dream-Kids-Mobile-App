import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ProfileHome from '../Screen/ProfileHome';
import Certificate from '../Screen/Certificate';
import SettingNavigation from '../../Setting/Navigation/SettingNavigation';
import ParentProfile from '../Screen/ParentProfile';
import CertficateMain from '../Screen/CertificateMain'

const ProfileStack = createNativeStackNavigator()

export default function ProfileNavigation() {
    return (
        <ProfileStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <ProfileStack.Screen
                name='ProfileHome'
                component={ProfileHome}
            />
            <ProfileStack.Screen
                name='Certificate'
                component={Certificate}
            />
            <ProfileStack.Screen
                name='SettingNavigation'
                component={SettingNavigation}
            />
            <ProfileStack.Screen
                name='ParentProfile'
                component={ParentProfile}
            />
            <ProfileStack.Screen
                name='CertficateMain'
                component={CertficateMain}
            />

        </ProfileStack.Navigator>

    )
}