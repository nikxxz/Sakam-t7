import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 47,
    backgroundColor: '#131313',
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    //marginHorizontal:10
  },
  progress: {
    height: 3,
    backgroundColor: '#bcbcbc'
  },
  row: {
    flexDirection: 'row',
  },
  // image: {
  //   width: 50,
  //   height: 50,
  //   marginRight: 10,
  // },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'green'
  },
  nameContainer: {
    //flex:1,
    //width:300,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'yellow'
  },
  iconsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around'
  },
  title: {
    color: 'white',
    fontSize: 17,
    //fontWeight: 'bold',
    marginHorizontal: 20,
  },
  artist: {
    color: 'lightgray',
    fontSize: 13,   
    //fontFamily: "Tahoma",
    marginHorizontal:20
  },
  miniPlayerContainer: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    //alignContent: 'center',
    //flexDirection: 'coloum',
    bottom: 60,
    //left: 1,
    //right: 1,
    width:'100%',
    backgroundColor: 'black',
    marginHorizontal:2,
    opacity: 0.9,
    //borderRadius: 10,
    height: 60,
    shadowColor: '#7F5DF0',
    shadowOffset: {
        width: 1,
        height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 0.5,
    elevation: 1
},
miniPlayerSongTitle: {
    //flex: 1, flexDirection: 'row', 
    //marginVertical: 20, marginRight: 30, marginLeft: 20,
    color:'white',
    //fontFamily: "Tahoma",
    marginHorizontal:20       
},
image: {
    height: 60,
    width: 55,
    //borderRadius: 10,      
}
})

export default styles;
