import React, { useState } from 'react';
import { Select, InputNumber, Button, Card, Carousel } from 'antd';
import { 
  BankOutlined, 
  CalculatorOutlined, 
  InfoCircleOutlined 
} from '@ant-design/icons';

const { Option } = Select;

const LoanCategories = [
  {
    name: 'Wedding Loans',
    subcategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
    maxLoan: 500000,
    period: 3
  },
  {
    name: 'Home Construction Loans',
    subcategories: ['Structure', 'Finishing', 'Loan'],
    maxLoan: 1000000,
    period: 5
  },
  {
    name: 'Business Startup Loans',
    subcategories: ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'],
    maxLoan: 1000000,
    period: 5
  },
  {
    name: 'Education Loans',
    subcategories: ['University Fees', 'Child Fees Loan'],
    maxLoan: null,
    period: 4
  }
];

const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [loanAmount, setLoanAmount] = useState(0);
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [loanPeriod, setLoanPeriod] = useState(1);
  const [calculatedLoan, setCalculatedLoan] = useState(null);

  const calculateLoan = () => {
    if (!selectedCategory || !loanAmount) return;

    const category = LoanCategories.find(cat => cat.name === selectedCategory);
    const monthlyInterestRate = 0.01; // 1% monthly rate
    const totalMonths = loanPeriod * 12;

    const principalAmount = loanAmount - initialDeposit;
    const monthlyPayment = principalAmount * 
      (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / 
      (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);

    setCalculatedLoan({
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(monthlyPayment * totalMonths),
      interestPaid: Math.round(monthlyPayment * totalMonths - principalAmount)
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Saylani Welfare Microfinance</h1>
        <p className="mt-2">Empowering Dreams, Transforming Lives</p>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Loan Categories Carousel */}
          <div>
            <Carousel autoplay>
              {LoanCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="p-4 bg-white rounded-lg shadow-md"
                >
                  <div className="flex items-center">
                    <BankOutlined className="text-4xl text-blue-600 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p>Max Loan: {category.maxLoan ? `PKR ${category.maxLoan.toLocaleString()}` : 'Variable'}</p>
                      <p>Loan Period: {category.period} Years</p>
                    </div>
                  </div>
                </Card>
              ))}
            </Carousel>
          </div>

          {/* Loan Calculator */}
          <Card 
            title={
              <div className="flex items-center">
                <CalculatorOutlined className="mr-2" /> 
                Loan Calculator
              </div>
            }
            className="bg-white rounded-lg shadow-md"
          >
            <div className="space-y-4">
              <Select
                style={{ width: '100%' }}
                placeholder="Select Loan Category"
                onChange={(value) => {
                  setSelectedCategory(value);
                  setSelectedSubcategory(null);
                }}
              >
                {LoanCategories.map(category => (
                  <Option key={category.name} value={category.name}>
                    {category.name}
                  </Option>
                ))}
              </Select>

              {selectedCategory && (
                <Select
                  style={{ width: '100%' }}
                  placeholder="Select Subcategory"
                  onChange={setSelectedSubcategory}
                >
                  {LoanCategories
                    .find(cat => cat.name === selectedCategory)
                    .subcategories.map(sub => (
                      <Option key={sub} value={sub}>{sub}</Option>
                    ))
                  }
                </Select>
              )}

              <InputNumber
                style={{ width: '100%' }}
                placeholder="Loan Amount"
                formatter={value => `PKR ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/PKR\s?|(,*)/g, '')}
                onChange={setLoanAmount}
              />

              <InputNumber
                style={{ width: '100%' }}
                placeholder="Initial Deposit"
                formatter={value => `PKR ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/PKR\s?|(,*)/g, '')}
                onChange={setInitialDeposit}
              />

              <Select
                style={{ width: '100%' }}
                placeholder="Loan Period (Years)"
                onChange={setLoanPeriod}
              >
                {[1, 2, 3, 4, 5].map(year => (
                  <Option key={year} value={year}>{year} Year{year > 1 ? 's' : ''}</Option>
                ))}
              </Select>

              <Button 
                type="primary" 
                block 
                onClick={calculateLoan}
                disabled={!selectedCategory || !selectedSubcategory || !loanAmount}
              >
                Calculate Loan
              </Button>

              {calculatedLoan && (
                <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Loan Breakdown</h4>
                  <p>Monthly Payment: PKR {calculatedLoan.monthlyPayment.toLocaleString()}</p>
                  <p>Total Payment: PKR {calculatedLoan.totalPayment.toLocaleString()}</p>
                  <p>Total Interest: PKR {calculatedLoan.interestPaid.toLocaleString()}</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>

      <footer className="bg-blue-800 text-white py-4 text-center mb-9">
        <p>© 2024 Saylani Welfare Microfinance. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;