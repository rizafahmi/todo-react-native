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

const TodoNative = () => {
  return (<Todo />)
}

AppRegistry.registerComponent('TodoNative', () => TodoNative)
