import { Ionicons } from "@expo/vector-icons";
import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AppContext } from "../../AppContext";
import { Album } from "../../types";
import styles from "./styles";

export type AlbumHeaderProps = {
  album: any;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;
  const isPlaying = false;
  //console.log(props);

  const { setSong } = useContext(AppContext);

  const onPlay = () => {
    // console.log('Album Song',props.songs)
     setSong(props.album.songs[0]);
     
    // console.log(props.songs);
   }


  return (
    <View style={styles.container}>
      <View style={styles.creatorContainer}>
        {/* <Text style={styles.creator}>By {album.by}</Text> */}
        {/* <Text style={styles.likes}>{album.numberOfLikes} Likes</Text> */}
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{album.title}</Text>
          <Text style={styles.subtitle}>{album.by}</Text>
        </View>

        
        <Image
          source={{
            uri: album.imageUri,
          }}
          style={styles.image}
        />
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity onPress={onPlay}>
          <View style={styles.button}>
          <Ionicons
                name={isPlaying ? "pause-outline" : "play-outline"}
                size={24}
                color="white"
              />
            <Text style={styles.buttonText}>Play</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPlay}>
          <View style={styles.button}>
          <Ionicons name="ios-shuffle-outline" size={24} color="white" />
            <Text style={styles.buttonText}>Shuffle</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AlbumHeader;
