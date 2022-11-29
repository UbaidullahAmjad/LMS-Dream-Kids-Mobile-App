import { View, Text } from 'react-native'
import React from 'react'
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';

export default function EmptyData(props) {
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems:"center" }}>
            <Text style={{fontSize:hp('3%') , color:'#000', fontWeight:'bold'}}>{props?.title}</Text>
        </View>
    )
}