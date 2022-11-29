import React, { useCallback } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';

export default function TryQuiz(props) {

    const onStateChange = useCallback((state) => {
        if (state === "ended") {

        }
    }, []);
    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <YoutubePlayer
                height={200}
                play={false}
                videoId={"iee2TATGMyI"}
                onChangeState={onStateChange}
            />
            <View style={{ margin: 20 }}>
                <Text style={{ color: "black", fontSize: hp('1.8%'), textAlign: "justify" }}>
                    Mathematics can be fun if you treat it the right way.
                    Maths is nothing less than a game, a game that polishes
                    your intelligence and boosts your concentration. Compared to older times, people have a better and friendly
                    approach to mathematics which makes it more appealing. The golden rule is to know that maths is a mindful
                    activity rather than a task.

                    There is nothing like hard math problems or tricky
                    maths questions, it’s just that you haven’t explored
                    mathematics well enough to comprehend its easiness
                    and relatability. Maths tricky questions and answers can
                    be transformed into fun math problems if you look at it
                    as if it is a brainstorming session. With the right attitude
                    and friends and teachers, doing math can be most
                    entertaining and delightful.

                    Math is interesting because a few equations and diagrams can communicate volumes of information. Treat
                    math as a language, while moving to rigorous proof and
                    using logical reason for performing a particular step in a
                    proof or derivation.
                </Text>
                <TouchableHighlight
                    onPress={() => props.navigation.navigate('StartQuiz')}
                    underlayColor="#fff"
                >
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: wp('45%'),
                            height: hp('6%'),
                            borderRadius: 30,
                            backgroundColor: '#FAB815',
                        }}
                    >
                        {/* {shared.btnLoader ? (
                <ActivityIndicator size="small" color="#fff" />
            ) : */}
                        <Text style={{ color: "grey", fontSize: hp('2%') }}>Try Quiz</Text>
                        {/* } */}
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
}