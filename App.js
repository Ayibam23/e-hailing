import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from './help/rest/Slider'

const App = () => {
  return (
    <View style={styles.container} >
      <Slider />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})