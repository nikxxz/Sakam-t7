import React from "react";
import { TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

const Search_2 = (nav: any) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("SearchModalScreen", { id: "recent" });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons name="search-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Search_2;
