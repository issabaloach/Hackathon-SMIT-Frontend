
import React, { useState } from 'react';
import { Layout, Menu, Avatar, Dropdown, Badge } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  FileTextOutlined, 
  BellOutlined, 
  LogoutOutlined 
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const adminMenu = [
    {
      key: '/admin/dashboard',
      icon: <HomeOutlined />,
      label: 'Dashboard'
    },
    {
      key: '/admin/applications',
      icon: <FileTextOutlined />,
      label: 'Loan Applications'
    },
    {
      key: '/admin/users',
      icon: <UserOutlined />,
      label: 'User Management'
    }
  ];

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  const adminDropdownMenu = (
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
        theme="dark"
      >
        <div className="logo p-4 text-center">
          <img 
            src="/saylani-logo.png" 
            alt="Saylani Logo" 
            className="mx-auto h-10"
          />
        </div>
        <Menu 
          theme="dark" 
          mode="inline" 
          defaultSelectedKeys={['/admin/dashboard']}
          onClick={handleMenuClick}
        >
          {adminMenu.map(item => (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white p-0 flex justify-end items-center px-4">
          <div className="mr-4">
            <Badge count={3}>
              <BellOutlined className="text-xl" />
            </Badge>
          </div>
          <Dropdown overlay={adminDropdownMenu} placement="bottomRight">
            <Avatar 
              icon={<UserOutlined />} 
              className="cursor-pointer"
            />
          </Dropdown>
        </Header>
        <Content className="m-4 p-6 bg-gray-100 rounded-lg shadow-md">
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;