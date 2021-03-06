import React from 'react'
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

class Todo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: [],
      newTodo: ''
    }
  }
  componentWillMount () {
    fetch('http://192.168.0.112:3000/todos', {
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(todos => {
        this.setState({
          todos
        })
      })
  }
  handleChange (text) {
    this.setState({
      newTodo: text
    })
  }
  handlePress () {
    fetch('http://192.168.0.112:3000/todos', {
      method: 'post',
      body: JSON.stringify({
        text: this.state.newTodo
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        const todos = [...this.state.todos, data]
        this.setState({
          todos: todos,
          newTodo: ''
        })
      })
  }
  _navigateBack() {
    this.props.navigator.pop()
  }
  render () {

    return (
      <LinearGradient colors={["#5AD427", "#A4E786"]}
        style={styles.container}>
        <TextInput value={this.state.newTodo} onChangeText={this.handleChange.bind(this)} />
        <TouchableHighlight onPress={this.handlePress.bind(this)}>
          <Text>
            Save Todo
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._navigateBack.bind(this)}>
          <Text>
            Go Back
          </Text>
        </TouchableHighlight>
        <View>
          {this.state.todos.map((todo, i) => (
            <Text key={todo.id}>{todo.text}</Text>
          ))}
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: 45,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    alignSelf: 'stretch'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#bada55'
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
