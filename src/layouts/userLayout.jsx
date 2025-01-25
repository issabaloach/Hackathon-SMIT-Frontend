
import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  FileTextOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const UserLayout = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const userMenu = [
    {
      key: '/dashboard',
      icon: <HomeOutlined />,
      label: 'Dashboard'
    },
    {
      key: '/loan-applications',
      icon: <FileTextOutlined />,
      label: 'Loan Applications'
    }
  ];

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  const userDropdownMenu = (
    <Menu>
      <Menu.Item key="profile">
        <UserOutlined /> Profile
      </Menu.Item>
      <Menu.Item key="logout" danger>
        <LogoutOutlined /> Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="min-h-screen">
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <div className="logo p-4 text-center">
          <img 
            src="/saylani-logo.png" 
            alt="Saylani Logo" 
            className="mx-auto h-10"
          />
        </div>
        <Menu 
          theme="light" 
          mode="inline" 
          defaultSelectedKeys={['/dashboard']}
          onClick={handleMenuClick}
        >
          {userMenu.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white p-0 flex justify-end items-center px-4">
          <Dropdown overlay={userDropdownMenu} placement="bottomRight">
            <Avatar 
              icon={<UserOutlined />} 
              className="cursor-pointer"
            />
          </Dropdown>
        </Header>
        <Content className="m-4 p-6 bg-white rounded-lg shadow-md">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserLayout;