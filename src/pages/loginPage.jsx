import  React from "react"
import { useState } from "react"
import { Form, Input, Button, message } from "antd"
import { MailOutlined, LockOutlined } from "@ant-design/icons"
import { Link, useNavigate } from "react-router-dom"

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (values = email, password ) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      console.log("Login values:", values)
      message.success("Login Successful")
      navigate("/homepage") // Navigate to home page after successful login
    } catch (error) {
      console.error("Login failed:", error)
      message.error("Login Failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Saylani Microfinance</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to continue</p>
        </div>

        <Form onFinish={handleSubmit} layout="vertical" className="space-y-4">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input prefix={<MailOutlined className="text-gray-400" />} placeholder="Email Address" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true, message: "Please input your password" },
            {type: "password", message: "Invalid password" }
          ]}>
            <Input.Password prefix={<LockOutlined className="text-gray-400" />} placeholder="Password" />
          </Form.Item>

          <div className="flex justify-between items-center">
            <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800">
              Forgot Password?
            </Link>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} className="w-full bg-blue-600 hover:bg-blue-700">
              Login
            </Button>
          </Form.Item>
        </Form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:text-blue-800">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

