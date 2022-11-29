import React from 'react';
import { StyleSheet, Modal, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import ResetPassword from '../Screens/Auth/ResetPassword';
import BottomTab from './BottomTab';
import { connect } from 'react-redux';

const Stack = createNativeStackNavigator()

function MainNavigation(props) {
  console.log("@@@", props?.Shared.PageLoader)
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerShown: false
          }}
        >
          {props?.user?.userData == null ? (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
              <Stack.Screen name="ResetPassword" component={ResetPassword} />
            </>
          ) :
            <Stack.Screen name="BottomTab" component={BottomTab} />
          }
        </Stack.Navigator>
      </NavigationContainer>
      {/* <Modal
        transparent={true}
        visible={props?.Shared.PageLoader}
      >
        <View style={{ backgroundColor: "rgba(0,0,0,0.4)", flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size={'large'} color="#FAB815" />

        </View>
      </Modal> */}
    </View>
  )
}

const styles = StyleSheet.create({})

const mapStateToProps = ({ user, Shared }) => ({
  user,
  Shared
})
export default connect(mapStateToProps, {

})(MainNavigation)
