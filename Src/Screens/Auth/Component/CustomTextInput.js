import React from "react";
import { StyleSheet, TextInput } from "react-native";
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';


export default function CustomTextInput({ placeHolder, secureTextEntry, value, onpress, phone }) {
    console.log(placeHolder)
    return (
        <TextInput
            placeholder={placeHolder}
            placeholderTextColor='black'
            style={styles.Container}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={onpress}
            keyboardType={phone ? 'number-pad' : 'default'}
        />

    )
}
const styles = StyleSheet.create({
    Container: {
        borderColor: '#949494',
        borderWidth: 1,
        borderRadius: 30,
        height: hp('7%'),
        padding: 5,
        paddingLeft: 24,
        backgroundColor: '#F9F3E8',
        color: "black"
    },
})