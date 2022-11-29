import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Notification from '../../Notification/Notification';
import Failrating from '../../Rating/Failrating';
import Passrating from '../../Rating/Passrating';
import CourseDetail from '../CourseDetail';
import CoursesScreen from '../CoursesScreen';
import LessonScreen from '../LessonScreen';
import MCQs from '../MCQs';
import StartQuiz from '../StartQuiz';
import TryQuiz from '../TryQuiz';

const CoursesStack = createNativeStackNavigator()

export default function CoursesNavigation({ navigation, route }) {
    return (
        <CoursesStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <CoursesStack.Screen
                name='CoursesScreen'
                component={CoursesScreen}
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