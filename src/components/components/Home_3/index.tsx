import * as React from "react";
import { FlatList, Text, View } from "react-native";

import Carousel from "react-native-snap-carousel";
import Home_31 from "../Home_31";
import styles from "./styles";

export default class SB2 extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {
      activeIndex: 0,
      index_cnt:0
    };
  }

  _renderItem({ item, i }) {
    //console.log('i',i);
    
    return (
      <View
        style={{
          borderRadius: 5,
          marginLeft: -20,
        }}
      >

<FlatList
      data={item.songs}
      renderItem={({ item , index }) => <Home_31  song={item} listsong />}
      keyExtractor={( item ) => item.id}
      showsHorizontalScrollIndicator={false}
      
      
    />
        {/* <Home_31 songs={item.songs[0]} />
        <Home_31 songs={item.songs[1]} />
        <Home_31 songs={item.songs[2]} />
        <Home_31 songs={item.songs[3]} /> */}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.title}>{this.props.title}</Text>
          {/* <Text style={styles.see_all}>Show more</Text> */}
        </View>
      <View style={styles.container3}>
        <Carousel
          loop={false}
          autoplay={false}
          ref={(ref) => (this.carousel = ref)}
          data={this.props.songs}
          sliderWidth={370}
          itemWidth={300}
          itemHeight={300}
          renderItem={this._renderItem}          
          onSnapToItem={(index) => this.setState({ activeIndex: index })}
        />
        </View>
      </View>
    );
  }
}
