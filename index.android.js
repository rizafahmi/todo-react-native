/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'

import Todo from './src/components/Todo.js'
import HNews from './src/components/HNews.js'

const TodoNative = () => {
  return (<HNews />)
}

AppRegistry.registerComponent('TodoNative', () => TodoNative)
