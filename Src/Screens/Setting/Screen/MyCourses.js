import React, { useEffect } from 'react';
import { Dimensions, FlatList, Image, Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Header from '../../../Components/Header';
import { MATH_GENIOUS } from '../../../Confiq/StaticImages';
import { MyCoursesftn } from '../../../Store/Actions/SettingAction';
import { connect } from 'react-redux';
import RenderHtml,  { HTMLElementModel, HTMLContentModel } from 'react-native-render-html';

const data =
    [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]
function MyCourses(props) {
    console.log("My courses")
    console.log(props?.Setting?.MyCourses)
    useEffect(() => {
        props?.MyCoursesftn()
    }, [])
    const { width } = useWindowDimensions();
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#F9FAFA"
        }}>
            <Header subText={'My courses'} />
            <View style={{ flex: 1, margin: 20 }}>
                <FlatList
                    keyExtractor={(item, index) => index}
                    data={props?.Setting?.MyCourses}
                    contentContainerStyle={{}}
                    renderItem={({ item, index }) => {

                        var source = ``
                        if (item?.course_description.length > 0) {

                            var source = {
                                html: `${item?.course_description[0].description.substring(1, 200)}`
                            };
                        }
                        const customHTMLElementModels = {
                            'p': HTMLElementModel.fromCustomModel({
                                tagName: 'p',
                                mixedUAStyles: {
                                   color:"gray",
                                  overflow:"hidden",
                                  
                                   
                                },
                                contentModel: HTMLContentModel.block
                            }),
                            'div': HTMLElementModel.fromCustomModel({
                                tagName: 'div',
                                mixedUAStyles: {
                                //  height:10
                                   
                                },
                                contentModel: HTMLContentModel.block
                            })
                        };
                        return (
                            <View key={index} style={{
                                flexDirection: "row",
                                paddingBottom: 22,
                                paddingTop: index == 0 ? 0 : 22,
                                borderBottomColor: index == data.length - 1 ? 'none' : '#DDDEDE',
                                borderBottomWidth: index == data.length - 1 ? 0 : 2, borderRadius: 10,
                            }}>
                                <Image source={MATH_GENIOUS} style={{ resizeMode: 'cover', borderRadius: 10, height: Dimensions.get('screen').height / 8, width: Dimensions.get('screen').width / 3.4 }} />
                                <View style={{ width: Dimensions.get('screen').width / 2, marginLeft: 20, }}>
                                    <Text style={{ color: "#717070", fontSize: heightPercentageToDP('2%'), fontWeight: 'bold' }}>{item?.name}</Text>
                                    {item?.course_description?.length > 0 ? (
                                        <View style={{  }}>
                                            <RenderHtml
                                                enableExperimentalMarginCollapsing={true}
                                                contentWidth={width}
                                                source={source}
                                                customHTMLElementModels={customHTMLElementModels}
                                                tagsStyles={{
                                                    div:{
                                                        height:25
                                                    }
                                                }}
                                            />
                                        </View>
                                        // <Text style={{ marginVertical: 5, color: "#A3A5A6", fontSize: heightPercentageToDP('1.3%') }}>{item?.course_description[0].description}</Text>
                                    ) : null}

                                    <TouchableOpacity style={{
                                        backgroundColor: "#F0595B",
                                        justifyContent: "center",
                                        alignItems: "center",

                                        paddingVertical: 4,
                                        borderRadius: 12,
                                        width: "30%",
                                        marginTop: 12
                                    }}>
                                        <Text style={{ color: '#fff', fontSize: heightPercentageToDP('1.2%') }}>Learn Now</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}
const mapStateToProps = ({ Setting }) => ({
    Setting
})
export default connect(mapStateToProps, {
    MyCoursesftn
})(MyCourses)