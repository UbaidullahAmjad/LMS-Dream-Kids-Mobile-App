import { StyleSheet, View, ImageBackground, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { heightPercentageToDP } from 'react-native-responsive-screen'
import RatingStars from '../../Components/RatingStars'
import TopTabBar from './Components/TopTabBar'
import { CoursesDetail } from '../../Store/Actions/CourseAction'
import { connect } from 'react-redux'

function CourseDetail(props) {


    useEffect(() => {
        props?.CoursesDetail(props?.route?.params?.item?.id)
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ImageBackground source={require('../../assets/images/hfM.jpg')} style={{ height: Dimensions.get('screen').height / 4 }} >
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()}
                        style={{ margin: 20, flexDirection: "row", alignItems: "center" }}>
                        <MaterialIcons name="arrow-back-ios" color='white' size={25} />
                        <Text style={{ marginLeft: 5 }}>Mathematic Primary 1</Text>
                    </TouchableOpacity>

                    <View style={{ margin: 20 }}>
                        <Text style={{ fontSize: heightPercentageToDP('3%') }}>{props?.Course?.CoursesDetail['name']}</Text>
                        <RatingStars value={props?.Course?.CoursesDetail['total_ratings']} />

                        <View style={{
                            width: Dimensions.get('screen').width / 1.1,
                            borderRadius: 10,
                            backgroundColor: '#FFFFFF',
                            height: 5,
                            marginTop: 10
                        }}>
                            <View style={{
                                width: Dimensions.get('screen').width / 2,
                                borderRadius: 10,
                                backgroundColor: '#FEC30F',
                                height: 6,
                                marginTop: -0.5
                            }} />
                        </View>
                    </View>
                </View>
            </ImageBackground>

            {/************** Tab Bar Component ***************/}
            <TopTabBar />
        </View>
    )
}


const mapStateToProps = ({ Course }) => ({
    Course
})

export default connect(mapStateToProps, {
    CoursesDetail
})(CourseDetail)