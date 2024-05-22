import {StyleSheet} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthHomeScreen from '../../auth/AuthHomeScreen';
import LoginScreen from '../../auth/LoginScreen';
import {authNavigations} from '../../constans';
import SginupScreen from '../../auth/SginupScreen';

export type AuthStackParmList = {
  [authNavigations.AUTH_HOME]: undefined;
  [authNavigations.LOGIN]: undefined;
  [authNavigations.SIGMUP]: undefined;
};

const Stack = createStackNavigator<AuthStackParmList>();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
          borderBottomColor: '#ddd',
        },
      }}>
      <Stack.Screen
        name="AuthHome"
        component={AuthHomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: '로그인',
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SginupScreen}
        options={{
          headerTitle: '회원가입',
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
