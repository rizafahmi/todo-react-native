/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import { Provider } from 'react-redux'
import store  from './src/store.js'

import HNews from './src/components/HNews.js'

const TodoNative = () => {
  return (
    <Provider store={store}>
      <HNews />
    </Provider>
    )
    }

    AppRegistry.registerComponent('TodoNative', () => TodoNative)
