import React, { useCallback, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import YoutubePlayer from "react-native-youtube-iframe";
import CourseHeader from "./Components/CourseHeader";

let CourseContent = [
    {
        name: 'Math Genuis!',
        videoUrl: 'iee2TATGMyI',
        content: " Mathematics can be fun if you treat it the right way. Maths is nothing less than a game, a game that polishe your intelligence and boosts your concentration. Compared to older times, people have a better and friendlyapproach to mathematics which makes it more appealing. The golden rule is to know that maths is a mindful activity rather than a task. There is nothing like hard math problems or tricky maths questions, it’s just that you haven’t exploremathematics well enough to comprehend its easinessand relatability. Maths tricky questions and answers can be transformed into fun math problems if you look at itas if it is a brainstorming session. With the right attitudeand friends and teachers, doing math can be mostentertaining and delightful. Math is interesting because a few equations and diagrams can communicate volumes of information. Treatmath as a language, while moving to rigorous proof andusing logical reason for performing a particular step in aproof or derivation."
    },
    {
        name: 'Math Genuis!',
        videoUrl: 'AjgD3CvWzS0',
        content: " Mathematics can be fun if you treat it the right way. Maths is nothing less than a game, a game that polishe your intelligence and boosts your concentration. Compared to older times, people have a better and friendlyapproach to mathematics which makes it more appealing. The golden rule is to know that maths is a mindful activity rather than a task. There is nothing like hard math problems or tricky maths questions, it’s just that you haven’t exploremathematics well enough to comprehend its easinessand relatability. Maths tricky questions and answers can be transformed into fun math problems if you look at itas if it is a brainstorming session. With the right attitudeand friends and teachers, doing math can be mostentertaining and delightful. Math is interesting because a few equations and diagrams can communicate volumes of information. Treatmath as a language, while moving to rigorous proof andusing logical reason for performing a particular step in aproof or derivation."
    },
    {
        name: 'Math Genuis!',
        videoUrl: '15afJNJxwyc',
        content: " Mathematics can be fun if you treat it the right way. Maths is nothing less than a game, a game that polishe your intelligence and boosts your concentration. Compared to older times, people have a better and friendlyapproach to mathematics which makes it more appealing. The golden rule is to know that maths is a mindful activity rather than a task. There is nothing like hard math problems or tricky maths questions, it’s just that you haven’t exploremathematics well enough to comprehend its easinessand relatability. Maths tricky questions and answers can be transformed into fun math problems if you look at itas if it is a brainstorming session. With the right attitudeand friends and teachers, doing math can be mostentertaining and delightful. Math is interesting because a few equations and diagrams can communicate volumes of information. Treatmath as a language, while moving to rigorous proof andusing logical reason for performing a particular step in aproof or derivation."
    },
    {
        name: 'Math Genuis!',
        videoUrl: 'iee2TATGMyI',
        content: " Mathematics can be fun if you treat it the right way. Maths is nothing less than a game, a game that polishe your intelligence and boosts your concentration. Compared to older times, people have a better and friendlyapproach to mathematics which makes it more appealing. The golden rule is to know that maths is a mindful activity rather than a task. There is nothing like hard math problems or tricky maths questions, it’s just that you haven’t exploremathematics well enough to comprehend its easinessand relatability. Maths tricky questions and answers can be transformed into fun math problems if you look at itas if it is a brainstorming session. With the right attitudeand friends and teachers, doing math can be mostentertaining and delightful. Math is interesting because a few equations and diagrams can communicate volumes of information. Treatmath as a language, while moving to rigorous proof andusing logical reason for performing a particular step in aproof or derivation."
    },
]

export default function LessonScreen(props) {
    const [currentContent, setCurrentContent] = useState(0)

    const onStateChange = useCallback((state) => {
        if (state === "ended") {

        }
    }, []);

    return (
        <View style={{ backgroundColor: "white", flex: 1 }}>
            <CourseHeader cross navigation={props.navigation} subText={'Start your basic mathemati'} title='Math genuis' />
            <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
                <View style={{ marginHorizontal: 40, marginBottom: 10 }}>
                    <Text style={{ color: "black", fontSize: hp('1.5%') }}>Video {currentContent + 1}</Text>
                    <Text style={{ color: "#447DC0", fontSize: hp('2.5%') }}>{CourseContent[currentContent].name}</Text>
                </View>
                <YoutubePlayer
                    height={200}
                    play={false}
                    videoId={CourseContent[currentContent].videoUrl}
                    onChangeState={onStateChange}
                />
                <View style={{ margin: 20, marginHorizontal: 30 }}>
                    <Text style={{ color: "black", fontSize: hp('1.8%'), textAlign: "justify" }}>
                        {CourseContent[currentContent].content}
                    </Text>
                </View>
            </ScrollView>
            <View style={{ backgroundColor: "#F0F1F1", padding: 20, paddingHorizontal: 20, alignItems: "center", position: 'absolute', left: 0, right: 0, bottom: hp('6.7%'), flexDirection: 'row', justifyContent: "space-between" }}>
                {currentContent > 0 && <TouchableOpacity style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#14B2B9", width: 40, height: 40, borderRadius: 50 }} onPress={() => setCurrentContent(currentContent - 1)}>
                    <MaterialIcons name="arrow-back-ios" color='white' size={25} style={{ marginLeft: 10 }} />
                </TouchableOpacity>}

                <View style={{ flexDirection: "row", alignItems: "center", backgroundColor: "#FAB815", width: "65%", height: 45, justifyContent: "center", borderRadius: 50 }}>
                    <View style={{ backgroundColor: "white", width: 20, height: 20, borderRadius: 50 }} />
                    <Text style={{ marginLeft: 10, color: "white", fontSize: hp('2.5%'), textAlign: "justify" }}>
                        Complete Lesson
                    </Text>
                </View>
                {CourseContent.length - 1 != currentContent && <TouchableOpacity onPress={() => setCurrentContent(currentContent + 1)} style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#14B2B9", width: 40, height: 40, borderRadius: 50 }} >
                    <MaterialIcons name="arrow-forward-ios" color='white' size={25} />
                </TouchableOpacity>}
            </View>
        </View>
    );
}