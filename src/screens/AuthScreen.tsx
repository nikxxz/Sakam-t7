import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const AuthScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = React.useState<Object>({});
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);
  const fade = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fade, {
      duration: 500,
      toValue: 1,
      delay: 500,
      useNativeDriver: false,
    }).start();
  }, [fade]);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      // console.log(user.user);
      setAuthenticated(true);
    } catch (e) {
      console.log(e);
    }
  };

  if (authenticated === true) {
    navigation.navigate('Tabs');
  }

  return (
    <LinearGradient
      colors={['#212121', '#1D263B', '#212121']}
      start={{x: 0.3, y: 0.2}}
      style={styles.container}>
      <View style={styles.sakam}>
        <Animated.Text style={[styles.txt, {opacity: fade}]}>
          SAKAM
        </Animated.Text>
      </View>
      <Animated.View style={[styles.btn, {opacity: fade}]}>
        <View style={styles.icon}>
          <Icon name="google" size={20} color={theme.color.white} />
        </View>
        <TouchableOpacity onPress={() => signIn()}>
          <Text style={styles.google}>Sign in with Google</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
};

export default AuthScreen;

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
  google: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '700',
  },
  sakam: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    backgroundColor: theme.color.blueLight,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginTop: 25,
    borderRadius: 10,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
});
