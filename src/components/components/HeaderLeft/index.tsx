import React from 'react'
import {View  , Image, Text} from 'react-native'
import styles from './styles'

const HeaderLeft = () =>{


    return (
        <View style={styles.header_container}>
        {/* <Ionicons name="leaf" size={30} color="#17D7A0" /> */}
        <Image source={require('./icon.png')} style={styles.header_image}/>
        <Text style={styles.header_text}>
          Sakam
        </Text>
      </View>
    )
}

export default HeaderLeft