import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    width: 310,
    marginBottom: 15,
    marginHorizontal:15
    //backgroundColor:'gray',
    //justifyContent:'center'
   
  },
  image: {
    //width: '12%',
    //height: 30,
    width:50
    
  },
  id:{
    color:'white',
    marginHorizontal:5    
  },

  containerTitle:{
    flexDirection:'column',
    margin:10
  },
  text: {
    color: 'white',  
    width:200,
    
  },
  artist:{
    color:'grey',
    fontSize:14,

  },
  three_dot:{
    marginTop:10,
    marginLeft:45
  }
})

export default styles;
