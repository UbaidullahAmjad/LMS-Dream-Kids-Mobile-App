import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';

export default function AboutMe(props) {
    return (
        <View>
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between',
                marginTop: 10
            }}>
                <View style={{ justifyContent: "center" }}>
                    <Text style={{ fontWeight: "bold", fontSize: hp('2%'), color: '#434242', marginTop: 6 }}>About Me</Text>
                </View>
                {props?.parent == false ? (
                    null
                ) :
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('ParentProfile')}
                        style={{

                            justifyContent: "center",
                            alignItems: "center",
                            width: wp('30%'),
                            height: hp('3%'),
                            backgroundColor: '#447DC0',
                            borderRadius: 20
                        }}
                    >
                        <Text style={{ color: '#fff', textAlign: "center" }}>Parent Profile</Text>
                    </TouchableOpacity>
                }

            </View>
            <View style={{
                marginTop: 8
            }}>
                <Text style={{ color: '#434242' }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                    veniam, quis nostrud exerci tation ulla</Text>
            </View>
        </View>
    )
}