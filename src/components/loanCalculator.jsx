import React, { useState } from "react";
import { Form, Select, InputNumber, Button, Card, Typography } from "antd";
import Header from "./header";

const { Title, Text } = Typography;
const { Option } = Select;

const loanCategories = {
  Wedding: {
    subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
    maxLoan: 500000,
    periods: [1, 2, 3],
  },
  Home: {
    subcategories: ["Structure", "Finishing", "Loan"],
    maxLoan: 1000000,
    periods: [1, 3, 5],
  },
  Business: {
    subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
    maxLoan: 1000000,
    periods: [1, 3, 5],
  },
  Education: {
    subcategories: ["University Fees", "Child Fees Loan"],
    maxLoan: null,
    periods: [1, 2, 4],
  },
};

const LoanCalculator = () => {
  const [form] = Form.useForm();
  const [calculationResult, setCalculationResult] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const calculateLoan = (values) => {
    const { amount, initialDeposit, period } = values;
    const principalAmount = amount - initialDeposit;

    // Simple interest calculation
    const interestRate = 5; // 5% annual interest
    const totalInterest = principalAmount * (interestRate / 100) * period;
    const monthlyPayment = (principalAmount + totalInterest) / (period * 12);

    setCalculationResult({
      principalAmount,
      totalInterest,
      monthlyPayment,
      totalPayback: principalAmount + totalInterest,
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    form.setFieldsValue({ subcategory: undefined });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-3">
      {/* Header Component */}
      <Header />

      {/* Loan Calculator */}
      <div className="flex justify-center mt-6">
        <Card className="w-full max-w-md shadow-lg">
          <Title level={3} className="text-center text-blue-600">
            Loan Calculator
          </Title>

          <Form
            form={form}
            layout="vertical"
            onFinish={calculateLoan}
            className="space-y-4"
          >
            {/* Loan Category */}
            <Form.Item
              name="category"
              label="Loan Category"
              rules={[{ required: true, message: "Select a loan category" }]}
            >
              <Select
                placeholder="Select Category"
                onChange={handleCategoryChange}
              >
                {Object.keys(loanCategories).map((category) => (
                  <Option key={category} value={category}>
                    {category} Loan
                  </Option>
                ))}
              </Select>
            </Form.Item>

            {/* Loan Subcategory */}
            {selectedCategory && (
              <Form.Item
                name="subcategory"
                label="Loan Subcategory"
                rules={[
                  { required: true, message: "Select a loan subcategory" },
                ]}
              >
                <Select placeholder="Select Subcategory">
                  {loanCategories[selectedCategory].subcategories.map(
                    (sub) => (
                      <Option key={sub} value={sub}>
                        {sub}
                      </Option>
                    )
                  )}
                </Select>
              </Form.Item>
            )}

            {/* Loan Amount */}
            <Form.Item
              name="amount"
              label="Loan Amount"
              rules={[
                { required: true, message: "Enter loan amount" },
                () => ({
                  validator(_, value) {
                    const maxLoan = loanCategories[selectedCategory]?.maxLoan;
                    if (maxLoan && value > maxLoan) {
                      return Promise.reject(
                        new Error(
                          `Maximum loan amount is PKR ${maxLoan.toLocaleString()}`
                        )
                      );
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <InputNumber
                formatter={(value) =>
                  `PKR ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/PKR\s?|(,*)/g, "")}
                style={{ width: "100%" }}
                placeholder="Enter Loan Amount"
              />
            </Form.Item>

            {/* Initial Deposit */}
            <Form.Item
              name="initialDeposit"
              label="Initial Deposit"
              rules={[{ required: true, message: "Enter initial deposit" }]}
            >
              <InputNumber
                formatter={(value) =>
                  `PKR ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                }
                parser={(value) => value.replace(/PKR\s?|(,*)/g, "")}
                style={{ width: "100%" }}
                placeholder="Enter Initial Deposit"
              />
            </Form.Item>

            {/* Loan Period */}
            <Form.Item
              name="period"
              label="Loan Period (Years)"
              rules={[{ required: true, message: "Select loan period" }]}
            >
              <Select placeholder="Select Loan Period">
                {selectedCategory &&
                  loanCategories[selectedCategory].periods.map((period) => (
                    <Option key={period} value={period}>
                      {period} Years
                    </Option>
                  ))}
              </Select>
            </Form.Item>

            {/* Submit Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full">
                Calculate Loan
              </Button>
            </Form.Item>
          </Form>

          {/* Calculation Result */}
          {calculationResult && (
            <Card className="mt-4 bg-blue-50">
              <Title level={4}>Loan Breakdown</Title>
              <div className="space-y-2">
                <Text>
                  Principal Amount: PKR{" "}
                  {calculationResult.principalAmount.toLocaleString()}
                </Text>
                <Text>
                  Total Interest: PKR{" "}
                  {calculationResult.totalInterest.toLocaleString()}
                </Text>
                <Text>
                  Monthly Payment: PKR{" "}
                  {calculationResult.monthlyPayment.toLocaleString()}
                </Text>
                <Text strong>
                  Total Payback: PKR{" "}
                  {calculationResult.totalPayback.toLocaleString()}
                </Text>
              </div>
            </Card>
          )}
        </Card>
      </div>
    </div>
  );
};

export default LoanCalculator;
