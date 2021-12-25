import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {TransitionScale} from '../constants/animations';
import AuthScreen from '../screens/AuthScreen';
import SplashScreen from '../screens/SplashScreen';
import MainStackNavigator from './MainStackNavigator';

export default AuthStack = () => {
  const [signedIn, setSignedIn] = useState<boolean>(false);

  const isSignedin = async () => {
    const login = await GoogleSignin.isSignedIn();
    if (login === true) {
      setSignedIn(true);
    }
  };

  useEffect(() => {
    isSignedin();
  }, []);

  const authStack = createStackNavigator();

  return (
    <authStack.Navigator screenOptions={TransitionScale}>
      {signedIn ? (
        <authStack.Screen
          name="Main"
          component={MainStackNavigator}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <authStack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <authStack.Screen
            name="Auth"
            component={AuthScreen}
            options={{headerShown: false}}
          />
          <authStack.Screen
            name="Main"
            component={MainStackNavigator}
            options={{headerShown: false}}
          />
        </>
      )}
    </authStack.Navigator>
  );
};
