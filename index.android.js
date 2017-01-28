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
  StyleSheet
} from 'react-native'
import { Provider } from 'react-redux'
import store  from './src/store.js'
import TabView from 'react-native-scrollable-tab-view'

import HNews from './src/components/HNews.js'
import Todo from './src/components/Todo.js'
import { TopBar } from './src/components/TopBar.js'

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
        <View style={styles.container}>
          <TopBar />
          <TabView>
            <HNews tabLabel="News" />
            <Todo tabLabel="Todo" />
          </TabView>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

AppRegistry.registerComponent('TodoNative', () => TodoNative)
