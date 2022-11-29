import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../../../Components/Header'
import ProfileRoudedImage from '../Component/ProfileRoudedImage'
import UserInfor from '../Component/UserInfor'
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';



function ParentProfile(props) {
    console.log("------------------------------------------------------------",props?.user?.userData?.parent)
    if(props?.user?.userData?.parent == null){
        var {
            father_name,
            mother_name,
            father_mobile_number,
            mother_mobile_number,
            father_email,
            mother_email,
            father_DOB,
            mother_DOB,
            address,
        } = ''

    }else{
        var {
            father_name,
            mother_name,
            father_mobile_number,
            mother_mobile_number,
            father_email,
            mother_email,
            father_DOB,
            mother_DOB,
            address,
        } = props?.user?.userData?.parent
    }
   
    let info = [
        {
            name: 'Father Full Name',
            value: father_name
        },
        {
            name: 'Contact Number',
            value: father_mobile_number
        },
        {
            name: 'Date of Birth',
            value: father_DOB,
            DateField:true
        },
        {
            name: 'Email',

            value: father_email
        },
        {
            name: 'Residential Address',
            value: address
        },

    ]
    let Motherinfo = [
        {
            name: 'Mother Full Name',
            value: mother_name
        },
        {
            name: 'Contact Number',
            value: mother_mobile_number
        },
        {
            name: 'Date of Birth',
            value: mother_DOB,
            DateField:true
        },
        {
            name: 'Email',

            value: mother_email
        },
        {
            name: 'Residential Address',
            value: address
        },

    ]
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header subText="Parent profile" right={false} />
            <View style={{
                flex: 1
            }}>
                <ScrollView>
                    <View style={{
                        width: wp('100%'),
                        height: hp('91.2%')
                    }}>
                        <ProfileRoudedImage />
                        <View style={{
                            flex: 1,
                            backgroundColor: "#4175BB",
                            borderTopRightRadius: 32,
                            borderTopLeftRadius: 32,
                            marginTop: 12,

                        }}>
                            <View style={{
                                margin: 18
                            }}>
                                <Text style={{ fontWeight: "bold", fontSize: hp('2%'), color: '#FAB815', marginTop: 6 }}>Parent Profile</Text>
                                <View style={{ marginTop: 14 }}>
                                    <UserInfor titleColor='#FAB815' valueColor="#fff" borderColor="#6293CD" info={info} border={false} />
                                </View>
                                <View style={{ width: '100%', height: 2, backgroundColor: '#6293CD', marginVertical: 8 }} />
                                <UserInfor titleColor='#FAB815' valueColor="#fff" borderColor="#6293CD" info={Motherinfo} border={false} />
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})
export default connect(mapStateToProps, {


})(ParentProfile)