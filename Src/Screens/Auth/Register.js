import React, { useState } from "react";
import {
    Image, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView
} from "react-native";
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import AuthImage from "./Component/AuthImage";
import CustomTextInput from "./Component/CustomTextInput";
import CustommButton from "../../Components/CustomButton";
import { connect } from 'react-redux';
import { UserRegister } from '../../Store/Actions/userAction'

function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const registerUser = () => {
        if (name == '' && email == '' && phone == '' && userName == '' && password == '') {
            alert('Enter Required Fields')
        }
        else {
            props?.UserRegister(name, email, phone, userName, password)
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ backgroundColor: '#fff' }}
            behavior="height">
            <ScrollView
                keyboardShouldPersistTaps='handled'
                contentContainerStyle={{ height: hp('100%'), }} >
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
                        color: '#000',
                        fontSize: hp('1.9%'),
                        textAlign: 'center',
                        marginTop: 6
                    }}>
                        Strong emphasis on raising future-ready children whodare to dream and create the change they want to see in the world.
                    </Text>
                    <View style={styles.Space}>
                        <CustomTextInput
                            placeHolder="First Name"
                            value={name}
                            onpress={(txt) => setName(txt)}
                        />
                    </View>
                    <View style={styles.Space}>
                        <CustomTextInput
                            placeHolder="Last Name"
                            value={userName}
                            onpress={(txt) => setUserName(txt)}
                        />
                    </View>
                    <View style={styles.Space}>
                        <CustomTextInput
                            placeHolder="Email Address"
                            value={email}
                            onpress={(txt) => setEmail(txt)}
                        />
                    </View>
                    <View style={styles.Space}>
                        <CustomTextInput
                            placeHolder="Phone Number"
                            value={phone}
                            onpress={(txt) => setPhone(txt)}
                            phone
                        />
                    </View>
                    <View style={styles.Space}>
                        <CustomTextInput
                            placeHolder="Password"
                            secureTextEntry={true}
                            value={password}
                            onpress={(txt) => setPassword(txt)}
                        />
                    </View>
                    <View style={styles.Space}>
                        <CustommButton
                            title="Register"
                            onPress={() => registerUser()}
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const mapStateToProps = ({ }) => ({

})
export default connect(mapStateToProps, {
    UserRegister
})(Register)

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