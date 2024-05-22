import axiosInstance from './axios';
import {Category, Profile} from '../types/domain';
import {getEncryptStorage} from '../utils';

type RequestUser = {
  email: string;
  password: string;
};

const postSignup = async ({email, password}: RequestUser): Promise<void> => {
  console.log(email, password);
  const {data} = await axiosInstance.post('/auth/signup', {email, password});
  console.log('signup:', data);
  return data;
};

type ResponseToken = {
  accessToken: string;
  refreshToken: string;
};

const postLogin = async ({
  email,
  password,
}: RequestUser): Promise<ResponseToken> => {
  console.log('postLogin');
  const {data} = await axiosInstance.post('/auth/signin', {email, password});
  console.log('data', data);
  return data;
};

type ResponsePofile = Profile & Category;

const getProfile = async (): Promise<ResponsePofile> => {
  const {data} = await axiosInstance.get('/auth/me');
  return data;
};

const getAccessToken = async (): Promise<ResponseToken> => {
  const refreshToken = await getEncryptStorage('refreshToken');

  const {data} = await axiosInstance.get('/auth/refresh', {
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });
  return data;
};

const logout = async () => {
  await axiosInstance.post('/auth/logout');
};

export {postSignup, postLogin, getProfile, getAccessToken, logout};
export type {RequestUser, ResponseToken, ResponsePofile};
