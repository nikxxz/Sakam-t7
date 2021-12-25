import * as React from 'react';
import {StyleSheet, FlatList, View, Image, Dimensions} from 'react-native';
import {Text} from 'react-native-design-utility';
import {useEffect, useState} from 'react';
import Home_3 from '../components/Home_3';
import Home_2 from '../components/Home_2';
import Home_1 from '../components/Home_1';
import {supabase} from '../supabase/supabaseInit';
import LoadingScreen from '../components/LoadingScreen';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../constants/theme';

const {height, width} = Dimensions.get('screen');

const Home = () => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchAlbumCategories();
    setLoading(false);
  }, []);

  const fetchAlbumCategories = async () => {
    try {
      let {data, error} = await supabase
        .from('HomePage')
        .select('*')
        .order('index', {ascending: true});

      if (data) {
        setCategories(data);
        setLoading(false);
        setRefresh(false);
      } else {
        setCategories([]);
      }
      if (error) {
        console.log(error);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleRefresh = () => {
    setRefresh(true);
    fetchAlbumCategories();
  };

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <LinearGradient
      colors={['#212121', '#1D263B', '#212121']}
      start={{x: 0.3, y: 0.2}}>
      <View>
        <View style={styles.header}>
          <Image source={require('../../assets/icon.png')} style={styles.img} />
          <Text style={styles.sakam}>Sakam</Text>
        </View>
        <View style={styles.container}>
          <FlatList
            data={categories}
            renderItem={({item}) => {
              if (item.type === 'Home_3') {
                return <Home_3 title={item.title} songs={item.playlist} />;
              }
              if (item.type === 'Home_2') {
                return <Home_2 title={item.title} albums={item.playlist} />;
              }
              if (item.type === 'Home_1') {
                return <Home_1 title={item.title} albums={item.playlist} />;
              }
            }}
            keyExtractor={item => item.id}
            onRefresh={handleRefresh}
            refreshing={loading}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    //fontSize:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: width * 0.05,
    marginBottom: width * 0.02,
    marginTop: height * 0.015,
  },
  img: {
    height: width * 0.06,
    width: width * 0.06,
  },
  sakam: {
    color: theme.color.greenLighter,
    fontSize: width * 0.05,
    marginLeft: width * 0.035,
    fontWeight: 'bold',
  },
});

export default Home;
