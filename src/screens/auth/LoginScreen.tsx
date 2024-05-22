import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import useForm from '../../hooks/useForm';
import {validateLogin} from '../../utils';
import useAuth from '../../hooks/queries/useAuth';

export default function LoginScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const {loginMutation} = useAuth();
  const login = useForm({
    initialValue: {
      email: '',
      password: '',
    },
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log(login.values);
    loginMutation.mutate(login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inpurContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          error={login.errors.email}
          touched={login.touched.email}
          inputMode="email"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...login.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={login.errors.password}
          touched={login.touched.password}
          secureTextEntry
          blurOnSubmit={false}
          returnKeyType="join"
          onSubmitEditing={handleSubmit}
          {...login.getTextInputProps('password')}
        />
        <View style={styles.submitContainer}>
          <CustomButton label="로그인" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
  },
  inpurContainer: {
    flex: 1,
    gap: 10,
  },
  submitContainer: {
    marginTop: 30,
  },
});
