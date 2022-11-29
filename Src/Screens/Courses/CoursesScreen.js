import React, { useEffect } from 'react';
import { Dimensions, FlatList, Image, Text, TouchableOpacity, View, RefreshControl } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import DropDownCompnent from '../../Components/DropDownCompnent';
import Header from '../../Components/Header';
import { AllCourses } from '../../Store/Actions/CourseAction';
import AllCoursesPlaceHolder from '../../PlaceHolderLoader/AllCoursesPlaceHolder';

function CoursesScreen(props) {

    useEffect(() => {
        props.AllCourses()
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header />
            <View style={{ paddingHorizontal: 20, flex: 1 }}>
                <Text style={{ color: 'black', fontSize: heightPercentageToDP('2%') }}>All Courses</Text>

                <View style={{ flexDirection: "row" }}>
                    <DropDownCompnent mainTitle='Categories' />
                    <DropDownCompnent mainTitle='Popular' />
                    <DropDownCompnent mainTitle='Sort By' />
                </View>

                <View style={{ flex: 1, marginBottom: 40 }}>
                    {props?.Shared?.PageLoader ? (
                        <AllCoursesPlaceHolder />
                    ) :
                        <FlatList
                            refreshControl={
                                <RefreshControl
                                    refreshing={false}
                                    onRefresh={() => props.AllCourses()}
                                />
                            }
                            keyExtractor={item => item.id}
                            data={props?.Course?.all_Courses}
                            numColumns={2}
                            contentContainerStyle={{ paddingBottom: 20 }}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => props.navigation.navigate('CourseDetail', { item })}
                                        key={index} style={{ marginTop: 12, borderRadius: 10, width: Dimensions.get('screen').width / 2.4, padding: 10, marginHorizontal: 5, backgroundColor: "white", elevation: 5 }}>
                                        <Image source={require('../../assets/images/hf.jpg')} style={{ resizeMode: 'cover', borderRadius: 10, height: Dimensions.get('screen').height / 8, width: Dimensions.get('screen').width / 2.75 }} />
                                        <Text style={{ color: "black", fontSize: heightPercentageToDP('2.5%'), marginVertical: 10, }}>Math Genuis! 2021</Text>
                                        <Text style={{ color: "grey", fontSize: heightPercentageToDP('1%') }}>Erich Andreas - Lecturer</Text>
                                        <Image source={require('../../assets/images/8c.png')} style={{ height: Dimensions.get('screen').height / 50, width: Dimensions.get('screen').width / 8 }} />
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    }

                </View>
            </View>
        </View>
    )
}

const mapStateToProps = ({ Course, Shared }) => ({
    Course,
    Shared
})

export default connect(mapStateToProps, {
    AllCourses
})(CoursesScreen)