import { axiosInstance } from '.';

export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance('post', '/api/users/login', payload);
    return response;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance(
      'post',
      '/api/users/register',
      payload
    );
    return response;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};
