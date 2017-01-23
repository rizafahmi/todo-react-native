import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native'


class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      newTodo: ''
    }
    console.warn(JSON.stringify(this.state, null, 2))
  }
  handleChange (text) {
    this.setState({
      newTodo: text
    })
    console.warn(JSON.stringify(this.state, null, 2))
  }
  handlePress () {
    const todos = [...this.state.todos, this.state.newTodo]
    this.setState({
      todos: todos,
      newTodo: ''
    })
  }
  render () {

    return (
      <View style={styles.container}>
        <TextInput value={this.state.newTodo} onChangeText={this.handleChange.bind(this)} />
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>
            Save Todo
          </Text>
        </TouchableHighlight>
        <View>
          {this.state.todos.map((todo, i) => (
            <Text key={i}>{todo}</Text>
          ))}
        </View>
      </View>
    )
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
})

export default Todo
