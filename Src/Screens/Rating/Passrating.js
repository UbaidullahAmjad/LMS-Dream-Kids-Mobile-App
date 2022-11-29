import React from "react";
import { View, Text, Image, TouchableHighlight } from 'react-native'
import passImage from '../../assets/images/pass.png';
import backBtn from '../../assets/images/back.png';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import ratingImage from '../../assets/images/8c.png';

function Passrating() {
    return (
        <View style={{ color: 'white' }}>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Image
                    source={backBtn}
                    style={{ width: wp('10%'), height: hp('3%') }}
                />
                <Text
                    style={{ fontFamily: 'Helvetica', fontSize: hp('2.3%'), color: 'gray' }}>Result</Text>
            </View>
            <Image
                style={{
                    width: wp('50%'),
                    height: hp('30%'),
                    top: 10,
                    resizeMode: "stretch", alignSelf: 'center'
                }}
                source={passImage} />

            <Text style={{ fontFamily: 'AvenirLTStd-Roman', alignSelf: 'center', marginTop: 30, fontSize: hp('3.5%'), color: '#E9616B' }}>CONGRATULATIONS!</Text>
            <Text style={{ fontFamily: 'Helvetica', alignSelf: 'center', marginTop: 2, color: 'gray', fontSize: hp('2.5%') }}>you have passed the quiz</Text>

            <Image
                style={{
                    width: wp('80%'),
                    height: hp('13%'),
                    top: 30,
                    resizeMode: "stretch", alignSelf: 'center'
                }}
                source={ratingImage} />

            <Text style={{ fontFamily: 'Helvetica', alignSelf: 'center', marginTop: 50, color: 'gray' }}>you have</Text>
            <Text style={{ fontFamily: 'AvenirLTStd-Roman', alignSelf: 'center', marginTop: 5, fontSize: hp('3%'), color: '#E9616B' }}>8 OUT Of 10</Text>
            <Text style={{ fontFamily: 'AvenirLTStd-Roman', alignSelf: 'center', marginTop: 5, color: 'gray' }}>Questions Correct</Text>



            <TouchableHighlight
                onPress={() => alert('Cart')}
                underlayColor="#fff"
            >
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        width: wp('80%'),
                        height: hp('7%'),
                        marginBottom: 20,
                        borderRadius: 30,
                        top: 40,
                        backgroundColor: '#FAB815',
                    }}
                >
                    {/* {shared.btnLoader ? (
                                            <ActivityIndicator size="small" color="#fff" />
                                        ) : */}
                    <Text style={{ color: 'gray', fontSize: hp('2%') }}>View Cart</Text>
                    {/* } */}
                </View>
            </TouchableHighlight>
        </View>
    )
}

export default Passrating;