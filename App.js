import React from 'react'
import { StyleSheet, LogBox , View } from 'react-native'
import MainNavigation from './Src/Navigation'
import Toast from 'react-native-toast-message';

LogBox.ignoreAllLogs()
export default function App() {
  return (
    <View style={{flex:1}}>
      <MainNavigation />
      <Toast />
    </View>

  )
}

const styles = StyleSheet.create({})