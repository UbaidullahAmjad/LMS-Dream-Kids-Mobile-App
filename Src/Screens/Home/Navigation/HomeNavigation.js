import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Notification from '../../Notification/Notification';
import Failrating from '../../Rating/Failrating';
import Passrating from '../../Rating/Passrating';
import CourseDetail from '../../Courses/CourseDetail';
import Home from '../Home';

import LessonScreen from '../../Courses/LessonScreen';
import MCQs from '../../Courses/MCQs';
import StartQuiz from '../../Courses/StartQuiz';
import TryQuiz from '../../Courses/TryQuiz';


const CoursesStack = createNativeStackNavigator()

export default function HomeNavigation({ navigation, route }) {
    return (
        <CoursesStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <CoursesStack.Screen
                name='Home'
                component={Home}
            />
            <CoursesStack.Screen
                name='CourseDetail'
                component={CourseDetail}

            />
            <CoursesStack.Screen
                name='Notification'
                component={Notification}

            />
            <CoursesStack.Screen
                name='TryQuiz'
                component={TryQuiz}
            />

            <CoursesStack.Screen
                name='LessonScreen'
                component={LessonScreen}
            />

            <CoursesStack.Screen
                name='StartQuiz'
                component={StartQuiz}

            />
            <CoursesStack.Screen
                name='SubmitAnswers'
                component={MCQs}

            />
            <CoursesStack.Screen
                name='Pass'
                component={Passrating}
            />
            <CoursesStack.Screen
                name='Fail'
                component={Failrating}

            />
        </CoursesStack.Navigator>
    )
}