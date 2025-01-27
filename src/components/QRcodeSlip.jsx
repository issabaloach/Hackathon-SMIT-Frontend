import React from "react";
import PropTypes from "prop-types";
import { QRCode, Card } from "antd";
import {
  PrinterOutlined,
  FileTextOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

const QRCodeSlip = ({
  tokenNumber = "N/A",
  appointmentDate = "N/A",
  appointmentTime = "N/A",
  officeLocation = "N/A",
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg print:w-auto print:shadow-none">
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
      >
        <div className="text-center mb-4">
          <QRCode value={tokenNumber} size={200} className="mx-auto" />
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
            <EnvironmentOutlined className="mr-2 text-blue-600" />
            <span>
              <strong>Office:</strong> {officeLocation}
            </span>
          </div>
        </div>

        <div className="mt-4 text-center text-sm text-gray-500">
          Please bring this slip to your appointment.
        </div>
      </Card>
    </div>
  );
};

QRCodeSlip.propTypes = {
  tokenNumber: PropTypes.string,
  appointmentDate: PropTypes.string,
  appointmentTime: PropTypes.string,
  officeLocation: PropTypes.string,
};

export default QRCodeSlip;
