/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  View,
  Navigator,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import store  from './src/store.js'
import TabView from 'react-native-scrollable-tab-view'

import HNews from './src/components/HNews.js'
import Todo from './src/components/Todo.js'
import { TopBar } from './src/components/TopBar.js'

export default class TodoNative extends React.Component {
  constructor (props) {
    super(props)
  }
  static navigationOptions = {
    title: 'Welcome'
  }
  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
      <Text>Welcome, Navigation!</Text>
      <TouchableOpacity
        onPress={() => navigate('Chat', {user: 'Sarah'})}
        title="Chat with Sarah"
      >
        <Text>Chat with Sarah</Text>
      </TouchableOpacity>
    </View>
    )
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: ({ state }) => `Chat with ${state.params.user}`
  }
  render () {
    const { params } = this.props.navigation.state
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    )
  }
}

const NavApp = StackNavigator({
  Home: {
    screen: TodoNative
  },
  Chat: {
    screen: ChatScreen
  }
})

AppRegistry.registerComponent('TodoNative', () => NavApp)
