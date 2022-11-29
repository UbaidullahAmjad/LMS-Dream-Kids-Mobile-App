import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import { heightPercentageToDP } from 'react-native-responsive-screen';

export default function CourseHeader({ subText, navigation, cross, title }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center", margin: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back-ios" color='black' size={25} />
                </TouchableOpacity>

                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: '#000', fontWeight: "bold", fontSize: heightPercentageToDP('2%') }}>{title}</Text>
                    <Text style={{
                        color: '#000',
                        fontSize: heightPercentageToDP('1.4%')
                    }}>{subText}</Text>
                </View>
            </View>

            {cross ? <TouchableOpacity
                onPress={() => navigation.navigate('SettingNavigation')}
            >
                <Entypo name="cross" color='black' size={30} />
            </TouchableOpacity> : <TouchableOpacity
                onPress={() => navigation.navigate('SettingNavigation')}
            >
                <MaterialCommunityIcons name="message-question-outline" color='black' size={30} />
            </TouchableOpacity>}

        </View>
    )
}

const styles = StyleSheet.create({})