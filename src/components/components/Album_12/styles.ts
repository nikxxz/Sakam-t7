import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    //alignItems: "center",
    padding: 10,
    flexDirection: 'column',
    //backgroundColor:'yellow'
  },
  image: {
    width: 150,
    height: 150,
    //margin: 15,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
  },
  creatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    //backgroundColor:'grey'
    marginHorizontal: 10,
    marginBottom: 5,
  },
  containerTitle: {
    //width:"100%"
    //backgroundColor:'green'
  },
  containerButtons: {
    flexDirection: 'row',
    //backgroundColor:'red',
    justifyContent: 'space-between',
    //marginHorizontal:5
    marginVertical: 10,
  },
  creator: {
    color: 'lightgray',
    margin: 5,
    fontSize: 20,
  },
  likes: {
    color: 'lightgray',
    margin: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: 'grey',
    height: 40,
    marginHorizontal: 5,
    width: 160,
    borderRadius: 10,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 5,
  },
});

export default styles;
