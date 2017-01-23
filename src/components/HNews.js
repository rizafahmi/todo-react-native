import React from 'react'
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const HNews = (props) => {
  return (
    <View>
      <Text>Hacktiv8 News</Text>
      <View>
        {props.posts.map((post, i) => {
          return (
            <Text key={i}>{i+1} - {post.title}</Text>
          )
        })}
      </View>
      <View>
        <TouchableOpacity onPress={props.addNews}>
          <Text>Add News</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

}

const mapStateToProps = (state) => {
  return {
    posts: state.HNReducer
  }
}
const mapActionToProps = (dispatch) => {
  return bindActionCreators({
    addNews(post={title: 'addNew', id: 99}) {
      return {
        type: 'ADD_POST',
        payload: post
      }
    }

  }, dispatch)
}
export default connect(mapStateToProps, mapActionToProps)(HNews)
