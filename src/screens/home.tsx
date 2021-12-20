import * as React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {useEffect, useState} from 'react';

import Home_3 from '../components/components/Home_3';
import Home_2 from '../components/components/Home_2';
import Home_1 from '../components/components/Home_1';
import S_ActivityIndicator from '../components/components/ActivityIndicator';
import {supabase} from '../supabase/supabaseInit';
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
        console.log(data)

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
    return <S_ActivityIndicator />;
  }
  return (
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  container2: {
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default Home;
