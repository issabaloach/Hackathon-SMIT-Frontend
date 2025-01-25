
import React, { useState } from 'react';
import { Form, Input, Button, Divider, message } from 'antd';
import { 
  MailOutlined, 
  LockOutlined, 
  GoogleOutlined, 
  FacebookOutlined 
} from '@ant-design/icons';
import { Link } from 'react-router';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      // Simulated login logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      message.success('Login Successful');
    } catch (error) {
      message.error('Login Failed');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (platform) => {
    message.info(`Logging in with ${platform}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Saylani Microfinance
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to continue
          </p>
        </div>

        <Form
          layout="vertical"
          onFinish={handleSubmit}
          className="space-y-4"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email' },
              { type: 'email', message: 'Invalid email format' }
            ]}
          >
            <Input 
              prefix={<MailOutlined className="text-gray-400" />} 
              placeholder="Email Address" 
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your password' }
            ]}
          >
            <Input.Password 
              prefix={<LockOutlined className="text-gray-400" />} 
              placeholder="Password" 
            />
          </Form.Item>

          <div className="flex justify-between items-center">
            <Form.Item name="remember" valuePropName="checked" className="mb-0">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Forgot Password?
              </a>
            </Form.Item>
          </div>

          <Form.Item>
            <Button 
              type="primary" 
              htmlType="submit" 
              loading={loading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <Divider plain>Or Login With</Divider>

        <div className="flex justify-center space-x-4">
          <Button 
            icon={<GoogleOutlined />} 
            onClick={() => handleSocialLogin('Google')}
            className="flex items-center justify-center"
          >
            Google
          </Button>
          <Button 
            icon={<FacebookOutlined />} 
            onClick={() => handleSocialLogin('Facebook')}
            className="flex items-center justify-center"
          >
            Facebook
          </Button>
        </div>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account? <Link to="/register" className="text-blue-600 hover:text-blue-800">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;