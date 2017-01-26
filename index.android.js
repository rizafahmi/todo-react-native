/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  Navigator
} from 'react-native'
import { Provider } from 'react-redux'
import store  from './src/store.js'

import HNews from './src/components/HNews.js'
import Todo from './src/components/Todo.js'

export default class TodoNative extends React.Component {
  constructor (props) {
    super(props)
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene(route, navigator) {
    switch(route.name) {
      case 'HNews':
        return <HNews navigator={navigator} />
      case 'Todo':
        return <Todo navigator={navigator} />
    }
  }
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{name: 'HNews'}}
          renderScene={this.renderScene}
        />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('TodoNative', () => TodoNative)
