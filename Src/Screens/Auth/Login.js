import React, { useState } from "react";
import {
    Dimensions, Image, Keyboard, StyleSheet, Text, TextInput,
    TouchableHighlight, TouchableWithoutFeedback, View, TouchableOpacity
} from "react-native";
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { Checkbox } from 'react-native-paper';
import CustommButton from "../../Components/CustomButton";
import { connect } from 'react-redux';
import { UserLogin } from '../../Store/Actions/userAction'

const Login = (props) => {
    const [Email, setEmail] = useState("komail12@gmail.com");
    const [Password, setPassword] = useState("12345");
    const [ShowPassword, setShowPassword] = useState(true);
    const [checked, setChecked] = React.useState(false);

    const loginUser = () => {
        if (Email != "" && Password != '') {
            props?.UserLogin(Email, Password)
        }
        else {
            alert('Enter Required Fields')
        }
    }

    return (
        <View
            style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: 'white',
                paddingTop: 60,
            }}
        >
            <TouchableWithoutFeedback
                style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onPress={() => {
                    Keyboard.dismiss();
                }}
            >
                <View
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginHorizontal: 12
                    }}
                    onClick={() => {

                    }}
                >
                    <Image
                        source={require("../../assets/images/main2.png")}
                        resizeMode="contain"
                        style={[styles.main2]}
                    />
                    <View style={{ justifyContent: 'center', alignItems: 'center', width: Dimensions.get('screen').width / 2 }}>
                        <Text style={{
                            color: '#467EC1',
                            fontSize: hp('3%'),
                            marginTop: 10,
                            fontFamily: 'AvenirLTStd-Roman',
                        }}>Welcome Back !</Text>
                        <Text style={{
                            color: '#000',
                            fontSize: hp('1.5%'),
                            textAlign: 'center'
                        }}>Stay signed in with your account
                            to make searching easier</Text>
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                            }}
                        >
                            <View style={{
                                justifyContent: 'center'
                            }}>
                                <Text
                                    style={{
                                        color: "#000",
                                        fontSize: hp('1.5%'),
                                    }}
                                >
                                    Email
                                </Text>
                            </View>

                            <TextInput
                                placeholder="Enter your Email"
                                placeholderTextColor='silver'
                                style={{
                                    color: "black",
                                    width: "100%",
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#ccc",
                                    fontSize: hp('1.5%'),
                                }}
                                textContentType="emailAddress"
                                value={Email}

                                onChangeText={(value) => setEmail(value)}
                            ></TextInput>
                        </View>
                        <View
                            style={{
                                marginTop: 20,
                                display: "flex",
                                flexDirection: "column",
                                flexWrap: "wrap",
                            }}
                        >
                            <View style={{
                                justifyContent: "center"
                            }}>
                                <Text
                                    style={{
                                        marginTop: 5,
                                        color: "#000",
                                        fontSize: hp('1.5%'),
                                    }}
                                >
                                    Password
                                </Text>
                            </View>

                            <View
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#ccc",
                                }}
                            >
                                <TextInput
                                    placeholder="Enter your Password"
                                    placeholderTextColor='silver'
                                    textContentType="password"
                                    style={{
                                        fontSize: hp('1.5%'),
                                        color: "black",
                                        width: "90%",
                                    }}
                                    secureTextEntry={ShowPassword}

                                    value={Password}

                                    onChangeText={(value) => setPassword(value)}
                                ></TextInput>
                                {Password != "" && !ShowPassword ? (
                                    <TouchableWithoutFeedback
                                        onPress={() => setShowPassword(true)}
                                    >
                                        <View style={{ marginTop: 10, paddingRight: 5, justifyContent: "center" }}>
                                            <FontAwesome name="eye-slash" />
                                        </View>
                                    </TouchableWithoutFeedback>
                                ) : (
                                    <TouchableWithoutFeedback
                                        onPress={() => setShowPassword(false)}
                                    >
                                        <View style={{ marginTop: 10, paddingRight: 5, justifyContent: "center" }}>
                                            <FontAwesome name="eye" />
                                        </View>
                                    </TouchableWithoutFeedback>
                                )}
                            </View>
                        </View>

                        <View style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginTop: 5
                        }}>
                            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <Checkbox
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setChecked(!checked);
                                    }}
                                />
                                <Text style={{ fontSize: hp('1.5%'), color: "silver" }}>keep me signed in</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => props?.navigation.navigate('ResetPassword')}
                            >
                                <Text style={{
                                    fontSize: hp('1.5%'),
                                    color: '#F15F4C',
                                    marginHorizontal: 4,
                                    fontFamily: 'Helvetica',
                                }}>Forget Password?</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View
                                style={{
                                    marginVertical: 30,
                                    width: "90%",
                                    alignSelf: "center",
                                    elevation: 10,
                                }}
                            >
                                <CustommButton title={'Sign In'} onPress={() => props?.UserLogin(Email, Password , checked)} />
                            </View>
                        </View>

                        <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                            <View style={{ width: Dimensions.get('screen').width / 3.38, height: 0, borderColor: 'silver', borderWidth: 0.3 }} />
                            <View style={{ width: Dimensions.get('screen').width / 3.38, }}><Text style={{ color: 'silver', fontSize: hp('1.5%'), marginLeft: 10 }}>or continue with</Text></View>
                            <View style={{ width: Dimensions.get('screen').width / 3.38, borderColor: 'silver', borderWidth: 0.3 }} />
                        </View>

                        <View>
                            <View
                                style={{
                                    marginTop: 30,
                                    width: "90%",
                                    elevation: 10,
                                    alignSelf: "center",
                                    flexDirection: 'row',
                                }}
                            >
                                <TouchableHighlight
                                    onPress={() => alert('login')}
                                    underlayColor="#fff"
                                >
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: wp('40%'),
                                            height: hp('6%'),
                                            marginBottom: 20,
                                            borderRadius: 10,
                                            backgroundColor: '#F15E4B',
                                            flexDirection: "row",
                                            marginLeft: -10
                                        }}
                                    >
                                        <Image source={require('../../assets/images/google.png')} style={{ height: 15, width: 15 }} />
                                        <Text style={{ color: "#fff", fontSize: hp('1.6%'), marginLeft: 10 }}>Google</Text>
                                    </View>
                                </TouchableHighlight>

                                <TouchableHighlight
                                    onPress={() => alert('login')}
                                    underlayColor="#fff"
                                >
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: wp('40%'),
                                            height: hp('6%'),
                                            marginBottom: 20,
                                            borderRadius: 10,
                                            backgroundColor: '#4175BB',
                                            flexDirection: "row",
                                            marginLeft: 20
                                        }}
                                    >
                                        <Image source={require('../../assets/images/facebook.png')} style={{ height: 15, width: 8 }} />
                                        <Text style={{ color: "#fff", fontSize: hp('1.6%'), marginLeft: 10 }}>Facebook</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>

                            <TouchableOpacity
                                onPress={() => props?.navigation?.navigate('Register')}
                                style={{
                                    marginTop: 30,

                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    alignItems: "center",

                                }}
                            >
                                <Text style={{ color: "silver", fontSize: hp('1.6%'), }}>You don't Have an Account? <Text style={{
                                    color: '#F15F4C',
                                    marginHorizontal: 4,
                                    fontFamily: 'Helvetica',

                                }}>Sign Up</Text></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const mapStateToProps = ({ }) => ({

})
export default connect(mapStateToProps, {
    UserLogin
})(Login)

const styles = StyleSheet.create({
    main2: {
        height: hp('10%'),
        width: wp('80%'),
        alignSelf: 'center',
    },
})
