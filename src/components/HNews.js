import React from 'react'
import {
  View,
  Text
} from 'react-native'

class HNews extends React.Component {
  constructor () {
    super()
    this.state = {
      posts: []
    }
  }
  componentWillMount() {
    fetch('https://hn.algolia.com/api/v1/search?query=react', {
      Accept: 'application/json'
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data.hits
        })
      })
  }
  render() {
    return (
      <View>
        <Text>Hacktiv8 News</Text>
        <View>
          {this.state.posts.map((post, i) => {
            return (
              <Text key={i}>{i+1} - {post.title}</Text>
            )
          })}
        </View>
      </View>
    )

  }
}

export default HNews
