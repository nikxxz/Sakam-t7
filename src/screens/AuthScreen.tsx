import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {
  Alert,
  Animated,
  
  BackHandler,
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../constants/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {supabase} from '../supabase/supabaseInit';
import {Text} from 'react-native-design-utility';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('screen');

const AuthScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = React.useState<Object>({});
  const [authenticated, setAuthenticated] = React.useState<boolean>(false);
  const fade = useRef(new Animated.Value(0)).current;

  // useEffect(()=>{
  //   cap_session
  // },[authenticated])

  useEffect(() => {
    Animated.timing(fade, {
      duration: 500,
      toValue: 1,
      delay: 500,
      useNativeDriver: false,
    }).start();

    const backPress = () => {
      Alert.alert('Sakam', 'Are you sure you want to exit?', [
        {
          text: 'No',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backPress,
    );

    return () => backHandler.remove();
  }, [fade]);

  const _storeData = async (data: any) => {
    try {
      await AsyncStorage.setItem(
        'user',
         data
      );
    } catch (error) {
      // Error saving data
    }
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo);
      // console.log(user.user);

      const {data, error} = await supabase.from('Users').insert([
        {
          first_name: userInfo.user.givenName,
          last_name: userInfo.user.familyName,
          email: userInfo.user.email,
          profile_photo: userInfo.user.photo,
        },
      ]);

      

      _storeData(data[0].id)

      setAuthenticated(true);
    } catch (e) {
      console.log(e);
    }
  };

  if (authenticated === true) {
    navigation.navigate('Main');
  }

  return (
    <LinearGradient
      colors={['#212121', '#1D263B', '#212121']}
      start={{x: 0.3, y: 0.2}}
      style={styles.container}>
      <View style={styles.sakam}>
        <Image source={require('../../assets/icon.png')} style={styles.img} />
        <Animated.Text style={[styles.txt, {opacity: fade}]}>
          Sakam
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
    fontSize: width * 0.16,
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 0.5,
    marginLeft: width * 0.035,
  },
  google: {
    color: '#fff',
    fontSize: width * 0.05,
    //textTransform: 'uppercase',
    fontWeight: '700',
  },
  sakam: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  img: {
    height: width * 0.15,
    width: width * 0.15,
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
