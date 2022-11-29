import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/Header'
import ProfileRoudedImage from '../../Profile/Component/ProfileRoudedImage'
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather'
import CustommButton from '../../../Components/CustomButton';
import UserInfor from '../../Profile/Component/UserInfor';
import { UpdateProfile } from '../../../Store/Actions/userAction';
import { connect } from 'react-redux';

function EditProfile(props) {
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
        diet_requirement,
        detail
    } = props?.user?.userData?.user_data
    const [addressfield, setaddress] = useState(address)
    const [password , setpassword] = useState(null)
    const [info, setinfo] = useState([
        {
            name: 'Date of Birth',
            value: dob,
            DateField: true
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
            value: date_of_enrollment,
            DateField: true
        },
        {
            name: 'Date of withdraw',
            value: date_of_withdraw,
            DateField: true
        },
    ])
    console.log("Profile info", info)
    const [aboutme, setaboutme] = useState(detail)
    const [editAbout, setEditAbout] = useState(false)
    let FoucsInput
    console.log(editAbout)
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            <Header right={false} subText="Edit profile" />
            <ScrollView>
                <View style={{

                    flex: 1
                }}>
                    <ProfileRoudedImage edit />
                    <View style={{
                        flex: 1,
                        backgroundColor: "#4175BB",
                        borderTopRightRadius: 32,
                        borderTopLeftRadius: 32,
                        marginTop: 12
                    }}>
                        <View style={{
                            margin: 18
                        }}>
                            <View>
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: 'space-between',

                                }}>
                                    <View style={{ justifyContent: "center" }}>
                                        <Text style={{ fontWeight: "bold", fontSize: hp('2%'), color: '#FAB815', marginTop: 6 }}>About Me</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => {
                                        setEditAbout(!editAbout)
                                        FoucsInput.focus()

                                    }}>
                                        <Feather name='edit' color={'#fff'} size={18} />

                                    </TouchableOpacity>


                                </View>
                                <View style={{
                                    marginTop: 8
                                }}>
                                    <TextInput
                                        placeholder='About me'
                                        ref={(input) => { FoucsInput = input; }}
                                        style={{
                                            color: '#fff'
                                        }}
                                        onChangeText={(text) => setaboutme(text)}
                                        multiline={true}
                                        value={aboutme}

                                    />

                                </View>
                            </View>
                            <View style={{
                                marginTop: hp('1%')
                            }}>

                            </View>
                            <UserInfor
                                titleColor='#FAB815'
                                valueColor="#fff"
                                borderColor="#6293CD"
                                info={info}
                                disable={true}
                                onChangeText={(value) => setinfo(value)}
                                DOB={0}
                            />
                            <View style={{
                                marginTop: 12
                            }}>
                                <Text style={{ color: '#FAB815', fontSize: hp('1.4%'), paddingLeft: 8, }}>Residential Address</Text>
                               
                                <TextInput
                                    value={addressfield}
                                    onChangeText={(text)=> setaddress(text)}
                                    placeholder={'Address'}
                                    placeholderTextColor='#fff'
                                    style={{
                                        color: "#fff", fontSize: hp('2%'), paddingLeft: 8,paddingVertical:0
                                    }}
                                    multiline={true}

                                />
                            </View>
                            <View style={{ marginTop: 18 }}>
                                <Text style={{ color: "#fff", fontSize: hp('1.9%'), paddingLeft: 24, }}>
                                    Password
                                </Text>
                                <TextInput
                                    placeholder={'enter your new password'}
                                    placeholderTextColor='black'
                                    style={styles.Container}
                                    secureTextEntry={true}
                                    value={password}
                                    onChangeText={(text)=> setpassword(text)}

                                />
                            </View>
                            <View style={{ marginTop: 18 }}>
                                <Text style={{ color: "#fff", fontSize: hp('1.9%'), paddingLeft: 24, }}>
                                    Email
                                </Text>
                                <TextInput
                                    placeholder={'enter your new email'}
                                    placeholderTextColor='black'
                                    style={styles.Container}
                                   
                                />
                            </View>
                            <View style={{ marginTop: 24 }}>
                                <CustommButton
                                onPress={()=> props?.UpdateProfile(info , addressfield , password , aboutme)}
                                title={'Save Changes'} />
                            </View>


                        </View>

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
    UpdateProfile
})(EditProfile)
const styles = StyleSheet.create({
    Container: {
        borderColor: '#949494',
        borderWidth: 1,
        borderRadius: 30,
        height: hp('7%'),
        padding: 5,
        paddingLeft: 24,
        backgroundColor: '#F9F3E8',
        color: "black",
        marginTop: 6
    },
})