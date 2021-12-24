import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default styles;
