import { View, Text , ScrollView } from 'react-native'
import React from 'react'
import Header from '../../../Components/Header'
import {
    heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';
export default function AboutDreamKid() {
    return (
        <View style={{
            flex: 1,
            backgroundColor: "#fff"
        }}>
            <Header subText="About dreamkids" />
            <ScrollView>
                <View style={{ margin: 20 }}>

                    <Text style={{
                        color: "#7F8183",
                        fontSize: hp('2.5%'),
                        textAlign: "justify"
                    }}>
                        Dreamkids is a unconventional, happy bilingual (English
                        & Chinese) preschool with a strong emphasis on building
                        the human spirit and values, as well as equipping the
                        essential future skills in our children.
                        We believe that education of our children starts with this
                        - values. It means that children should be taught how to
                        be useful human beings rst as learning is never complete with just the acquisition of knowledge. Learning is
                        completed when knowledge acquired is applied to add
                        value to either oneself or the community. In fact, unlike
                        skills such as literacy, this is the hardest to teach. As such,{'\n'}{'\n'}
                        Dreamkids places strong emphasis on character building
                        through our value-based education, especially for our
                        children from 18 months to 4 years old, using the VAK
                        (Visual-Auditory-Kinesthetic) approach. Through values,
                        we develop wisdom in our children, and this is the
                        advantage that our children will have in the world of
                        Articial Intelligence, where machines will become
                        smarter than human beings.{'\n'}{'\n'}
                        "It takes a village to raise a child." Using our proprietary
                        Dreamkids’ Fun Ecosystem, parents, grandparents and
                        teachers come together to learn and grow with your
                        child, transforming values into habits. The Dreamkids’
                        Fun Ecosystem is built based on our motto - “Happy
                        Teachers, Happy Children, Happy Parents”, where teachers, children and parents grow and learn together happily. We believe that with strong values coupled with success habits, our children are ready for learning and growing fast.
                    </Text>

                </View>
            </ScrollView>

        </View>
    )
}