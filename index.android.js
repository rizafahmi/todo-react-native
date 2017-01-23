/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Todo from './src/components/Todo.js'
import Fancy from './src/components/Fancy.js'

const TodoNative = () => {
  return (<Fancy />)
}

AppRegistry.registerComponent('TodoNative', () => TodoNative)
