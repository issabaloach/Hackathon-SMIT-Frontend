
import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { UserOutlined, MailOutlined, EnvironmentOutlined, IdcardOutlined } from '@ant-design/icons';
import Header from './header';

const { Option } = Select;

const GuarantorForm = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <div className="container mx-auto px-3">
      <Header/>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Guarantor Information</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="space-y-4"
      >
        {/* First Guarantor */}
        <div className="grid md:grid-cols-2 gap-4">
          <Form.Item
            name="guarantor1Name"
            label="First Guarantor Name"
            rules={[{ required: true, message: 'Please input guarantor name' }]}
          >
            <Input 
              prefix={<UserOutlined className="text-gray-400" />} 
              placeholder="Enter first guarantor's full name"
            />
          </Form.Item>

          <Form.Item
            name="guarantor1Email"
            label="First Guarantor Email"
            rules={[
              { required: true, message: 'Please input email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input 
              prefix={<MailOutlined className="text-gray-400" />} 
              placeholder="Enter first guarantor's email"
            />
          </Form.Item>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Form.Item
            name="guarantor1CNIC"
            label="First Guarantor CNIC"
            rules={[{ required: true, message: 'Please input CNIC number' }]}
          >
            <Input 
              prefix={<IdcardOutlined className="text-gray-400" />} 
              placeholder="Enter CNIC (without dashes)"
            />
          </Form.Item>

          <Form.Item
            name="guarantor1Location"
            label="First Guarantor Location"
            rules={[{ required: true, message: 'Please select location' }]}
          >
            <Select placeholder="Select guarantor's city">
              <Option value="Karachi">Karachi</Option>
              <Option value="Lahore">Lahore</Option>
              <Option value="Islamabad">Islamabad</Option>
              <Option value="Rawalpindi">Rawalpindi</Option>
              <Option value="Faisalabad">Faisalabad</Option>
            </Select>
          </Form.Item>
        </div>

        {/* Second Guarantor */}
        <div className="grid md:grid-cols-2 gap-4">
          <Form.Item
            name="guarantor2Name"
            label="Second Guarantor Name"
            rules={[{ required: true, message: 'Please input guarantor name' }]}
          >
            <Input 
              prefix={<UserOutlined className="text-gray-400" />} 
              placeholder="Enter second guarantor's full name"
            />
          </Form.Item>

          <Form.Item
            name="guarantor2Email"
            label="Second Guarantor Email"
            rules={[
              { required: true, message: 'Please input email' },
              { type: 'email', message: 'Please enter a valid email' }
            ]}
          >
            <Input 
              prefix={<MailOutlined className="text-gray-400" />} 
              placeholder="Enter second guarantor's email"
            />
          </Form.Item>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Form.Item
            name="guarantor2CNIC"
            label="Second Guarantor CNIC"
            rules={[{ required: true, message: 'Please input CNIC number' }]}
          >
            <Input 
              prefix={<IdcardOutlined className="text-gray-400" />} 
              placeholder="Enter CNIC (without dashes)"
            />
          </Form.Item>

          <Form.Item
            name="guarantor2Location"
            label="Second Guarantor Location"
            rules={[{ required: true, message: 'Please select location' }]}
          >
            <Select placeholder="Select guarantor's city">
              <Option value="Karachi">Karachi</Option>
              <Option value="Lahore">Lahore</Option>
              <Option value="Islamabad">Islamabad</Option>
              <Option value="Rawalpindi">Rawalpindi</Option>
              <Option value="Faisalabad">Faisalabad</Option>
            </Select>
          </Form.Item>
        </div>

        <Form.Item className="text-center">
          <Button 
            type="primary" 
            htmlType="submit" 
            className="w-full md:w-auto px-8 py-2 bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Submit Guarantor Information
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GuarantorForm;