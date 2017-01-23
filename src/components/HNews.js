import React from 'react'
import {
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'

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
    </View>
  )

}

const mapStateToProps = (state) => {
  return {
    posts: state.HNReducer
  }
}
export default connect(mapStateToProps)(HNews)
