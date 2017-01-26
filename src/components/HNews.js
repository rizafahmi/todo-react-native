import React from 'react'
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class HNews extends React.Component {
  constructor (props) {
    super(props)
    this._navigate = this._navigate.bind(this)
  }
  _navigate() {
    this.props.navigator.push({
      name: 'Todo'
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
        </View>
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
