
import React, { useState } from 'react';
import { 
  Card, 
  Row, 
  Col, 
  Statistic, 
  Table, 
  Select, 
  Input, 
  Tag, 
  Button, 
  Modal, 
  Tabs 
} from 'antd';
import { 
  DollarOutlined, 
  FileTextOutlined, 
  UserOutlined, 
  FilterOutlined 
} from '@ant-design/icons';

const { Option } = Select;
const { TabPane } = Tabs;
const { Search } = Input;

const AdminDashboard = () => {
  const [filterCity, setFilterCity] = useState(null);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const loanApplications = [
    {
      key: '1',
      name: 'Muhammad Ali',
      category: 'Business Startup',
      amount: 500000,
      city: 'Karachi',
      status: 'Pending',
      date: '2024-01-15'
    },
    {
      key: '2',
      name: 'Fatima Khan',
      category: 'Home Construction',
      amount: 750000,
      city: 'Lahore',
      status: 'Approved',
      date: '2023-12-10'
    },
    {
      key: '3',
      name: 'Ahmed Hassan',
      category: 'Education',
      amount: 250000,
      city: 'Islamabad',
      status: 'Review',
      date: '2024-02-01'
    }
  ];

  const applicationColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => `PKR ${amount.toLocaleString()}`
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const colorMap = {
          'Pending': 'orange',
          'Approved': 'green',
          'Review': 'blue'
        };
        return <Tag color={colorMap[status]}>{status}</Tag>;
      }
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record) => (
        <Button 
          type="link" 
          onClick={() => {
            setSelectedApplication(record);
            setIsModalVisible(true);
          }}
        >
          View Details
        </Button>
      )
    }
  ];

  const filteredApplications = filterCity 
    ? loanApplications.filter(app => app.city === filterCity)
    : loanApplications;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <Row gutter={16} className="mb-6">
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Applications"
              value={3}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Loan Amount"
              value={1500000}
              prefix="PKR"
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Pending Applications"
              value={1}
              prefix={<UserOutlined />}
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
      </Row>

      <Card 
        title="Loan Applications" 
        extra={
          <div className="flex space-x-4">
            <Select
              style={{ width: 120 }}
              placeholder="Filter by City"
              allowClear
              onChange={(value) => setFilterCity(value)}
            >
              <Option value="Karachi">Karachi</Option>
              <Option value="Lahore">Lahore</Option>
              <Option value="Islamabad">Islamabad</Option>
            </Select>
            <Search 
              placeholder="Search Applicants" 
              style={{ width: 200 }} 
            />
          </div>
        }
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab="All Applications" key="1">
            <Table 
              columns={applicationColumns} 
              dataSource={filteredApplications} 
            />
          </TabPane>
          <TabPane tab="Pending" key="2">
            <Table 
              columns={applicationColumns} 
              dataSource={filteredApplications.filter(app => app.status === 'Pending')} 
            />
          </TabPane>
          <TabPane tab="Approved" key="3">
            <Table 
              columns={applicationColumns} 
              dataSource={filteredApplications.filter(app => app.status === 'Approved')} 
            />
          </TabPane>
        </Tabs>
      </Card>

      <Modal
        title="Application Details"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="reject" type="danger">Reject</Button>,
          <Button key="approve" type="primary">Approve</Button>
        ]}
      >
        {selectedApplication && (
          <div>
            <p><strong>Name:</strong> {selectedApplication.name}</p>
            <p><strong>Category:</strong> {selectedApplication.category}</p>
            <p><strong>Amount:</strong> PKR {selectedApplication.amount.toLocaleString()}</p>
            <p><strong>City:</strong> {selectedApplication.city}</p>
            <p><strong>Status:</strong> <Tag color={selectedApplication.status === 'Approved' ? 'green' : 'orange'}>{selectedApplication.status}</Tag></p>
            <p><strong>Application Date:</strong> {selectedApplication.date}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default AdminDashboard;