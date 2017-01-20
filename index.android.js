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
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class TodoNative extends Component {
  constructor() {
    super()
    this.state = {
      todos: [1,2,3],
      newTodo: ''
    }
  }
  handleTextChange (e) {
    const { value } = e.target
    this.setState({ newTodo: value })
  }
  handlePress (e) {

  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.state.newTodo} onChange={this.handleTextChange.bind(this)} />
        {this.state.todos.map(todo => <Text>{todo}</Text>)}
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>
            Touch me
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
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
});

AppRegistry.registerComponent('TodoNative', () => TodoNative);
