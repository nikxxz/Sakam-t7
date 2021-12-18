import React, { useContext, useEffect } from 'react'
import {View , Text , FlatList ,StyleSheet} from 'react-native'
import { AppContext } from '../../AppContext'
import SearchModal11 from '../SearchModal11'
// import styles from './styles'


// Songs Search View
const SearchModal1 = (props:any) =>{

    const {songs} = {...props}
    
    

    if(songs == null){
        return null
    }
    return(
        <View style={{marginBottom:30}}>
            
            <FlatList
                  keyboardShouldPersistTaps="handled"
                  data={songs}
                  renderItem={({ item ,index }) => {
                   return (
                //    <Text style={{color:'white'}}>{item.title}</Text>
                        <SearchModal11 index={index+1} song={item}/>
                   )
                  }}
                  keyExtractor={(item) => item.id}
                  ListHeaderComponent = {()=>{return (
                //   <Text style={styles.title}> Songs</Text>

                <View style={{flexDirection:'row' , justifyContent:"space-between" , backgroundColor:'black',padding:10 , marginHorizontal:10}}>
                {/* <Text style={styles.headerSearch}>All</Text> */}
                <Text style={styles.headerSearchSelected}>Songs</Text>
                <Text style={styles.headerSearch}>Artists</Text>
                <Text style={styles.headerSearch}>Albums</Text>
                <Text style={styles.headerSearch}>Playlists</Text>

                </View>
                  
                  )
                }}
                stickyHeaderIndices={[0]}
                alwaysBounceHorizontal={false}
                alwaysBounceVertical={false}
                bounces={false}
                  
                />

        </View>
    )

}


export default SearchModal1


const styles = StyleSheet.create({
    headerSearch:{
        color: "grey",
        alignItems: "center",
        fontSize: 18,
        fontWeight: "300",
        paddingHorizontal:10,
       // borderBottomColor:'grey',
        //borderBottomWidth:2
      },
      headerSearchSelected:{
        color: "white",
        alignItems: "center",
        fontSize: 18,
        fontWeight: "300",
        paddingHorizontal:10,
        //borderBottomColor:'white',
        //borderBottomWidth:2
      },
})