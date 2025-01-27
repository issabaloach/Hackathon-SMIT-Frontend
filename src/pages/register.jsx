import { Form, Input, Button, message, Select, Checkbox } from "antd"
import { UserOutlined, MailOutlined, LockOutlined, PhoneOutlined, IdcardOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const { Option } = Select

const RegisterPage = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    try {
      console.log("Registration values:", values)
      message.success("Registration Successful")
      navigate("/")
    } catch (error) {
      message.error("Registration Failed")
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create Your Account</h2>
          <p className="mt-2 text-sm text-gray-600">Start your financial journey with Saylani Microfinance</p>
        </div>

        <Form form={form} layout="vertical" onFinish={handleSubmit} className="space-y-4">
          <Form.Item
            name="fullName"
            rules={[
              { required: true, message: "Please input your full name" },
              { min: 3, message: "Name must be at least 3 characters" },
            ]}
          >
            <Input prefix={<UserOutlined className="text-gray-400" />} placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input prefix={<MailOutlined className="text-gray-400" />} placeholder="Email Address" />
          </Form.Item>

          <Form.Item
            name="cnic"
            rules={[
              { required: true, message: "Please input your CNIC number" },
              {
                pattern: /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/,
                message: "Invalid CNIC format (XXXXX-XXXXXXX-X)",
              },
            ]}
          >
            <Input prefix={<IdcardOutlined className="text-gray-400" />} placeholder="CNIC (XXXXX-XXXXXXX-X)" />
          </Form.Item>

          <Form.Item
            name="phoneNumber"
            rules={[
              { required: true, message: "Please input your phone number" },
              {
                pattern: /^(92|\+92|0)?3[0-9]{9}$/,
                message: "Invalid Pakistani phone number",
              },
            ]}
          >
            <Input prefix={<PhoneOutlined className="text-gray-400" />} placeholder="Phone Number" />
          </Form.Item>

          <Form.Item name="city" rules={[{ required: true, message: "Please select your city" }]}>
            <Select placeholder="Select City">
              {["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"].map((city) => (
                <Option key={city} value={city}>
                  {city}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your password" },
              { min: 8, message: "Password must be at least 8 characters" },
              {
                validator: (_, value) =>
                  value && /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)
                    ? Promise.resolve()
                    : Promise.reject("Password must include letters and numbers"),
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject("Please accept the terms and conditions"),
              },
            ]}
          >
            <Checkbox>I agree to the Terms and Conditions</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full bg-blue-600 hover:bg-blue-700" loading={loading}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default RegisterPage
