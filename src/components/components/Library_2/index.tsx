import { AntDesign, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react'
import { FlatList } from 'react-native';
import { View , Text  } from 'react-native';
import Album from '../Album';
import styles from './styles';


const Lirary_data = [
    {
        id:'1',
        title:'Playlist',
        children:[]
    },
    {
        id:'2',
        title:'Albums',
        children:[]
    },
    {
        id:'3',
        title:'Songs',
        children:[]
    },
    {
        id:'4',
        title:'Artists',
        children:[]
    },
    {
        id:'5',
        title:'Following',
        children:[]
    }
]

const Library_2 = (props: any) =>{ 
    return(
        <View style={styles.container}>          

            <View style={styles.container2}>
            <MaterialCommunityIcons name="playlist-music" size={28} color="white" />
            <Text style={styles.text}>Playlist</Text>
            </View>
            <View style={styles.container2}>
            <Ionicons name="albums-outline" size={28} color="white" />
            <Text style={styles.text}>Albums</Text>
            </View>
            <View style={styles.container2}>
            <Ionicons name="musical-note-outline" size={28} color="white" />
            <Text style={styles.text}>Songs</Text>
            </View>

            <View style={styles.container2}>
            <Fontisto name="persons" size={28} color="white" />
            <Text style={styles.text}>Artists</Text>
            </View>

            <View style={styles.container2}>
            <MaterialIcons name="follow-the-signs" size={28} color="white" />
            <Text style={styles.text}>Following</Text>
            </View>

            <View style={styles.container2}>
            <AntDesign name="like2" size={28} color="white" />
            <Text style={styles.text}>Likes</Text>
            </View>
            
            {/* <FlatList
                data={Lirary_data}
                renderItem={({ item }) => {
                    return (
                        <>
                        <MaterialCommunityIcons name="playlist-music" size={24} color="white" />
                        <Text style={styles.text}>{item.title}
                        </Text>
                        </>
                    )
                }}
                keyExtractor={( item ) => item.id}
                showsHorizontalScrollIndicator={false}                
                /> */}
        </View>
    )
}

export default Library_2