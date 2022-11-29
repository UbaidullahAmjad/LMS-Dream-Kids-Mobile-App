import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Header from '../../Components/Header'
import Fontisto from 'react-native-vector-icons/Fontisto'
import {
  heightPercentageToDP as hp, widthPercentageToDP as wp
} from 'react-native-responsive-screen';

let notification = [
  {
    data: '21 / 04 / 2021',
    text: "You have one purchase on 21 april 2021",
    readed: false
  },
  {
    data: '21 / 04 / 2021',
    text: "You have one purchase on 21 april 2021",
    readed: true
  },
  {
    data: '21 / 04 / 2021',
    text: "You have one purchase on 21 april 2021",
    readed: true
  },
  {
    data: '21 / 04 / 2021',
    text: "You have one purchase on 21 april 2021",
    readed: true
  },
  {
    data: '21 / 04 / 2021',
    text: "You have one purchase on 21 april 2021",
    readed: true
  },

]
export default function Notification() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff'
    }}>
      <Header right={false} subText="Notification" />
      <View style={{
        margin: 20
      }}>
        <FlatList
          data={notification}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => {
            return (
              <View style={{
                width: '100%',
                height: 1,
                backgroundColor: "#8D8D8D"
              }} />
            )
          }}
          ListFooterComponent={() => {
            return (
              <View style={{
                width: '100%',
                height: 1,
                backgroundColor: "#8D8D8D"
              }} />
            )
          }}
          renderItem={({ item, index }) => {

            return (
              <View style={{ flexDirection: "row", marginTop: index == 0 ? 0 : 12, paddingBottom: 12 }}>
                <View style={{
                  justifyContent: "center"
                }}>
                  <Fontisto name='bell' size={32} color={item.readed ? '#7F8183' : '#FAB815'} />
                </View>
                <View style={{ marginLeft: 12 }}>
                  <Text style={{ color: "#000", fontSize: hp('2%') }}>{item.data}</Text>
                  <Text style={{ color: "#8D8D8D", fontSize: hp('2%'), fontWeight: "bold" }}>{item.text}</Text>
                </View>
              </View>
            )
          }}
        />
      </View>
    </View>
  )
}