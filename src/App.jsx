import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Layouts
import UserLayout from './layouts/userLayout';
import AdminLayout from './layouts/adminLayout';

// Import Pages
import LandingPage from './pages/landingPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/register';
import UserDashboard from './pages/userDashboard';
import AdminDashboard from './pages/adminDashboard';
import LoanRequestForm from './components/loanForm';
import GuarantorForm from './components/guarantorForm';
import LoanCalculator from './components/loanCalculator';
import QRCodeSlip from './components/QRcodeSlip';


const App = () => {
  return (
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* User Routes */}
          <Route 
            path="/user/dashboard" 
            element={
              <UserLayout>
                <UserDashboard />
              </UserLayout>
            } 
          />
          <Route 
            path="/user/loan-request" 
            element={
              <UserLayout>
                <LoanRequestForm />
              </UserLayout>
            } 
          />
          <Route 
            path="/user/guarantors" 
            element={
              <UserLayout>
                <GuarantorForm />
              </UserLayout>
            } 
          />

          {/* Admin Routes */}
          <Route 
            path="/admin/dashboard" 
            element={
              <AdminLayout>
                <AdminDashboard />
              </AdminLayout>
            } 
          />

          <Route path='/calculator'
          element={
            <LoanCalculator/>
          }
          />
           <Route path='/loanform'
          element={
            <LoanRequestForm>
              <QRCodeSlip/>
            </LoanRequestForm>
          }
          />
           <Route path='/guarantorform'
          element={
            <GuarantorForm/>
          }
          />

          {/* Catch-all Redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
  );
};

export default App;
