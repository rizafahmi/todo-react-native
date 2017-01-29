import React from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  Modal
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LinearGradient from 'react-native-linear-gradient'

class HNews extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisibility: false
    }
    this._navigate = this._navigate.bind(this)
    this._openModal = this._openModal.bind(this)
    this._closeModal = this._closeModal.bind(this)
  }
  _navigate() {
    this.props.navigator.push({
      name: 'Todo'
    })
  }
  _openModal() {
    this.setState({
      modalVisibility: true
    })
  }
  _closeModal() {
    this.setState({
      modalVisibility: false
    })
  }
  render() {
    return (
      <View>
        <Text>Hacktiv8 News</Text>
        <View>
          {this.props.posts.map((post, i) => {
            return (
              <Text key={i}>{i+1} - {post.title}</Text>
            )
          })}
        </View>
        <View>
          <TouchableOpacity onPress={() => props.addNews()}>
            <Text>Add News</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._navigate}>
            <Text>GO to Todo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._openModal}>
            <Text>Open Modal</Text>
          </TouchableOpacity>
        </View>
        <Modal
          style={{ flex: 1 }}
          animationType={'slide'}
          visible={this.state.modalVisibility}
          onRequestClose={this._closeModal}
        >
          <Text>This is a modal</Text>
          <TouchableOpacity onPress={this._closeModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.HNReducer
  }
}
const addNews = (post={title: 'brand new'}) => {
  return {
    type: 'ADD_POST',
    payload: post
  }
}

const mapActionToProps = (dispatch) => {
  return bindActionCreators({addNews}, dispatch)
}
export default connect(mapStateToProps, mapActionToProps)(HNews)
