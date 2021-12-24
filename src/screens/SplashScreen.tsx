import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default SplashScreen = () => {
  const fade = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(fade, {
      duration: 1000,
      toValue: 1,
      delay: 0,
      useNativeDriver: false,
    }).start();
  }, [fade]);

  const isAuthenticated = async () => {
    const signedIn = await GoogleSignin.isSignedIn();
    if (signedIn === true) {
      navigation.navigate('Tabs');
    } else {
      navigation.navigate('Auth');
    }
  };

  setTimeout(() => {
    isAuthenticated();
  }, 2500);

  return (
    <LinearGradient
      colors={['#212121', '#1D263B', '#212121']}
      start={{x: 0.3, y: 0.2}}
      style={styles.container}>
      <Animated.View>
        <Animated.Text style={[styles.txt, {opacity: fade}]}>
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
