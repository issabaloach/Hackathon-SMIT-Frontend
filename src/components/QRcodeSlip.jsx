import React from 'react';
import { QRCode, Card } from 'antd';
import { PrinterOutlined, FileTextOutlined, CalendarOutlined, LocationOutlined } from '@ant-design/icons';

const QRCodeSlip = ({ 
  tokenNumber, 
  appointmentDate, 
  appointmentTime, 
  officeLocation 
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <Card 
        title="Loan Application Slip" 
        extra={
          <button 
            onClick={handlePrint} 
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            <PrinterOutlined /> Print
          </button>
        }
        className="print:shadow-none"
      >
        <div className="text-center mb-4">
          <QRCode 
            value={tokenNumber} 
            size={200} 
            className="mx-auto"
          />
          <p className="mt-2 text-lg font-bold text-gray-700">
            Token Number: {tokenNumber}
          </p>
        </div>

        <div className="space-y-3 text-gray-700">
          <div className="flex items-center">
            <CalendarOutlined className="mr-2 text-blue-600" />
            <span>
              <strong>Date:</strong> {appointmentDate}
            </span>
          </div>

          <div className="flex items-center">
            <FileTextOutlined className="mr-2 text-blue-600" />
            <span>
              <strong>Time:</strong> {appointmentTime}
            </span>
          </div>

          <div className="flex items-center">
            <LocationOutlined className="mr-2 text-blue-600" />
            <span>
              <strong>Office:</strong> {officeLocation}
            </span>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          Please bring this slip to your appointment
        </div>
      </Card>
    </div>
  );
};

export default QRCodeSlip;