import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import Header from '../../../Components/Header';
import AboutMe from '../Component/AboutMe';
import ProfileRoudedImage from '../Component/ProfileRoudedImage';
import Review from '../Component/Review';
import UserInfor from '../Component/UserInfor';
import { connect } from 'react-redux';


function ProfileHome(props) {
    const {
        first_name,
        last_name,
        image1,
        email,
        dob,
        gender,
        allergy,
        date_of_enrollment,
        date_of_withdraw,
        address,
        diet_requirement
    } = props?.user?.userData?.user_data
    const info = [
        {
            name: 'Date of Birth',
            value: dob
        },
        {
            name: 'Gender',
            value: gender
        },
        {
            name: 'Diet Requirement',
            second: "(If any)",
            value: diet_requirement
        },
        {
            name: 'Allergy',
            second: "(If any)",
            value: allergy
        },
        {
            name: 'Date of enrolment',
            value: date_of_enrollment
        },
        {
            name: 'Date of withdraw',
            value: date_of_withdraw
        },
    ]
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header subText="Profile" setting={true} />
            <View style={{
                marginHorizontal: wp('5%'),
                flex: 1
            }}>
                <ScrollView>
                    <ProfileRoudedImage />
                    <AboutMe navigation={props?.navigation} />
                    <View style={{
                        marginTop: hp('3%'),
                    }}>
                        <UserInfor titleColor='#000' valueColor="#000" borderColor="#EAE7E6" info={info} />
                    </View>

                    <View>
                        <Text style={{ color: "#000", fontSize: hp('1.4%'), paddingVertical: 12 }}>Residential Address</Text>
                        <Text style={{ color: "#000", fontSize: hp('2%') }}>
                           {address}
                        </Text>
                    </View>
                    <Review navigation={props.navigation} />
                </ScrollView>
            </View>
        </View>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})
export default connect(mapStateToProps, {


})(ProfileHome)