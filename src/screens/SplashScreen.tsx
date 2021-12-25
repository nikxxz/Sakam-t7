import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { supabase } from '../supabase/supabaseInit';
import moment from 'moment';

const SplashScreen = () => {
  const fade = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<any>();

  useEffect(() => {
    Animated.timing(fade, {
      duration: 750,
      toValue: 1,
      delay: 0,
      useNativeDriver: false,
    }).start();
  }, [fade]);

  const _getUser = async () => {
    try {
      const user = await AsyncStorage.getItem(
        'user'
      );
     
      return user;
    } catch (error) {
      // Error saving data
    }
  };
  const isAuthenticated = async () => {
    const signedIn = await GoogleSignin.isSignedIn();
    if (signedIn === true) {

      const user:any = await _getUser();

      console.log(moment()
      .utcOffset('+05:30'))
      const { data, error } = await supabase.rpc('cap_session', {
        uid: user,        
        tag: 'S',
        offset_: new Date().getTimezoneOffset()
      });

      if (error) {
        console.log(error)
      }

      navigation.navigate('Main');






    } else {
      navigation.navigate('Auth');
    }
  };

  const getUserDetails = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();
    return currentUser;
    // console.log(currentUser);
  };

  useEffect(() => {
    isAuthenticated();
    getUserDetails();
  }, []);

  // setTimeout(() => {
  //   isAuthenticated();
  // }, 1000);

  return (
    <LinearGradient
      colors={['#212121', '#1D263B', '#212121']}
      start={{ x: 0.3, y: 0.2 }}
      style={styles.container}>
      <Animated.View>
        <Animated.Text style={[styles.txt, { opacity: fade }]}>
          SAKAM
        </Animated.Text>
      </Animated.View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 68,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
});


export default SplashScreen;