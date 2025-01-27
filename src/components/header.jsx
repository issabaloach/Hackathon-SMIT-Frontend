import React from "react";
import { Button, Menu, Dropdown } from "antd";
import {
  DownOutlined,
  UserOutlined,
  LogoutOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router";

const Header = ({ isLoggedIn, onLogout }) => {
  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key="3" icon={<LogoutOutlined />} onClick={onLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="container mt-auto">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="https://saylaniwelfareusa.com/static/media/logo_saylaniwelfareusa.22bf709605809177256c.png" // Replace with your logo URL
            alt="Saylani Welfare"
            className="h-10 mr-3"
          />
        </div>
        {/* Navigation & User Options */}
        <div className="flex items-center space-x-4">
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition">
              Home
            </Link>
            <Link to="/calculator" className="hover:text-blue-200 transition">
              Calculator
            </Link>
            <Link to="/loanform" className="hover:text-blue-200 transition">
              Request Loan
            </Link>
            <Link to="/guarantorform" className="hover:text-blue-200 transition">
              Guarantor Form
            </Link>
          </div>

          {/* User Section */}
          {isLoggedIn ? (
            <Dropdown overlay={menu} trigger={["click"]}>
              <Button
                type="text"
                className="text-white hover:bg-blue-700 focus:bg-blue-700"
              >
                Account <DownOutlined />
              </Button>
            </Dropdown>
          ) : (
            <Button
              type="primary"
              className="bg-white text-blue-600 hover:bg-gray-100 focus:bg-gray-200"
              href="/login"
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
