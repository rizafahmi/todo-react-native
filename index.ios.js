/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Fancy from './src/components/Fancy.js'

const TodoNative = () => {
  return (<Todo />)
}

AppRegistry.registerComponent('TodoNative', () => TodoNative)
