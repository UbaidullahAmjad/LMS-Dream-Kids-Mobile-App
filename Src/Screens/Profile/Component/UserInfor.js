import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import moment from 'moment';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import DateTimePickerModal from "react-native-modal-datetime-picker";


export default function UserInfor({ titleColor, valueColor, borderColor, info, border, disable, onChangeText, DOB }) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateindex , setdateIndex] = useState(null)

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        try {
            // console.warn("A date has been picked: ", date.toString());
            let previousvalue = [...info]
            previousvalue[dateindex].value = moment(date).format("YYYY-MM-DD")
            // console.log(moment(date).format("YYYY-MM-DD"))
            onChangeText(previousvalue)
            hideDatePicker();
        } catch (error) {
            console.log("error", error)

        }

    };
    const ChangeVariable = (text, index) => {
        let previousvalue = [...info]
        previousvalue[index].value = text
        onChangeText(previousvalue)
    }

    useEffect(() => {
    }, [info])

    return (

        <View style={{

            paddingLeft: 12,
            paddingBottom: 20,
            borderTopWidth: border == false ? 0 : 2,
            borderBottomWidth: border == false ? 0 : 2,
            borderColor: borderColor,
            flexWrap: "wrap",
            flexDirection: "row",
            width: "100%",


        }}>
            {info?.map((item, index) => {
                return (
                    <View key={index}
                        style={{
                            paddingTop: 12,
                            marginRight: index == 0 ? 0 : wp('4.2%'),
                            width: index == 0 ? "30%" : "auto",
                            maxWidth: "58%",
                        }}
                    >
                        <Text style={{ color: titleColor, fontSize: hp('1.4%'), paddingLeft: index == 0 ? 0 : 8, }}>{item.name}</Text>
                        {disable ? (
                            <View style={{ flexDirection: 'row', }}>

                                {item?.DateField ? (
                                    <TouchableOpacity 
                                    style={{  minWidth:"50%"}}
                                    onPress={() => {
                                        setDatePickerVisibility(true)
                                        setdateIndex(index)
                                        }}>
                                        <Text style={{
                                            color: valueColor,
                                            fontSize: hp('2%'),
                                            marginTop: 2,
                                            borderLeftWidth: index == 0 ? 0 : 1,
                                            borderColor: valueColor,
                                            paddingLeft: index == 0 ? 0 : 8,
                                        }}>{item.value}</Text>
                                    </TouchableOpacity>
                                ) :
                                    <>
                                        <View style={{
                                            alignSelf: "center", borderLeftWidth: index == 0 ? 0 : 1,
                                            borderColor: valueColor, width: 1, height: '60%'
                                        }} />
                                        <TextInput
                                            placeholder={item.value}
                                            value={item.value}
                                            multiline={true}
                                            placeholderTextColor="#fff"
                                            onChangeText={(text) => ChangeVariable(text, index)}
                                            style={{
                                                color: valueColor,
                                                fontSize: hp('2%'),
                                                minWidth: "35%",
                                                // borderLeftWidth: index == 0 ? 0 : 1,
                                                // borderColor: valueColor,
                                                paddingLeft: index == 0 ? 0 : 8,
                                                // height:hp('4%'),
                                                // backgroundColor:"red",

                                                paddingVertical: 0
                                            }}
                                        />
                                    </>

                                }

                            </View>
                        ) :
                            <Text style={{
                                color: valueColor,
                                fontSize: hp('2%'),
                                marginTop: 2,
                                borderLeftWidth: index == 0 ? 0 : 1,
                                borderColor: valueColor,
                                paddingLeft: index == 0 ? 0 : 8,
                            }}>{item.value}</Text>
                        }


                    </View>
                )
            })}

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

        </View>

    )
}

const styles = StyleSheet.create({
    mainInfo: {
        marginRight: 16,
        paddingTop: 12

    }
})