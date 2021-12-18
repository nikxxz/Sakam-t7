import * as React from 'react';
import {
  Text, 
  View,
  SafeAreaView,
Image } from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Hb_22 from '../Hb22/index';
import styles from './styles';
const songList = [
  {
  id:'1',
  songs:[{
    id:'11',
    title:'Hor Hor Te',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
    artist:'Tom Murmu'
  },
  {
    id:'12',
    title:'Dingra Boyz',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/dingraBoyz.jpg',
    artist:'Tom Murmu'
  },
  {
    id:'11',
    title:'Hor Hor Te',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
    artist:'Tom Murmu'
  },
  {
    id:'12',
    title:'Dingra Boyz',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/dingraBoyz.jpg',
    artist:'Tom Murmu'
  }]
},
{
  id:'2',
  songs:[{
    id:'111',
    title:'Hor Hor Te',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
    artist:'Tom Murmu'
  },
  {
    id:'122',
    title:'Dingra Boyz',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/dingraBoyz.jpg',
    artist:'Tom Murmu'
  },
  {
    id:'133',
    title:'Hor Hor Te',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
    artist:'Tom Murmu'
  },
  {
    id:'12',
    title:'Dingra Boyz',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/dingraBoyz.jpg',
    artist:'Tom Murmu'
  }]
},
{
  id:'3',
  songs:[{
    id:'111',
    title:'Hor Hor Te',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
    artist:'Tom Murmu'
  },
  {
    id:'122',
    title:'Dingra Boyz',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/dingraBoyz.jpg',
    artist:'Tom Murmu'
  },
  {
    id:'133',
    title:'Hor Hor Te',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/hor_hor_te.webp',
    artist:'Tom Murmu'
  },
  {
    id:'12',
    title:'Dingra Boyz',
    imageUri:'https://mjdzbecikrpzwezvuibu.supabase.in/storage/v1/object/public/imagealbumart/dingraBoyz.jpg',
    artist:'Tom Murmu'
  }]
}
]
export default class SB2 extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          },
        ]
      }
    }

    _renderItem({item,index}){
      
        return (
          <View style={{
              //backgroundColor:'floralwhite',
              borderRadius: 5,
              //width:300,
             // margin:10,            
              marginLeft:-20
              }}>
            {/* <Text style={{fontSize: 14}}>{item.title}</Text> */}
            {/* <Image source={{ uri: item.albumart }} style={{height: 170,
    width: 370,
    borderRadius:5}} />  */}
            <Hb_22 album={item.songs[0]} />
            <Hb_22 album={item.songs[1]} />
            <Hb_22 album={item.songs[2]} />
            <Hb_22 album={item.songs[3]} />
          </View>

        )
    }

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.container2}>              
              <Text style={styles.title}>{this.props.title}</Text>
              <Text style={styles.see_all}>Show more</Text>
            </View>

            <Carousel
              loop={false}
              autoplay={false}
              //layout={"default"}
              ref={(ref) => (this.carousel = ref)}
              data={songList}
              sliderWidth={370}
              itemWidth={300}
              itemHeight={300}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeIndex: index })}
            />
          </View>
        );
    }
}