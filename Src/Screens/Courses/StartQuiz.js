import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import CustommButton from "../../Components/CustomButton";
import CourseHeader from './Components/CourseHeader';

const DATA = [
    { id: 1 },
    { id: 2 },
]
export default function StartQuiz(props) {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <CourseHeader navigation={props.navigation} subText={'Start your basic mathemati'} title='Math genuis' />
            <View>
                <FlatList
                    keyExtractor={(item, index) => index}
                    data={DATA}
                    renderItem={({ item, index }) => {
                        return (
                            <View key={index} style={{ backgroundColor: "#EAEAEA", margin: 20, marginHorizontal: 40, padding: 15, borderRadius: 20 }}>
                                <Text style={{ color: "#5789C4", fontSize: heightPercentageToDP('2%'), fontWeight: "bold" }}>Quiz {index + 1}</Text>
                                <Text style={{ color: "#5789C4", fontSize: heightPercentageToDP('2.5%'), fontWeight: "bold", marginVertical: 5, }}>Math Genuis!</Text>
                                <Text style={{ color: "grey", fontSize: heightPercentageToDP('1.6%') }}>Mathematics can be fun if you treat it the right way.
                                    Maths is nothing less than a game, a game that polishes your intelligence and boosts your concentration.
                                    Compared to older times, people have a better and
                                    friendly approach to mathematics which makes it more
                                    appealing. The golden rule is to know that maths is a
                                    mindful activity rather than a task.</Text>
                            </View>
                        )
                    }} />

                <View style={{
                    marginTop: 20
                }}>
                    <CustommButton
                        title="Start Quiz"
                        onPress={() => props?.navigation.navigate('SubmitAnswers')}
                    />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({})