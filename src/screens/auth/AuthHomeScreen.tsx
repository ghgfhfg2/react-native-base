import {Button, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParmList} from '../navigations/stack/AuthStackNavigator';
import {authNavigations} from '../constans';
import CustomButton from '../components/CustomButton';

type AuthHomeScreenProps = StackScreenProps<AuthStackParmList, 'AuthHome'>;

const AuthHomeScreen = ({navigation}: AuthHomeScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.logoImg}
          source={require('../../assets/sample.png')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          label="로그인하기"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
        <CustomButton
          label="회원가입하기"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigations.SIGMUP)}
        />
      </View>
    </SafeAreaView>
  );
};

export default AuthHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImg: {
    width: '50%',
  },
  buttonContainer: {
    flex: 1,
    gap: 8,
    paddingHorizontal: '5%',
  },
});
