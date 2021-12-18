import React from 'react'
import {View , Text } from 'react-native'


const generes = [
    {
        "id":"1",
        "title":'Santhali'
    },
    {
        "id":"2",
        "title":'Mundari'
    }
    
]


const Search_3 = ()=>{

    //#0E--5975

    return(

        <View>

        <View style={{flexDirection:'row',  marginHorizontal:10 , justifyContent:'center'}}>
            <View style={{ backgroundColor:'#364047',width:170 , borderRadius:3, alignContent:'center', margin:5 
            ,borderBottomColor:'#F59C98',borderBottomWidth:5
            }}>
                
            <Text style={{padding:12,color:'white',fontSize:16}}>
                Santhali
                </Text>
                {/* <View style={{height:5 , backgroundColor:'#F59C98'}}>

                </View> */}
                
            </View>
            <View style={{ backgroundColor:'#364047',width:170 , borderRadius:3, alignContent:'center', margin:5 
            ,borderBottomColor:'#DAF5DD',borderBottomWidth:5
            }}>
                
            <Text style={{padding:12,color:'white',fontSize:16}}>
                Nagpuri
                </Text>
                {/* <View style={{height:5 , backgroundColor:'#DAF5DD'}}>

                </View> */}
                
            </View>
           
        </View>

        <View style={{flexDirection:'row',  marginHorizontal:10 , justifyContent:'center'}}>
        <View style={{ backgroundColor:'#364047',width:170 , borderRadius:3, alignContent:'center', margin:5 
            ,borderBottomColor:'#9FF5EF',borderBottomWidth:5
            }}>
                
                <Text style={{padding:12,color:'white',fontSize:16}}>
                Mundari
                </Text>
                {/* <View style={{height:5 , backgroundColor:'#9FF5EF'}}>

                </View> */}
                
            </View>
            <View style={{ backgroundColor:'#364047',width:170 , borderRadius:3, alignContent:'center', margin:5 
            ,borderBottomColor:'#F5CB80',borderBottomWidth:5
            }}>
                
            <Text style={{padding:12,color:'white',fontSize:16}}>
                Ho
                </Text>
                {/* <View style={{height:5 , backgroundColor:'#F5CB80'}}>

                </View> */}
                
            </View>
           
        </View>
        
      </View>
    )

}


export default Search_3