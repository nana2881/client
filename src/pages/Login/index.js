import React, { useState } from 'react';
import { Form, Input, Button, Radio, message } from 'antd'; // Import message from antd
import { Link, useNavigate } from 'react-router-dom';
import { LoginUser } from '../../apicalls/users';

function Login() {
  const [type, setType] = useState('donor');
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await LoginUser(values);
      if (response.success) {
        message.success(response.message);
        localStorage.setItem('token', response.token);
        navigate('/');
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-primary">
      <Form
        layout="vertical"
        className="bg-white rounded shadow grid p-5 gap-5 w-1/2"
        onFinish={onFinish}
      >
        <h1 className="uppercase text-2xl">
          <span className="text-primary">{type.toUpperCase()}-LOGIN</span>
          <hr />
        </h1>

        <Radio.Group
          onChange={(e) => setType(e.target.value)}
          value={type}
          className=""
        >
          <Radio value="donor">Donor</Radio>
          <Radio value="hospital">Hospital</Radio>
          <Radio value="organization">Organization</Radio>
        </Radio.Group>

        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input type="password" />
        </Form.Item>

        <Form.Item className="">
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>

        <Form.Item className=" text-center">
          <Link to="/register" className="text-gray-700 underline">
            Don't have an account? Register!
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
