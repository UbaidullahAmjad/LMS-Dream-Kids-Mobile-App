import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import CustommButton from "../../Components/CustomButton";
import CourseHeader from './Components/CourseHeader';
import CheckBox from 'react-native-check-box'

export default function MCQs(props) {
    const [isCheckedValue, setIsChecked] = React.useState([
        {
            id: 1,
            que: 'Here are some fun, tricky and hard to solve maths problems that will challenge your thinking ability',
            mcqs: [
                { opt: '1+1 =4', selected: false },
                { opt: '2+2 =4', selected: false },
                { opt: '3+2 =4', selected: false },
                { opt: '4+1 =4', selected: false },
            ],
        },
        {
            id: 2,
            que: 'Here are some fun, tricky and hard to solve maths problems that will challenge your thinking ability',
            mcqs: [
                { opt: '1+1 =4', selected: false },
                { opt: '2+2 =4', selected: false },
                { opt: '3+2 =4', selected: false },
                { opt: '4+1 =4', selected: false },
            ],
        },
    ])
    return (
        <ScrollView horizontal={false} >
            <ScrollView horizontal={true} nestedScrollEnabled={true}>
                <View style={{ flex: 1, backgroundColor: "white", marginBottom: "15%" }}>
                    <CourseHeader cross navigation={props.navigation} subText={'Start your basic mathemati'} title='Math genuis' />
                    <View style={{ height: heightPercentageToDP('90%'), width: widthPercentageToDP('100%') }}>
                        <FlatList
                            keyExtractor={(item, index) => index}
                            data={isCheckedValue}
                            renderItem={({ item, index }) => {
                                return (
                                    <View key={index} style={{ margin: 10, marginTop: 0, marginHorizontal: 20, padding: 15, borderRadius: 20 }}>
                                        <Text style={{ color: "#7C7B7B", fontSize: heightPercentageToDP('2%'), fontWeight: "bold" }}>Question {index + 1}</Text>
                                        <Text style={{ color: "#000", fontSize: heightPercentageToDP('2.3%'), marginVertical: 5 }}>{item.que} </Text>
                                        {item.mcqs.map((item, key) => {
                                            return (
                                                <View key={key} style={{
                                                    borderRadius: 15,
                                                    flexDirection: "row",
                                                    marginTop: 5,
                                                    alignItems: "center",
                                                    backgroundColor: "#67BF6B"
                                                }}>
                                                    <CheckBox
                                                        checkBoxColor={'white'}
                                                        checkedCheckBoxColor={'white'}
                                                        style={{ borderRadius: 50, padding: 8, }}
                                                        onClick={() => {
                                                            let spread = [...isCheckedValue]
                                                            for (let i = 0; i < 4; i++) {
                                                                if (key != i) {
                                                                    spread[index].mcqs[i].selected = false
                                                                }
                                                            }
                                                            spread[index].mcqs[key].selected = !spread[index].mcqs[key].selected
                                                            setIsChecked(spread)
                                                        }}
                                                        isChecked={item.selected != false ? true : false}
                                                    />
                                                    <Text style={{ color: "white" }}>{item.opt}</Text>
                                                </View>
                                            )
                                        })}
                                    </View>
                                )
                            }} />

                        <View style={{ bottom: 10 }}>
                            <CustommButton
                                title="Submit your answer"
                                onPress={() => props?.navigation.navigate('Pass')}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ScrollView>

    )
}

const styles = StyleSheet.create({})