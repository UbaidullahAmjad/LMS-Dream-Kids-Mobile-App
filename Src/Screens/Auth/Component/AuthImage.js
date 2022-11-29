import React from "react";
import {
    Image, StyleSheet
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export default function AuthImage() {
    return (
        <Image
            source={require("../../../assets/images/main2.png")}
            resizeMode="contain"
            style={styles.main2}
        />

    )
}
const styles = StyleSheet.create({
    main2: {
        height: hp('10%'),
        width: wp('80%'),
        alignSelf: 'center',
    },
})