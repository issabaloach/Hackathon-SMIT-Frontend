import React from 'react';
import { BankOutlined } from '@ant-design/icons';
import { Card, Carousel } from 'antd';
import Header from '../components/header';
import Footer from '../components/footer';

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
  return (
    <div className="cotainer mx-auto px-2 bg-gradient-to-b from-blue-50 to-white">
      <header className="text-center">
        <Header />
      </header>

      <div className="">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-700">Saylani Welfare Microfinance</h1>
          <p className="mt-2 text-lg text-gray-600">Empowering Dreams, Transforming Lives</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Carousel autoplay>
              {LoanCategories.map((category, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center">
                    <BankOutlined className="text-5xl text-blue-600 mr-6" />
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
                      <p className="mt-2 text-gray-600">Max Loan: {category.maxLoan ? `PKR ${category.maxLoan.toLocaleString()}` : 'Variable'}</p>
                      <p className="text-gray-600">Loan Period: {category.period} Years</p>
                    </div>
                  </div>
                </Card>
              ))}
            </Carousel>
          </div>

          <div className="flex flex-col justify-center text-center bg-blue-100 rounded-2xl p-10 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700 mb-6">Why Choose Us?</h2>
            <p className="text-gray-700 mb-6">At Saylani Welfare Microfinance, we offer tailored financial solutions to help you achieve your dreams, whether it's building your home, starting a business, or pursuing education. Join us in transforming lives and communities.</p>
            <div className="space-y-6">
              <div className="flex items-center justify-center">
                <span className="text-blue-600 text-3xl mr-4">✓</span>
                <p className="text-gray-700">Flexible Loan Options</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-blue-600 text-3xl mr-4">✓</span>
                <p className="text-gray-700">Low Interest Rates</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-blue-600 text-3xl mr-4">✓</span>
                <p className="text-gray-700">Quick and Transparent Process</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPage;
