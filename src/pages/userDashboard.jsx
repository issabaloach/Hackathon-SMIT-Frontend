
import React, { useState } from 'react';
import { 
  Card, 
  Statistic, 
  Row, 
  Col, 
  Timeline, 
  Table, 
  Tag, 
  Button, 
  Modal 
} from 'antd';
import { 
  DollarOutlined, 
  FileTextOutlined, 
  ClockCircleOutlined, 
  CheckCircleOutlined 
} from '@ant-design/icons';

const UserDashboard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState(null);

  const loanApplications = [
    {
      key: '1',
      category: 'Business Startup',
      subcategory: 'Shop Assets',
      amount: 500000,
      status: 'Pending',
      date: '2024-01-15'
    },
    {
      key: '2',
      category: 'Home Construction',
      subcategory: 'Structure',
      amount: 750000,
      status: 'Approved',
      date: '2023-12-10'
    }
  ];

  const loanColumns = [
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category'
    },
    {
      title: 'Subcategory',
      dataIndex: 'subcategory',
      key: 'subcategory'
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => `PKR ${amount.toLocaleString()}`
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const color = status === 'Approved' ? 'green' : 'orange';
        return <Tag color={color}>{status}</Tag>;
      }
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record) => (
        <Button 
          type="link" 
          onClick={() => {
            setSelectedLoan(record);
            setIsModalVisible(true);
          }}
        >
          View Details
        </Button>
      )
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

      <Row gutter={16} className="mb-6">
        <Col span={8}>
          <Card>
            <Statistic
              title="Total Loan Amount"
              value={1250000}
              prefix="PKR"
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Active Loans"
              value={2}
              prefix={<FileTextOutlined />}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <Statistic
              title="Upcoming Payments"
              value={45000}
              prefix="PKR"
              valueStyle={{ color: '#cf1322' }}
            />
          </Card>
        </Col>
      </Row>

      <Card title="Loan Applications" className="mb-6">
        <Table 
          columns={loanColumns} 
          dataSource={loanApplications} 
        />
      </Card>

      <Card title="Loan Timeline" className="mb-6">
        <Timeline>
          <Timeline.Item color="green">Loan Application Submitted - Business Startup (Jan 15, 2024)</Timeline.Item>
          <Timeline.Item color="green">Home Construction Loan Approved (Dec 10, 2023)</Timeline.Item>
          <Timeline.Item color="blue">Initial Consultation Scheduled (Nov 25, 2023)</Timeline.Item>
        </Timeline>
      </Card>

      <Modal
        title="Loan Details"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="back" onClick={() => setIsModalVisible(false)}>
            Close
          </Button>
        ]}
      >
        {selectedLoan && (
          <div>
            <p><strong>Category:</strong> {selectedLoan.category}</p>
            <p><strong>Subcategory:</strong> {selectedLoan.subcategory}</p>
            <p><strong>Amount:</strong> PKR {selectedLoan.amount.toLocaleString()}</p>
            <p><strong>Status:</strong> <Tag color={selectedLoan.status === 'Approved' ? 'green' : 'orange'}>{selectedLoan.status}</Tag></p>
            <p><strong>Application Date:</strong> {selectedLoan.date}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default UserDashboard;