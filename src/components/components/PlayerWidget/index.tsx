import React, { useContext, useEffect, useRef, useState } from "react";
import { Text, Image, View, TouchableOpacity, ToastAndroid } from "react-native";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
// import { API, graphqlOperation } from 'aws-amplify';

import styles from "./styles";
import { Song } from "../../types";
import { Sound } from "expo-av/build/Audio/Sound";
import { Audio } from "expo-av";

import { AppContext } from "../../AppContext";
import Audio_Sakam from "../../Audio";
import { useNavigation } from "@react-navigation/native";
import Seekbar from "../seekbar";
// import {getSong} from "../../src/graphql/queries";

let song_c = {
    id:'1',
    uri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/audio-low/Y2Mate.is - AAM GI SARI  NEW SANTHALI VIDEO SONG 2020-2021-c9oHoSK6HaY-160k-1637471891514.mp3',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/am_gi_sari.webp',
    title:'Am gi sari',
    artist:'Dingra Boyz'
  
  }

let list_song = null

const PlayerWidget = (props:any) => {
  const [csong, csetSong] = useState(null);
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number | null>(null);
  const [position, setPosition] = useState<number | null>(null);

  const[sound_sakam , setSound_sakam] = useState<Sound|null>(new Audio.Sound())

  const[didFinish , setDisJustFinish] = useState<boolean | null>(false);

  //const[playbackupdate , setplaybackupdate]

  const { song ,setSong,listSong } = useContext(AppContext);
  console.log("Player Updating...")


  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
      playThroughEarpieceAndroid: false,
    });

    const ss = new Audio.Sound()
    //ss.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
    setSound_sakam(ss)

    console.log("List songs player",listSong)
    
  }, []);

  useEffect(() => {
    list_song = listSong
    
  }, [listSong])

  // useEffect(() => {
  //   console.log("Just finished Playing")

  // }, [sound_sakam.getStatusAsync().then((status)=>{return status.didJustFinish})])


  // useEffect(()=>{
   
  //   // console.log(listSong)
  //   // console.log('song just finished');
  //   // console.log(song)
  //   // console.log('song end!!')
  //   if(listSong!==null&&didFinish){
  //     //let index = listSong.findIndex(x=>x.id =song.id)
  //     let index = listSong.findIndex((item , index)=>{
  //       return item.id === song.id
  //     })
  //     // console.log("song id",song.id)
  //     // console.log(index+1)
  //     // console.log(listSong[index+1])
      
  //     //console.log('listsong index-->',listSong[index])
  //     //console.log('listsong index+1-->',listSong[index+1])
  //     setIsPlaying(true);
  //     ToastAndroid.show("Set new Songs"+JSON.stringify(listSong[index+1]) , 10)
  //     setSong(listSong[index+1]);
  //     setDisJustFinish(false)
           
      
  //   }


  // },[didFinish]);


  const playnext = ()=>{
    console.log("List songs player playnext",listSong)
    if(list_song!==null){
      //let index = listSong.findIndex(x=>x.id =song.id)
      let index = list_song.findIndex((item)=>{
        return item.id === song_c.id
      })
      // console.log("song id",song.id)
      // console.log(index+1)
      // console.log(listSong[index+1])
      
      //console.log('listsong index-->',listSong[index])
      //console.log('listsong index+1-->',listSong[index+1])
      setIsPlaying(false);
      ToastAndroid.show("Set new Songs"+JSON.stringify(list_song[index+1]) , 10)

      song_c = list_song[index+1]
      setSong(list_song[index+1]);
      playCurrentSong();
      //setDisJustFinish(false)
           
      
    }
  }


 

  const playCurrentSong = async () => {
    // if (sound) {
    //   await sound.unloadAsync();
    // }
    //if(song.uri){

    //console.log('Current Song -->' , song)
    // const { sound: newSound } = await Sound.createAsync(
    //   { uri: song.uri },
    //   { shouldPlay: true },

    //   onPlaybackStatusUpdate
    // );
    // //console.log(newSound);
    // setSound(newSound);
    //}

    if(sound_sakam){
     // sound_sakam.unloadAsync()
      const status = await sound_sakam.getStatusAsync();
      console.log("sound_sakam 1st status",status)
      ToastAndroid.show("sound_sakam 1st status"+JSON.stringify(status) , 10)
      if(status.isLoaded){
        const unload_satus = await sound_sakam.unloadAsync()  //make the call synchronous
        console.log('Unload Status',unload_satus)
        //setIsPlaying(false);
        if(song_c){
          const status = await sound_sakam.loadAsync(
            { uri: song_c.uri },          
            {shouldPlay:true}         
            
          )
          setIsPlaying(true)
          console.log("Unload and Load New Status",status)
          ToastAndroid.show("Unload and Load New Status"+JSON.stringify(status) , 10)
        }else{
          ToastAndroid.show("Song not defined"+JSON.stringify(song_c) , 10)
        }
        
       
      }
      else{
        if(song_c){
          const status = await sound_sakam.loadAsync(
            { uri: song_c.uri },          
            {shouldPlay:true}
            
          )
          setIsPlaying(true)
          console.log("Load New",status)
        ToastAndroid.show("Load New"+JSON.stringify(status) , 10)
        }else{
          ToastAndroid.show("Song not defined"+JSON.stringify(song_c) , 10)
        }
        
        
        


      }
      
    }
    else{
      console.log("Sound is not initialized")
      ToastAndroid.show("Sound is not initialized"+JSON.stringify(sound_sakam) , 10)
    }


  };

  useEffect(() => {
    console.log("song changed",listSong)
    if (song) {
      //console.log('Play Current Song -->')
      ToastAndroid.show("Song changed to: "+JSON.stringify(song) , 10)
      
      if(song_c.id!==song.id)
      {
        song_c = song;
        playCurrentSong();
      }
          
      
    }
  }, [song]);

  const onPlayPausePress = async () => {
    console.log(sound_sakam)
    if (!sound_sakam) {
      return;
    }
    if (isPlaying) {
      await sound_sakam.pauseAsync();
      setIsPlaying(false)
    } else {
      await sound_sakam.playAsync();
      setIsPlaying(true)
    }
  };

  const goToPlayer = ()=>{
    console.log('Got to modal player clicked!!')
    props.navigation.navigate('PlayerScreen', { id: 'test_id_player' })
  }


  if (!song_c || !song) {
    return null;
  }

  return (
    
    // <View style={styles.container}>
    //   <View style={[styles.progress, { width: `${getProgress()}%` }]} />
    //   <View style={styles.row}>
    //     <Image source={{ uri: song.imageUri }} style={styles.image} />
    //     <View style={styles.rightContainer}>
    //       <View style={styles.nameContainer}>
    //       <TouchableOpacity onPress={goToPlayer}>
    //         <Text style={styles.title}>{song.title}</Text>
    //         <Text style={styles.artist}>{song.artist}</Text>
    //         </TouchableOpacity>
    //       </View>

    //       <View style={styles.iconsContainer}>
    //         {/* <AntDesign name="hearto" size={30} color={"white"}/> */}
    //         <TouchableOpacity onPress={onPlayPausePress}>
    //           {/* <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"}/> */}
    //           <Ionicons
    //             name={isPlaying ? "pause-outline" : "play-outline"}
    //             size={34}
    //             color="white"
    //           />
    //         </TouchableOpacity>
    //       </View>
    //     </View>
    //   </View>
    // </View>

<View>

<View style={styles.miniPlayerContainer}>
{/* <View style={[styles.progress, { width: `${getProgress()}%` }]} /> */}
<Seekbar sound_sakam = {sound_sakam} playnext={playnext}/>
<View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row', paddingLeft: 0 }}
            onPress={goToPlayer}>
            <View >
                <Image source={{ uri: song.imageUri }} style={styles.image} />
            </View>
            <View style={{width:250,marginTop:10}}>
            <Text style={styles.title} >              
                {song.title}
            </Text>
            <Text style={styles.artist}>{song.artist}</Text>
            </View>
            
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={()=>{play(aud,song.url , playbackStatus , dispatch , song)}}>
            <View style={{ flex: 1, marginVertical: 12, marginRight:20 }        }>
                {(playbackStatus?playbackStatus.isPlaying:false)?<Ionicons name="pause" size={38} color="#343635" />:<Ionicons name="play" size={38} color="#343635" />}
                
            </View>
            </TouchableOpacity> */}

<TouchableOpacity onPress={onPlayPausePress}>
<View style={{ flex: 1, marginVertical: 12, marginRight:20 }        }>
<Ionicons
                name={ isPlaying? "pause-outline" : "play-outline"}
                size={34}
                color="white"
              />
              </View>
  </TouchableOpacity>
            

        </View>
        </View>
</View>

    
  );
};

export default PlayerWidget;
