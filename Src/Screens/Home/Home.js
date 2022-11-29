import React, { useEffect } from "react";
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, RefreshControl } from 'react-native';
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect } from "react-redux";
import { HOME_CARD, MATH_GENIOUS } from '../../Confiq/StaticImages';
import NewCoursesPlaceHolder from "../../PlaceHolderLoader/NewCoursesPlaceHolder";
import TopCoursesPlaceHolder from "../../PlaceHolderLoader/TopCoursesPlaceHolder";
import { HomeTopNewCourses } from '../../Store/Actions/CourseAction';
import HomeHeader from "./Component/HomeHeader";

function Home(props) {

    useEffect(() => {
        props.HomeTopNewCourses()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <HomeHeader />
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => props.HomeTopNewCourses()}
                    />
                }
                contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ alignItems: 'center', marginTop: 8 }}>
                    <Image source={HOME_CARD} style={{
                        width: wp('97%'),
                        height: hp('30%'),
                        resizeMode: "stretch"

                    }} />
                </View>
                <View>
                    <View style={{ paddingVertical: hp('2.5%'), paddingLeft: wp('8%') }}>
                        <Text style={{
                            color: '#434242',
                            fontSize: hp('2.8%'),

                        }}>Top Courses</Text>
                    </View>
                    {props?.Shared?.PageLoader ? (
                        <TopCoursesPlaceHolder />
                    ) :
                        <FlatList
                            data={props?.Course?.top_courses}
                            horizontal={true}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ width: 20 }} />
                                )
                            }}
                            ListFooterComponent={() => {
                                return (
                                    <View style={{ width: 20 }} />
                                )
                            }}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity onPress={() => props.navigation.navigate('CourseDetail', { item })}
                                        style={{
                                            paddingLeft: index == 0 ? wp('8%') : 0,
                                            height: hp('20%'),
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                        <Image
                                            // source={{ uri: item?.image1 }}
                                            source={MATH_GENIOUS}
                                            style={{
                                                width: wp('30%'),
                                                height: hp('16%'),
                                                resizeMode: "cover",
                                                borderRadius: 12
                                            }}
                                        />
                                        <View style={{ paddingVertical: 8 }}>
                                            <Text
                                                numberOfLines={1}
                                                style={{
                                                    color: '#434242',
                                                    fontSize: hp('2%'),
                                                    width: wp('25%'),
                                                }}>{item?.name}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                            keyExtractor={(item, index) => index}
                        />
                    }

                </View>
                <View style={{ marginTop: 16, marginBottom: hp('8%') }}>
                    <View style={{ paddingVertical: 12, paddingLeft: wp('8%') }}>
                        <Text style={{
                            color: '#434242',
                            fontSize: hp('2.8%'),

                        }}>New Courses</Text>
                    </View>
                    {props?.Shared?.PageLoader ? (
                        <NewCoursesPlaceHolder />
                    ) :
                        <FlatList
                            data={props?.Course?.New_Courses}
                            horizontal={true}
                            ListFooterComponent={() => {
                                return (
                                    <View style={{ width: 20 }} />
                                )
                            }}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ width: 20 }} />
                                )
                            }}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity onPress={() => props.navigation.navigate('CourseDetail', { item })}
                                        style={{
                                            marginLeft: index == 0 ? wp('8%') : 0,
                                            width: wp('60%'),
                                        }}>
                                        <Image
                                            source={MATH_GENIOUS}
                                            // source={{ uri: item?.image1 }}
                                            style={{
                                                width: wp('60%'),
                                                height: hp('16%'),
                                                resizeMode: "cover",
                                                borderRadius: 12
                                            }}
                                        />
                                        <View style={{ paddingVertical: 8, width: "90%" }}>
                                            <Text style={{
                                                color: '#434242',
                                                fontSize: hp('2%'),
                                                textAlign: "left"
                                            }}>Complete Math Calculation Lesson
                                                - Primary 1 to Primary 6  </Text>
                                            <Text style={{
                                                color: '#8D8D8D',
                                                fontSize: hp('2%'),
                                                textAlign: "left",
                                                marginTop: 6
                                            }}>Erich Andreas - Lecturer</Text>
                                            <View style={{ flexDirection: 'row', marginTop: 6 }}>
                                                {[1, 2, 3, 4, 5].map((item, index) => {
                                                    return (
                                                        <View key={index}>
                                                            <Entypo name="star" size={24} color={index == 4 ? '#434242' : "#FEC977"} />
                                                        </View>
                                                    )
                                                })}
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                            keyExtractor={(item, index) => index}
                        />
                    }

                </View>
                {/* <View style={{ marginBottom: hp('8%') }}>
                        <View style={{ paddingTop: hp('2.5%'), paddingLeft: wp('8%'), paddingBottom: 6 }}>
                            <Text style={{
                                color: '#434242',
                                fontSize: hp('2.8%'),

                            }}>Top Teacher</Text>
                        </View>
                        <FlatList
                            data={[1, 2, 3, 4, 5, 6, 7]}
                            horizontal={true}
                            ItemSeparatorComponent={() => {
                                return (
                                    <View style={{ width: 10 }} />
                                )
                            }}
                            ListFooterComponent={() => {
                                return (
                                    <View style={{ width: 20 }} />
                                )
                            }}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{
                                        paddingLeft: index == 0 ? wp('8%') : 0,

                                    }}>
                                        <Image
                                            source={TEACHER}
                                            style={{
                                                width: wp('20%'),
                                                height: hp('10%'),
                                                resizeMode: "cover",

                                                borderRadius: 12
                                            }}

                                        />
                                    </View>

                                )
                            }}
                            keyExtractor={(item, index) => index}
                        />
                    </View> */}
            </ScrollView>
        </View>
    )
}
const mapStateToProps = ({ Course, Shared }) => ({
    Course,
    Shared
})

export default connect(mapStateToProps, {
    HomeTopNewCourses
})(Home)