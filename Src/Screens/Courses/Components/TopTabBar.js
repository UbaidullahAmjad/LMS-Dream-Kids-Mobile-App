import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import Corriculum from './Corriculum';
import FAQs from './FAQs';
import OverView from './OverView';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="OverView" component={OverView} />
            <Tab.Screen name="Curriculum" component={Corriculum} />
            <Tab.Screen name="FAQs" component={FAQs} />
        </Tab.Navigator>


    );
}

