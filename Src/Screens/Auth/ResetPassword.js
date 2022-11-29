import React from "react";
import {
    Image, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity
} from "react-native";
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import AuthImage from "./Component/AuthImage";
import CustomTextInput from "./Component/CustomTextInput";
import CustommButton from "../../Components/CustomButton";

export default function ResetPassword() {
    return (
        <KeyboardAvoidingView
            style={{ backgroundColor: '#fff' }}
            behavior="height">

            <ScrollView
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={{ height: hp('100%'), paddingBottom: 50 }} >
                <View style={{ flex: 1 }}>
                    <Image
                        style={{
                            height: '100%',
                            width: wp('100%'),
                        }}
                        source={require('../../assets/images/Signup.png')} />
                </View>
                <View style={styles.body}>
                    <AuthImage />
                    <Text style={{
                        color: '#467EC1',
                        fontSize: hp('3%'),
                        marginTop: 10,
                        fontFamily: 'AvenirLTStd-Roman',
                        textAlign: "center"
                    }}>
                        Reset Password
                    </Text>
                    <Text style={{
                        color: '#000',
                        fontSize: hp('1.9%'),
                        textAlign: 'center',
                        marginTop: 6
                    }}>
                        Enter your username or email to reset your password.
                        You will receive an email with instructions on how to
                        reset your password. If you are experiencing
                        problems resetting your password contact us or send us
                        an email

                    </Text>
                    <View style={styles.Space}>
                        <CustomTextInput
                            placeHolder="User Name"
                        />
                    </View>
                    <View style={{marginTop:24}}>
                        <CustommButton
                            title="Reset"
                        />
                    </View>
                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginTop:9,
                    }}>
                        <TouchableOpacity>
                            <Text style={{
                                color: "red"
                            }}>Log in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{
                                color: "red"
                            }}>Not a Student ? Sign Up</Text>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>

        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    body: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        marginTop: -24,
        padding: 20
    },
    Space: {
        marginTop: 18
    }

})