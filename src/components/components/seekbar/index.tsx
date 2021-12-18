import React, { useEffect, useState } from 'react'
import {View } from 'react-native'
import styles from './styles';

const Seekbar = (props:any)=>{
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);
    const[didJustFinish , setDisJustFinish] = useState<boolean | null>(false);

    useEffect(() => {
        props.sound_sakam.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate)
        
    }, [])

    useEffect(() => {
        console.log("Song just finished Effect") 
        if(didJustFinish){
           // props.playnext()
        }
    }, [didJustFinish])

    const getProgress = () => {
        if (props.sound_sakam === null || duration === null || position === null ) {
          return 0;
        }
        if(position == duration)
          return 0;
        return (position / duration) * 100;
      };

    const onPlaybackStatusUpdate = (status) => {    
    
    if(status.isLoaded){
    
    if(status.didJustFinish){

        console.log("Song just finished") 
        console.log("Earlier value", didJustFinish)
        console.log("now",status.didJustFinish)
        setDisJustFinish(status.didJustFinish)
        props.playnext()
        //playnext()  
        //setDisJustFinish(status.didJustFinish)       
    }
    else{
        //setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }
        
    
    }
    
    }


    return(
        <View style={[styles.progress, { width: `${getProgress()}%` }]} />
    )

}

export default Seekbar;