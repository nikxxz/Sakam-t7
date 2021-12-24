import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: width * 0.05,
    fontWeight: '500',
    margin: width * 0.025,
  },
});

export default styles;
