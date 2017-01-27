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
import TabView from 'react-native-scrollable-tab-view'

import HNews from './src/components/HNews.js'
import Todo from './src/components/Todo.js'

export default class TodoNative extends React.Component {
  constructor (props) {
    super(props)
    this.renderScene = this.renderScene.bind(this)
  }
  renderScene(route, navigator) {
    switch(route.name) {
      case 'News':
        return <HNews navigator={navigator} />
      case 'Todo':
        return <Todo navigator={navigator} />
    }
  }
  render() {
    return (
      <Provider store={store}>
        <TabView>
          <HNews tabLabel="News" />
          <Todo tabLabel="Todo" />
        </TabView>
      </Provider>
    )
  }
}

AppRegistry.registerComponent('TodoNative', () => TodoNative)
