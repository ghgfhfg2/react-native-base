import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import React, {ForwardedRef, forwardRef, useRef} from 'react';
import {colors, deviceHeight} from '../constans';
import {mergeRefs} from '../../utils';

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
}

const InputField = forwardRef(
  (
    {disabled = false, error, touched, ...props}: InputFieldProps,
    ref?: ForwardedRef<TextInput>,
  ) => {
    const innerRef = useRef<TextInput | null>(null);

    const handlePressInput = () => {
      innerRef.current?.focus();
    };
    return (
      <Pressable onPress={handlePressInput}>
        <View
          style={[
            styles.container,
            disabled && styles.disable,
            touched && Boolean(error) && styles.errorContainer,
          ]}>
          <TextInput
            ref={ref ? mergeRefs(innerRef, ref) : innerRef}
            editable={!disabled}
            placeholderTextColor={colors.BLACK_900}
            style={styles.input}
            autoCapitalize="none"
            spellCheck={false}
            autoCorrect={false}
            {...props}
          />
          {touched && Boolean(error) && (
            <Text style={Boolean(error) && styles.errorInput}>{error}</Text>
          )}
        </View>
      </Pressable>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.BORDER,
    borderRadius: 10,
    padding: deviceHeight > 700 ? 15 : 10,
  },
  input: {
    fontSize: 16,
    color: colors.BLACK_300,
    padding: 0,
  },
  disable: {
    backgroundColor: colors.BORDER,
    color: colors.BLACK_700,
  },
  errorContainer: {
    borderWidth: 1,
    borderColor: colors.RED_400,
    borderRadius: 10,
  },
  errorInput: {
    fontSize: 12,
    color: colors.RED_400,
    padding: 0,
  },
});

export default InputField;
