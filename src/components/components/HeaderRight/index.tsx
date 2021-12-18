import React from 'react'
import {View , Pressable , Image} from 'react-native'

const HeaderRight = ()=>{

    return (
        <Pressable
        // onPress={() => navigator.navigate('Modal')}
        style={({ pressed }) => ({
          opacity: pressed ? 0.5 : 1,
        })}
      >
        <Image
          source={{
            uri: "https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/tom.jpg",
          }}
          style={{ width: 30, height: 30, borderRadius: 30 }}
        />
       
      </Pressable>
    )
}

export default HeaderRight