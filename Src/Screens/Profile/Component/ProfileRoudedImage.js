import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

function ProfileRoudedImage(props) {
  const {
    first_name,
    last_name,
    image1,
    email,
  } = props?.user?.userData?.user_data

  return (
    <View>
      <View style={{
        overflow: "visible",
        alignItems: "center"
      }}>
        <View>
          {image1 ? (
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "cover",
                borderWidth: 2,
                borderColor: "#457DC0",
                borderRadius: 100

              }}
              source={{ uri: image1 }} />
          ) :
            <View style={{
              width: 100,
              height: 100,
              borderWidth: 2,
              borderColor: "#457DC0",
              borderRadius: 100,
              justifyContent:"center",
              alignItems:"center"
            }}>
              <FontAwesome name='user' size={50} color='#DFA02E' />
            </View>
          }

          {props?.edit && (
            <TouchableOpacity style={{
              width: 30,
              height: 30,
              borderWidth: 2,
              borderColor: "#DFA02E",
              borderRadius: 100,
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "#fff",
              justifyContent: "center",
              alignItems: "center"

            }}>
              <Ionicons name='camera-outline' color='#434242' size={20} />

            </TouchableOpacity>
          )}

        </View>

        <Text style={{ fontWeight: "bold", fontSize: hp('2%'), color: '#434242', marginTop: 6 }}>{first_name + " " + last_name}</Text>
        <Text style={{ color: '#434242' }}>{email}</Text>
      </View>
    </View>

  )
}
const mapStateToProps = ({ user }) => ({
  user
})
export default connect(mapStateToProps, {
})(ProfileRoudedImage)