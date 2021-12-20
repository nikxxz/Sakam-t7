import React from "react"
import { View , ActivityIndicator } from "react-native"

const S_ActivityIndicator = () => {
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'black'
      }}
    >
      <ActivityIndicator size="large" color="white" />
    </View>
  )
}

export default S_ActivityIndicator
