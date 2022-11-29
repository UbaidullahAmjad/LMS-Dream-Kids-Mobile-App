import React, { useState } from 'react'
import { ScrollView, Text, View, TextInput } from 'react-native'
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import CustommButton from '../../../Components/CustomButton'
import Header from '../../../Components/Header'
import ProfileRoudedImage from '../../Profile/Component/ProfileRoudedImage'
import UserInfor from '../../Profile/Component/UserInfor'
import { connect } from 'react-redux';
import { UpdateParentProfile } from '../../../Store/Actions/userAction'

function EditParentProfile(props) {
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
  

    const [Parentaddress, setaddress] = useState(address)
    const [info, setinfo] = useState([
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
        // {
        //     name: 'Residential Address',
        //     value: address
        // },

    ])
    const [Motherinfo, setMotherinfo] = useState([
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
        // {
        //     name: 'Residential Address',
        //     value: address
        // },

    ])
    console.log(info)
    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <Header subText="Edit parent profile" right={false} />
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <ProfileRoudedImage edit />
                <View style={{
                    flex: 1,
                    backgroundColor: "#4175BB",
                    borderTopRightRadius: 32,
                    borderTopLeftRadius: 32,
                    marginTop: 12,
                }}>
                    <View style={{
                        margin: 18,
                        flex: 1,
                    }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <View style={{ justifyContent: "center" }}>
                                <Text style={{ fontWeight: "bold", fontSize: hp('2%'), color: '#FAB815', marginTop: 6 }}>Parent Profile</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 14 }}>
                            <UserInfor titleColor='#FAB815' valueColor="#fff" borderColor="#6293CD" info={info} border={false} disable={true} onChangeText={(value) => setinfo(value)}  />
                        </View>
                        <View style={{ width: '100%', height: 2, backgroundColor: '#6293CD', marginVertical: 8 }} />
                        <UserInfor titleColor='#FAB815' valueColor="#fff" borderColor="#6293CD" info={Motherinfo} border={false} disable={true} onChangeText={(value) => setMotherinfo(value)}  />
                        <View style={{ marginTop: 12 }}>
                        <Text style={{ color: '#FAB815', fontSize: hp('1.4%'), paddingLeft:  8, }}>Address</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{
                                    alignSelf: "center",
                                    borderLeftWidth: 0,
                                    borderColor: '#fff', width: 1, height: '100%'
                                }} />
                                <TextInput
                                    placeholder={'Address'}
                                    value={Parentaddress}
                                    multiline={true}
                                    placeholderTextColor="#fff"
                                    onChangeText={(text) => setaddress(text)}
                                    style={{
                                        color: '#fff',
                                        fontSize: hp('2%'),
                                        paddingLeft: 8,
                                        width:"100%",
                                        paddingVertical: 0
                                    }}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingBottom: 12 }}>
                        <CustommButton
                            onPress={() => props?.UpdateParentProfile(info, Motherinfo , Parentaddress)}
                            title={'Save Changes'} />
                    </View>

                </View>

            </ScrollView>
        </View>
    )
}

const mapStateToProps = ({ user }) => ({
    user
})
export default connect(mapStateToProps, {
    UpdateParentProfile

})(EditParentProfile)