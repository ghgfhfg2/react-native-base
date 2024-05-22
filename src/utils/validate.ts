type UserInfomation = {
  email: string;
  password: string;
};

function validateUser(values: UserInfomation) {
  const errors = {
    email: '',
    password: '',
  };
  if (!values.email) {
    errors.email = '이메일을 입력해 주세요';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = '올바른 이메일 형식이 아닙니다';
  }
  if (!values.password) {
    errors.password = '비밀번호를 입력해 주세요';
  } else if (!(values.password.length >= 8 && values.password.length <= 20)) {
    errors.password = '비밀번호는 8~20자리 사이로 입력해 주세요';
  }
  return errors;
}

function validateLogin(values: UserInfomation) {
  return validateUser(values);
}

function validateSignup(values: UserInfomation & {passwordConfirm: string}) {
  const errors = validateUser(values);
  const signErrors = {...errors, passwordConfirm: ''};

  if (!values.passwordConfirm) {
    signErrors.passwordConfirm = '비밀번호 확인을 입력해 주세요';
  } else if (values.password !== values.passwordConfirm) {
    signErrors.passwordConfirm = '비밀번호가 일치하지 않습니다';
  }
  return signErrors;
}

export {validateLogin, validateSignup};
