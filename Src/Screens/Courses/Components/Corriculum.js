import React, { Component, useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Octicons from "react-native-vector-icons/Octicons";
import { connect } from 'react-redux';
import { CurriculumData } from '../../../Store/Actions/CourseAction';

const SECTIONS = [
  {
    title: 'Quiz 1',
    desp: 'Math Genuis!',
    content: [
      {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
      },
      {
        title: 'Lorem ipsum dolor sit amet,',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
      },
      {
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
      }
    ]
  },
  {
    title: 'Quiz 2',
    desp: 'Math Genuis!',
    content: [
      {
        title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
      },
      {
        title: 'Lorem ipsum dolor sit amet,',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
      },
      {
        title: 'Lorem ipsum dolor sit amet',
        content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.',
      }
    ]
  }
];

function Curriculum(props) {
  const [activeSections, setActiveSection] = React.useState()

  React.useEffect(() => {
    props?.CurriculumData()
  }, [])

  return (
    <View style={{ marginVertical: 20 }}>
      <FlatList
        data={SECTIONS}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text style={{ color: '#447DC0', fontSize: heightPercentageToDP('2%'), paddingHorizontal: 20, marginVertical: 5 }}>{item.title}</Text>
              <Text style={{ marginBottom: 10, color: '#447DC0', fontSize: heightPercentageToDP('2.5%'), paddingHorizontal: 20 }}>{item.desp}</Text>

              {item.content.map((item, index) => {
                return (
                  <TouchableOpacity onPress={() => props.navigation.navigate('TryQuiz')} key={index} style={{ paddingVertical: 15, backgroundColor: activeSections === `[${index}]` ? '#F4F5F6' : '#F4F5F6', flexDirection: 'row', padding: 10, alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                      {index == 0 ? <AntDesign name="playcircleo" color='silver' size={14} /> : index == 1 ?
                        <MaterialCommunityIcons name="note-text-outline" color='silver' size={14} /> : <Octicons name="checklist" color='silver' size={14} />
                      }
                      <Text numberOfLines={1} style={{ color: "black", marginLeft: 5, fontSize: heightPercentageToDP('1.5%') }}>{item.title}</Text>
                    </View>

                    {index > 0 ? <View style={{ flexDirection: 'row', alignItems: "center" }}>
                      <AntDesign name="clockcircleo" color='silver' size={12} />
                      <Text style={{ color: "silver", fontSize: heightPercentageToDP('1.4%') }}> 3 minutes</Text>
                    </View>
                      : null}
                  </TouchableOpacity>
                )
              })}
            </View>
          )
        }}
      />
    </View>
  );
}

const mapStateToProps = ({ Course, Shared }) => ({
  Course,
  Shared
})

export default connect(mapStateToProps, {
  CurriculumData
})(Curriculum)