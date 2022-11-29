import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import Header from '../../../Components/Header';
import { PROFILE, MATH_GENIOUS } from '../../../Confiq/StaticImages';
import AboutMe from '../Component/AboutMe';


export default function Certificate(props) {
    const [certificate, setcertificate] = useState([1])
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header subText="My certificate" setting={true} />
            <View style={{
                marginHorizontal: wp('5%'),
                // backgroundColor: "red",
                flex: 1
            }}>
                <ScrollView horizontal={false} >
                    <ScrollView horizontal={true}>
                        <View style={{ width: wp('90%'), height: hp('91%'), }}>
                            <View style={{ alignItems: "center" }}>
                                <Image
                                    style={{
                                        width: 100,
                                        height: 100,
                                        resizeMode: "cover",
                                        borderWidth: 2,
                                        borderColor: "#457DC0",
                                        borderRadius: 100

                                    }}
                                    source={PROFILE} />
                                <Text style={{ fontWeight: "bold", fontSize: hp('2%'), color: '#434242', marginTop: 6 }}>John Malcom</Text>
                                <Text style={{ color: '#434242' }}>John_Malcom@gmail.com</Text>

                            </View>
                            <AboutMe parent={false} />
                            {certificate.length == 0 ? (
                                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                    <Text style={{ fontWeight: "bold", fontSize: hp('2%'), color: '#434242', marginTop: 6 }}>MY Certificates</Text>
                                    <Text style={{ color: '#8D8D8D', marginVertical: 16 }}>You do not have a certificate yet</Text>
                                    <Text style={{ color: '#8D8D8D', marginTop: 6 }}>Get Started easy, select a course here,</Text>
                                    <Text style={{ color: '#8D8D8D', marginTop: 5 }}>pass it and get your frst certificate</Text>
                                </View>

                            ) :
                                <View style={{ flex: 1, marginTop: hp('6%') }}>
                                    <Text style={{ fontWeight: "bold", fontSize: hp('2%'), color: '#434242', marginTop: 6, textAlign: "center" }}>MY Certificates</Text>
                                    <FlatList
                                        data={certificate}
                                        renderItem={({ item, index }) => {
                                            return (
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: "space-between",
                                                    marginTop: 24
                                                }}>
                                                    <View style={{
                                                        flexDirection: "row",

                                                    }}>
                                                        <View>
                                                            <Image
                                                                source={MATH_GENIOUS}
                                                                style={{
                                                                    width: wp('20%'),
                                                                    height: hp('8%'),
                                                                    resizeMode: "cover",
                                                                    borderRadius: 16
                                                                }}

                                                            />
                                                        </View>
                                                        <View style={{ paddingLeft: 16, justifyContent: "center" }}>
                                                            <Text style={{ color: '#434242', fontSize: hp('2%') }}>Math Genius! Quiz</Text>
                                                            <Text style={{ color: "#8D8D8D", fontSize: hp('1.4%') }}>21 April 2021</Text>
                                                            <Text style={{ fontWeight: "bold", color: "#000", fontSize: hp('2%') }}>8 out of 10</Text>
                                                        </View>

                                                    </View>
                                                    <TouchableOpacity
                                                    onPress={()=> props?.navigation?.navigate('CertficateMain')}
                                                        style={{
                                                            alignSelf: 'center',
                                                            backgroundColor: "#F0595B",
                                                            borderRadius: 12,
                                                            paddingHorizontal: 12,
                                                            paddingVertical: 4
                                                        }}
                                                    >

                                                        <Text>View Certificate</Text>
                                                    </TouchableOpacity>

                                                </View>

                                            )
                                        }}
                                        keyExtractor={(item, index) => index}
                                    />
                                </View>

                            }


                        </View>
                    </ScrollView>
                </ScrollView>


            </View>

        </View>
    )
}

const styles = StyleSheet.create({

})