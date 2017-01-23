import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

const Todo = () => {
  return (
    <View style={styles.container}>
      <TextInput />
      <TouchableHighlight>
        <Text>
          Save Todo
        </Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default Todo
