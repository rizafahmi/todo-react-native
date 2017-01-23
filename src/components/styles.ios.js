import {
  StyleSheet,
  Dimensions
} from 'react-native'

const {height, width} = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: width / 2,
    height: height / 3,
    backgroundColor: 'peru',
    position: 'absolute',
    top: 30,
    left: 30,
    borderRadius: 30
  },
  title: {
    color: 'orange',
    fontSize: 34,
    fontWeight: 'bold'
  }
})

export default styles
