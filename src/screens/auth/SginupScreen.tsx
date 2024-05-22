import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef} from 'react';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import useForm from '../../hooks/useForm';
import {validateSignup} from '../../utils';
import useAuth from '../../hooks/queries/useAuth';

export default function SginupScreen() {
  const passwordRef = useRef<TextInput | null>(null);
  const passwordConfirmRef = useRef<TextInput | null>(null);
  const {signupMutaion, loginMutation} = useAuth();
  const signup = useForm({
    initialValue: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
    validate: validateSignup,
  });

  const handleSubmit = () => {
    const {email, password} = signup.values;
    signupMutaion.mutate(
      {email, password},
      {
        onSuccess: () => {
          loginMutation.mutate(signup.values);
        },
      },
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inpurContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          error={signup.errors.email}
          touched={signup.touched.email}
          inputMode="email"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordRef.current?.focus()}
          {...signup.getTextInputProps('email')}
        />
        <InputField
          ref={passwordRef}
          placeholder="비밀번호"
          error={signup.errors.password}
          touched={signup.touched.password}
          secureTextEntry
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => passwordConfirmRef.current?.focus()}
          textContentType="oneTimeCode"
          {...signup.getTextInputProps('password')}
        />
        <InputField
          ref={passwordConfirmRef}
          placeholder="비밀번호 확인"
          error={signup.errors.passwordConfirm}
          touched={signup.touched.passwordConfirm}
          secureTextEntry
          returnKeyType="join"
          onSubmitEditing={handleSubmit}
          {...signup.getTextInputProps('passwordConfirm')}
        />

        <View style={styles.submitContainer}>
          <CustomButton label="회원가입" onPress={handleSubmit} />
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
