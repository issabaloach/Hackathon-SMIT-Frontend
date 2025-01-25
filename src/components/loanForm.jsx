import React, { useState } from 'react';
import { Form, Select, Input, Button, Upload, message } from 'antd';
import { 
  BankOutlined, 
  UserOutlined, 
  HomeOutlined, 
  FileTextOutlined, 
  UploadOutlined 
} from '@ant-design/icons';

const { Option } = Select;

const LoanRequestForm = ({ onSubmit }) => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([]);

  const loanCategories = {
    'Wedding': ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
    'Home Construction': ['Structure', 'Finishing', 'Loan'],
    'Business Startup': ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'],
    'Education': ['University Fees', 'Child Fees Loan']
  };

  const handleSubmit = (values) => {
    const formData = {
      ...values,
      supportingDocuments: fileList.map(file => file.name)
    };
    onSubmit(formData);
  };

  const handleFileUpload = (info) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-2);
    newFileList = newFileList.map(file => {
      if (file.response) {
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed`);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Loan Request Form</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        className="space-y-4"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <Form.Item
            name="loanCategory"
            label="Loan Category"
            rules={[{ required: true, message: 'Please select a loan category' }]}
          >
            <Select 
              placeholder="Select Loan Category" 
              prefix={<BankOutlined className="text-gray-400" />}
            >
              {Object.keys(loanCategories).map(category => (
                <Option key={category} value={category}>{category}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="loanSubcategory"
            label="Loan Subcategory"
            dependencies={['loanCategory']}
            rules={[{ required: true, message: 'Please select a loan subcategory' }]}
          >
            <Select 
              placeholder="Select Loan Subcategory"
              disabled={!form.getFieldValue('loanCategory')}
            >
              {form.getFieldValue('loanCategory') && 
                loanCategories[form.getFieldValue('loanCategory')].map(subcategory => (
                  <Option key={subcategory} value={subcategory}>{subcategory}</Option>
                ))
              }
            </Select>
          </Form.Item>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Form.Item
            name="loanAmount"
            label="Loan Amount"
            rules={[
              { required: true, message: 'Please input loan amount' },
              { type: 'number', min: 1, message: 'Loan amount must be positive' }
            ]}
          >
            <Input 
              type="number" 
              prefix={<span className="text-gray-400">PKR</span>} 
              placeholder="Enter loan amount"
            />
          </Form.Item>

          <Form.Item
            name="loanPeriod"
            label="Loan Period (Years)"
            rules={[
              { required: true, message: 'Please select loan period' },
              { type: 'number', min: 1, max: 5, message: 'Loan period must be between 1-5 years' }
            ]}
          >
            <Input 
              type="number" 
              prefix={<FileTextOutlined className="text-gray-400" />} 
              placeholder="Enter loan period"
            />
          </Form.Item>
        </div>

        <Form.Item
          name="supportingDocuments"
          label="Supporting Documents (Optional)"
        >
          <Upload
            multiple
            beforeUpload={() => false}
            onChange={handleFileUpload}
            fileList={fileList}
          >
            <Button icon={<UploadOutlined />}>Upload Documents</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="additionalNotes"
          label="Additional Notes"
        >
          <Input.TextArea 
            rows={4} 
            placeholder="Any additional information about your loan request"
          />
        </Form.Item>

        <Form.Item className="text-center">
          <Button 
            type="primary" 
            htmlType="submit" 
            className="w-full md:w-auto px-8 py-2 bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Submit Loan Request
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoanRequestForm;