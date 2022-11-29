import React from 'react';
import { FlatList, View } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const list = [1, 2, 3, 4, 6, 7, 8, 9]
export default function NewCoursesPlaceHolder() {
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
                        marginLeft: index == 0 ? wp('8%') : 0,
                        width: wp('60%'),
                    }}>
                        <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"  >
                            <View style={{
                                width: wp('60%'),
                                height: hp('16%'),
                                borderRadius: 12
                            }}>
                            </View>
                        </SkeletonPlaceholder>
                        <View style={{ paddingVertical: 8 }}>
                            <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"  >
                                <View style={{
                                    width: wp('55%'),
                                    height: hp('2%'),
                                }}>
                                </View>
                            </SkeletonPlaceholder>

                        </View>
                        <View style={{ paddingVertical: 8 }}>
                            <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"  >
                                <View style={{
                                    width: wp('45%'),
                                    height: hp('2%'),
                                }}>
                                </View>
                            </SkeletonPlaceholder>

                        </View>
                        <View style={{ paddingVertical: 8 }}>
                            <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"  >
                                <View style={{
                                    width: wp('45%'),
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