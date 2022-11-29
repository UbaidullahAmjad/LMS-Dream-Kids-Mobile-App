import React from "react";
import { Image, Text, View } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import certificatBackground from '../../../assets/images/Certificate.png';
import certificateTxt from '../../../assets/images/certificatetxt.png';
import mainLogo from '../../../assets/images/Mainlogo.png';
import Header from "../../../Components/Header";

function CertficateMain() {
    return (
        <View style={{ backgroundColor: '#ffffff', flex: 1 }}>
            <Header right={false} subText="My certificate" />
            <View style={{ flex: 1 }}>
                <Image
                    style={{
                        width: wp('60%'),
                        height: hp('8%'),
                        marginTop: 30,
                        resizeMode: "stretch", alignSelf: 'center'
                    }}
                    source={mainLogo} />
                <Image
                    style={{
                        width: wp('80%'),
                        height: hp('10%'),
                        marginTop: 30,
                        resizeMode: "stretch", alignSelf: 'center'
                    }}
                    source={certificateTxt} />
                <Text style={{ color: 'black', alignSelf: 'center', marginTop: 40, fontFamily: 'AvenirLTStd-Roman' }}>
                    ThIS CERTIFICATE IS PROUDLY PRESENT TO
                </Text>
                <Text style={{ fontSize: 40, color: 'black', alignSelf: 'center', marginTop: 40, fontFamily: 'AvenirLTStd-Roman' }}>
                    John Malcom
                </Text>

                <Text style={{ margin: 30, color: 'black', alignSelf: 'center', marginTop: 40, fontFamily: 'Helvetica' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                </Text>
            </View>
            <Image
                style={{
                    width: wp('100%'),
                    height: hp('20%'),

                    resizeMode: "stretch",
                }}
                source={certificatBackground} />
        </View>
    )
}
export default CertficateMain;