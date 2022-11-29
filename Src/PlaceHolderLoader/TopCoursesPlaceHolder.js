import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
const list = [1, 2, 3, 4, 6, 7, 8, 9]
export default function TopCoursesPlaceHolder() {
    return (
        <FlatList
            data={list}
            horizontal
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={() => {
                return (
                    <View style={{ width: 20 }} />
                )
            }}
            renderItem={({ item, index }) => {

                return (

                    <View style={{
                        paddingLeft: index == 0 ? wp('8%') : 0,
                        height: hp('20%'),
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#fff"


                    }}>
                        <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"  >
                            <View style={{
                                width: wp('30%'),
                                height: hp('16%'),
                                borderRadius: 12
                            }}>
                            </View>
                        </SkeletonPlaceholder>
                        <View style={{ paddingVertical: 8 }}>
                            <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"  >
                                <View style={{
                                    width: wp('27%'),
                                    height: hp('2%'),
                                }}>
                                </View>
                            </SkeletonPlaceholder>

                        </View>


                    </View>

                )
            }}
        />
    )
}