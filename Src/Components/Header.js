import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';

export default function Header({ subText, setting, right }) {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: "center", margin: 20 }}>
            <View style={{ flexDirection: "row", justifyContent: "center", }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back-ios" color='black' size={25} />
                </TouchableOpacity>
                {subText &&
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ color: '#000', fontWeight: "bold" }}>{subText}</Text>
                    </View>
                }

            </View>
            {right == false ? (
                null
            ) :
                setting ? (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('SettingNavigation')}
                    >
                        <Feather name="settings" color='black' size={22} />
                    </TouchableOpacity>

                ) :
                    <TouchableOpacity
                        onPress={() => navigation.navigate('CoursesNavigation', {
                            screen: "Notification"
                        })}
                    >
                        <Text style={{
                            backgroundColor: "#C42328",
                            borderRadius: 20,
                            paddingHorizontal: 3,
                            paddingVertical: 1,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 1,
                            fontSize: 6,
                            fontWeight: "bold"
                        }}>1</Text>
                        <Image style={{ height: 25, width: 21.9 }} source={require('../assets/images/bell.png')} />
                    </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({})