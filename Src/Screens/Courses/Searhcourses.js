import React, { useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import Header from '../../Components/Header';
import { SearchCourses } from '../../Store/Actions/CourseAction';
import SearchPlaceHolder from '../../PlaceHolderLoader/SearchPlaceHolder';
import EmptyData from '../../Components/EmptyData';

const data =
  [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]

function SearchScreen(props) {

  const [searchText, setSearchText] = React.useState('')

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Header />
      <View style={{ paddingHorizontal: 20, flex: 1 }}>

        <View style={{ flexDirection: "row", marginHorizontal: 10, justifyContent: "space-between", marginVertical: 15 }}>
          <View style={{ width: "75%" }}>
            <View style={{ position: "absolute", right: 0, top: -1, zIndex: 1, backgroundColor: "#FAB815", borderRadius: 50 }}>
              <Image style={{ tintColor: "white", height: 20, width: 20, margin: 10 }} source={require('../../assets/images/Search.png')} />
            </View>
            <TextInput
              placeholder='Search Courses Here'
              placeholderTextColor={'black'}
              value={searchText}
              onChangeText={async (txt) => {
                setSearchText(txt)
                props?.SearchCourses(txt)
              }}
              style={{ height: 38, width: "100%", color: "black", paddingLeft: 20, backgroundColor: "white", elevation: 7, borderRadius: 30, fontSize: heightPercentageToDP('1.5%') }} />
          </View>
          <Image style={{ height: 35, width: 35 }} source={require('../../assets/images/filter.png')} />
        </View>

        <View style={{ flex: 1, marginBottom: "10%" }}>
          {props?.Shared?.PageLoader ? (
            <SearchPlaceHolder />
          ) :
            <FlatList
              keyExtractor={item => item.id}
              data={props?.Course?.searchArray}
              contentContainerStyle={{ paddingBottom: 20 }}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    onPress={() => props?.navigation.navigate('CoursesNavigation', {
                      screen: 'CourseDetail'
                    })}
                    key={index} style={{ flexDirection: "row", paddingVertical: 22, borderBottomColor: index == data.length - 1 ? 'none' : '#DDDEDE', borderBottomWidth: index == data.length - 1 ? 0 : 2, borderRadius: 10, padding: 10, marginHorizontal: 5 }}>
                    <Image source={require('../../assets/images/hf.jpg')} style={{ resizeMode: 'cover', borderRadius: 10, height: Dimensions.get('screen').height / 8, width: Dimensions.get('screen').width / 3.4 }} />
                    <View style={{ width: Dimensions.get('screen').width / 2, marginLeft: 20, }}>
                      <Text style={{ color: "#717070", fontSize: heightPercentageToDP('2%'), fontWeight: 'bold' }}>Math Genius!</Text>
                      <Text style={{ marginVertical: 5, color: "#A3A5A6", fontSize: heightPercentageToDP('1.3%') }}>Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat.</Text>
                    </View>
                  </TouchableOpacity>
                )
              }}
              ListEmptyComponent={() => {
                return (
                  <View style={{flex:1 , height:heightPercentageToDP('65%')}}>
                    <EmptyData title="No Search Result Found" />
                  </View>
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
  SearchCourses
})(SearchScreen)