import * as React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useEffect, useState} from 'react';
import Home_3 from '../components/Home_3';
import Home_2 from '../components/Home_2';
import Home_1 from '../components/Home_1';
import {supabase} from '../supabase/supabaseInit';
import LoadingScreen from '../components/LoadingScreen';
import LinearGradient from 'react-native-linear-gradient';

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
      // console.log(data)

      if (data) {
        // console.log(data);
        //let rdm = Math.floor(Math.random() * data.length);
        // console.log(data[rdm].homepage);
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
      <View style={styles.container}>
        <View>
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
});

export default Home;
