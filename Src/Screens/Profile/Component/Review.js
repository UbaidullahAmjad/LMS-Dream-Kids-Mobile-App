import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import RatingStars from '../../../Components/RatingStars';

export default function Review(props) {
    return (
        <View>
            <View style={{
                marginTop: hp('6%'),
                flexDirection: "row",
                flexWrap: 'wrap',
                justifyContent: "space-between"
            }}>
                <View style={{ flexDirection: "row", width: "40%" }}>
                    <View>
                        <Text style={{ color: "#000", fontSize: hp('2%'), fontWeight: "bold" }}>REVIEW</Text>
                        <Text style={{ color: "#000", fontSize: hp('1.6%') }}>
                            Review by Teacher
                        </Text>
                    </View>
                    <View style={{ backgroundColor: "#447DC0", alignItems: "center", justifyContent: "center", borderRadius: 50, paddingRight: 50, width: '60%' }}>
                        <RatingStars overview />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => props?.navigation.navigate('Certificate')}
                    style={{
                        flexDirection: 'row',
                        backgroundColor: "#69BD45",
                        borderRadius: 50,
                        paddingHorizontal: 10,
                        paddingVertical: 8,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <FontAwesome name='certificate' color={'#fff'} size={16} />
                    <Text style={{ color: "#fff", fontSize: hp('2%'), marginLeft: 6 }}>
                        MY Certificates
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={{
                width: "100%",
                height: 100,
                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 6
            }}>
                <View style={{
                    width: "48.5%",
                    borderWidth: 4,
                    borderColor: '#FAB815',
                    justifyContent: "center",
                    paddingHorizontal: 12,
                    borderRadius: 12,

                }}>
                    <Text style={{
                        color: '#000',
                        fontSize: hp('1.8%'),

                    }}>
                        Average Score
                    </Text>
                    <Text style={{
                        color: '#457DC0',
                        fontSize: hp('6%'),

                    }}>
                        70%
                    </Text>

                </View>
                <View style={{
                    width: "48.5%",
                    borderWidth: 4,
                    borderColor: '#FAB815',
                    justifyContent: "center",
                    paddingHorizontal: 12,
                    borderRadius: 12
                }}>
                    <Text style={{
                        color: '#000',
                        fontSize: hp('1.8%'),

                    }}>
                        Exams Taken
                    </Text>
                    <Text style={{
                        color: '#457DC0',
                        fontSize: hp('6%'),

                    }}>
                        12
                    </Text>

                </View>

            </View>
            {[1, 2, 3].map((item, index) => {
                return (
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop: hp('2%'),
                        paddingBottom: 12,
                        borderBottomWidth: 2,
                        borderColor: "#C9C8C8"
                    }} key={index}>
                        <Text style={{ color: "#323333", fontSize: hp('2%'), }}>Jan 18, 2021 at 10:45 AM</Text>
                        <Text style={{ color: "#323333", fontSize: hp('2%'), }}>83%</Text>


                    </View>
                )
            })}
        </View>
    )
}