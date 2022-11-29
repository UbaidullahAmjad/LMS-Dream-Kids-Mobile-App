import React from "react";
import { Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';

function CustommButton(props) {
    return (
        <TouchableOpacity
            onPress={props?.onPress}
        >
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                    width: wp('90%'),
                    height: hp('6%'),
                    borderRadius: 30,
                    backgroundColor: '#FAB815',
                }}
            >
                {props?.Shared?.Loader ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) :
                    <Text style={{ color: "#000", fontSize: hp('2%') }}>{props?.title}</Text>
                }
            </View>
        </TouchableOpacity>

    )
}
const mapStateToProps = ({ Shared }) => ({
    Shared
})
export default connect(mapStateToProps, {


})(CustommButton)