import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import YoutubePlayer from "react-native-youtube-iframe";
import RatingStars from "../../../Components/RatingStars";
import CustommButton from "../../../Components/CustomButton";
import { connect } from 'react-redux'

function OverView(props) {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    console.log("Overview: ", props?.Course?.CoursesDetail?.course_review)
  }, [])

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 60 }}>

      <View style={{ marginHorizontal: 20, marginTop: 20 }}>
        <Text style={{ color: "black", fontSize: heightPercentageToDP('2%') }}>MATH GENIUS!</Text>
        <Text style={{ color: "black", fontSize: heightPercentageToDP('1.5%'), marginVertical: 5 }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
          sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim</Text>

        <View style={{ borderColor: "silver", borderWidth: 0.5, marginTop: 20 }} />

        <View style={{ marginVertical: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image resizeMode='contain' source={require('../../../assets/images/Person.png')} style={{ height: 50, width: 50 }} />
            <View>
              <Text style={{ color: "black", marginVertical: 2 }}>Miss.Yvonne</Text>
              <Text style={{ color: "grey", fontSize: heightPercentageToDP('1.2%') }}>44 Reviews</Text>
              <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 5 }}>
                <View style={{ backgroundColor: "#447DC0", borderRadius: 50, paddingVertical: 5, width: 60 }}>
                  <RatingStars overview />
                </View>
                <Text style={{ color: "grey", fontSize: heightPercentageToDP('1.5%') }}> Rating</Text>
              </View>
            </View>
          </View>
          <Text style={{ color: "black", fontSize: heightPercentageToDP('1.5%'), marginVertical: 5 }}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
            tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
            praesent luptatum zzril delenit augue duis dolore te feugait nulla
            facilis</Text>

          {showMore ? <Text style={{ color: "black", fontSize: heightPercentageToDP('1.5%'), marginVertical: 5 }}>{'Lorem ipsum dolor sit amet, consectetuer adipiscing elit  Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquamerat volutpat. Ut wisi'} </Text> : null}

          {showMore ?
            <TouchableOpacity onPress={() => setShowMore(false)}>
              <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: heightPercentageToDP("1.5%"), color: "black", textAlign: "center" }}>show less
              </Text>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => setShowMore(true)}>
              <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: heightPercentageToDP("1.5%"), color: "black", textAlign: "center" }}>
                show more
              </Text>
            </TouchableOpacity>
          }
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image resizeMode='contain' source={require('../../../assets/images/Person.png')} style={{ height: 12, width: 12 }} />
            <Text style={{ color: "black", fontSize: heightPercentageToDP('1.5%'), textTransform: 'uppercase' }}>{' '}Enroll</Text>
          </View>
          <Text style={{ color: "black", fontSize: heightPercentageToDP('1.5%'), fontWeight: "bold" }}>185 Students</Text>
        </View>
        <View style={{
          marginTop: 10
        }}>
          <CustommButton
            onPress={() => props?.navigation.navigate('LessonScreen')}
            title="START"
          />
        </View>
      </View>

    </ScrollView>
  );
}


const mapStateToProps = ({ Course }) => ({
  Course
})


export default connect(mapStateToProps, {

})(OverView)