import React, { useState } from 'react';
import { Form, Select, Input, Button, Upload, message } from 'antd';
import { 
  BankOutlined, 
  DollarOutlined,
  ClockCircleOutlined,
  FileTextOutlined, 
  UploadOutlined 
} from '@ant-design/icons';
import Header from './header';
const { Option } = Select;
const { TextArea } = Input;

const LoanRequestForm = () => {
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
    console.log('Form submitted:', formData);
    message.success('Loan request submitted successfully!');
  };

  const handleFileUpload = (info) => {
    let newFileList = [...info.fileList];
    newFileList = newFileList.slice(-2); // Keep only last 2 files
    setFileList(newFileList);

    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed`);
    }
  };

  const validateLoanPeriod = (_, value) => {
    if (value && (value < 1 || value > 5)) {
      return Promise.reject('Loan period must be between 1-5 years');
    }
    return Promise.resolve();
  };

  return (
    <div className="container mx-auto px-3">
      <Header/>
      <h2 className="text-2xl font-bold mb-3 text-center text-gray-800">Loan Request Form</h2>
      
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
              className="w-full"
              suffixIcon={<BankOutlined className="text-gray-400" />}
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
              className="w-full"
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
            ]}
          >
            <Input
              type="number"
              prefix={<DollarOutlined className="text-gray-400" />}
              placeholder="Enter loan amount"
              className="w-full"
              addonBefore="PKR"
            />
          </Form.Item>

          <Form.Item
            name="loanPeriod"
            label="Loan Period (Years)"
            rules={[
              { required: true, message: 'Please input loan period' },
              { validator: validateLoanPeriod }
            ]}
          >
            <Input
              type="number"
              prefix={<ClockCircleOutlined className="text-gray-400" />}
              placeholder="Enter loan period (1-5 years)"
              className="w-full"
            />
          </Form.Item>
        </div>

        <Form.Item
          name="supportingDocuments"
          label="Supporting Documents (Optional)"
          extra="Maximum 2 files allowed"
        >
          <Upload
            multiple
            fileList={fileList}
            onChange={handleFileUpload}
            beforeUpload={() => false}
            className="w-full"
          >
            <Button icon={<UploadOutlined />} className="w-full md:w-auto">
              Click to Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item
          name="additionalNotes"
          label="Additional Notes"
        >
          <TextArea
            rows={4}
            placeholder="Any additional information about your loan request"
            prefix={<FileTextOutlined className="text-gray-400" />}
            className="w-full"
          />
        </Form.Item>

        <Form.Item className="mb-0">
          <div className="flex justify-center">
            <Button
              type="primary"
              htmlType="submit"
              className="w-full md:w-auto px-8 bg-blue-600 hover:bg-blue-700"
            >
              Submit Loan Request
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoanRequestForm;