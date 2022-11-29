import React from "react";
import { View, Text, Image } from 'react-native'
import { HOME_LOGO, PROFILE } from '../../../Confiq/StaticImages'
import {
    heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function HomeHeader(props) {
    const { first_name, last_name, image1 } = props?.user?.userData?.user_data
    return (
        <View style={{
            flexDirection: "row",
            justifyContent: 'space-between',
            padding: "2%",
            width:widthPercentageToDP('100%')
        }}>
            <View style={{ justifyContent: "center", }}>
                <Image style={{
                    resizeMode: "stretch",
                    width: wp('35%'),
                    height: hp('5%')

                }} source={HOME_LOGO} />
            </View>

            <View style={{
                flexDirection: 'row',
                width: wp('60%'),
                justifyContent:"flex-end",
            }}>
                <View style={{ justifyContent: "center" , paddingRight:6 }}>
                    <Text style={{ color: "#000" }}>Hello, {first_name + " " + last_name}</Text>
                </View>
                {image1 ? (
                    <Image style={{
                        resizeMode: "contain",
                        width: 40,
                        height: 40,
                        borderRadius: 100,
                        marginLeft: 16

                    }} source={{ uri: image1 }} />
                ) :
                    <View style={{
                        width: 40,
                        height: 40,
                        borderWidth: 2,
                        borderColor: "#457DC0",
                        borderRadius: 100,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <FontAwesome name='user' size={24} color='#DFA02E' />
                    </View>
                }



            </View>
        </View>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})
export default connect(mapStateToProps, {


})(HomeHeader)