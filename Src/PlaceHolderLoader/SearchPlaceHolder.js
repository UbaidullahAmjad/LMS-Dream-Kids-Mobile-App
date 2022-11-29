import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
const list = [1, 2, 3, 4, 6, 7, 8, 9]
export default function SearchPlaceHolder() {
    return (
        <FlatList
            data={list}
            contentContainerStyle={{ paddingBottom: 20 }}
            keyExtractor={(item, index) => index}
            renderItem={({ item, index }) => {
                return (

                    <View style={{
                        flexDirection: "row",
                        paddingVertical: 22, borderBottomColor: index == list.length - 1 ? 'none' : '#DDDEDE',
                        borderBottomWidth: index == list.length - 1 ? 0 : 2,
                        borderRadius: 10,
                        padding: 10,
                        marginHorizontal: 5
                    }}>
                        <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"   >
                            <View style={{
                                borderRadius: 10,
                                height: Dimensions.get('screen').height / 8,
                                width: Dimensions.get('screen').width / 3.4
                            }}>
                            </View>
                        </SkeletonPlaceholder>
                        <View>
                            <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"  >
                                <View style={{
                                    width: Dimensions.get('screen').width / 3,
                                    marginLeft: 20,
                                    height: hp('2%'),
                                    marginTop: 4
                                }}>
                                </View>
                            </SkeletonPlaceholder>
                            <SkeletonPlaceholder highlightColor="rgba(0,0,0,0.3)"  >
                                <View style={{
                                    width: Dimensions.get('screen').width / 2.5,
                                    marginLeft: 20,
                                    height: hp('8%'),
                                    marginTop: 6

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