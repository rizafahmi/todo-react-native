import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export const TopBar = (props) => {
  return (
    <View style={styles.topbar}>
      <Text style={styles.topbarText}>TopBar</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    borderBottomWidth: 2,
    borderBottomColor: 'purple'
  },
  topbarText: {
    fontSize: 26,
    color: '#bada55'
  }
})
