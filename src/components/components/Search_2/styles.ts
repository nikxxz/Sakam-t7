import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    //marginTop: 8,
    flexDirection:'row',
    justifyContent:'flex-end',
    marginRight:10,
    marginTop:3
    //backgroundColor:'yellow'
   
  },
  back_button:{
    marginTop:17,
    marginLeft:20
    //backgroundColor:'red'
  },
  input: {
    width:300,
    height: 45,
    margin:5,
    marginLeft:30,
    color:'grey',
    //marginTop: 100,
    //borderWidth: 1,
    padding: 5,
    paddingLeft:15,
    borderRadius:15,
    backgroundColor:'#141414'
  },

  searchInput:{
    //width:180,
    //height: 40,
    //margin:5,
    //marginLeft:18,
    color:'grey',
    //marginTop: 100,
    //borderWidth: 1,
    padding: 5,
    //paddingLeft:15,
    borderRadius:5,
    backgroundColor:'#141414'
  },
  three_dot:{

  }
  ,
  image:{
    width:50,
    height:50
  }
 
});

export default styles;
