import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const list = [1, 2, 3, 4, 6, 7, 8, 9]
export default function AllCoursesPlaceHolder() {
    return (
        <FlatList
            data={list}
            numColumns={2}
            contentContainerStyle={{ paddingBottom: 20 }}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => {
                return (

                    <View style={{
                        marginTop: 12,
                        borderRadius: 10,
                        width: Dimensions.get('screen').width / 2.4,
                        padding: 10,
                        marginHorizontal: 5,
                        backgroundColor: "white",
                        elevation: 5
                    }}>
                        <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"   >
                            <View style={{
                                borderRadius: 10,
                                height: Dimensions.get('screen').height / 8,
                                width: Dimensions.get('screen').width / 2.75
                            }}>
                            </View>
                        </SkeletonPlaceholder>
                        <View style={{ paddingVertical: 8 }}>
                            <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"  >
                                <View style={{
                                    width: '80%',
                                    height: hp('2%'),
                                }}>
                                </View>
                            </SkeletonPlaceholder>

                        </View>
                        <View style={{ marginTop:10 }}>
                            <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"  >
                                <View style={{
                                    width:'60%',
                                    height: hp('1%'),
                                }}>
                                </View>
                            </SkeletonPlaceholder>

                        </View>
                        <View style={{ marginTop:6 }}>
                            <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"  >
                                <View style={{
                                    width: '60%',
                                    height: hp('1%'),
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