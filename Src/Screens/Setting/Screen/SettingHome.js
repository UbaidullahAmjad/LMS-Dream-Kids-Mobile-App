import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {LogOut} from '../../../Store/Actions/userAction'
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Header from '../../../Components/Header'
import { connect } from 'react-redux';


function SettingHome(props) {
  let AccountSetting = [
    {
      name: "Edit Profile",
      onPress: () => props.navigation.navigate('EditProfile')
    },
    {
      name: "Edit Parent Profile",
      onPress: () => props.navigation.navigate('EditParentProfile')
    },
    {
      name: "My Quizzes",
      onPress: () => props.navigation.navigate('EditProfile')
    },
    {
      name: "My Courses",
      onPress: () => props.navigation.navigate('MyCourses')
    },

  ]
  let Support = [
    {
      name: "About Dreamkids",
      onPress: () => props.navigation.navigate('AboutDreamKid')
    },
    {
      name: "Frequently asked questions",
      onPress: () => props.navigation.navigate('FAQs')
    }
  ]
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#fff'
    }}>
      <Header subText={'Setting'} right={false} />
      <View style={{
        flex: 1,
        margin: 20
      }}>
        <Text style={{ color: "#447DC0", fontWeight: "bold" }}>Account settings</Text>
        <View style={{
          borderBottomWidth: 2,
          borderColor: "#EAE7E6",
          paddingBottom: 24
        }}>
          {AccountSetting.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={item.onPress}
                key={index} style={{
                  flexDirection: 'row',
                  justifyContent: "space-between",
                  marginTop: index == 0 ? 8 : 12
                }}>
                <View style={{ justifyContent: "center" }}>
                  <Text style={{ color: "#8D8D8D", fontWeight: "bold" }}>{item.name}</Text>
                </View>

                <MaterialIcons name='keyboard-arrow-right' color={'#8D8D8D'} size={24} />
              </TouchableOpacity>
            )
          })}
        </View>
        <View style={{ marginTop: 24 }}>
          <Text style={{ color: "#447DC0", fontWeight: "bold" }}>Support</Text>
          {Support.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={item.onPress}
                key={index} style={{
                  flexDirection: 'row',
                  justifyContent: "space-between",
                  marginTop: index == 0 ? 8 : 12
                }}>
                <View style={{ justifyContent: "center" }}>
                  <Text style={{ color: "#8D8D8D", fontWeight: "bold" }}>{item.name}</Text>
                </View>

                <MaterialIcons name='keyboard-arrow-right' color={'#8D8D8D'} size={24} />
              </TouchableOpacity>
            )
          })}
        </View>

      </View>

      <TouchableOpacity
        onPress={() => props?.LogOut()}
        style={{
          alignItems: "center",
          marginBottom: 32
        }}>
        <Text style={{ color: "#447DC0", fontWeight: "bold", fontSize: hp('2.5%') }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const mapStateToProps = ({ }) => ({

})
export default connect(mapStateToProps, {
  LogOut

})(SettingHome)