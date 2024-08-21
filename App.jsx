import React from "react";
import "./App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>หน้าหลัก</li>
        <li>ส่งเอกสาร</li>
        <li>ติดตามเอกสาร</li>
        <li>ศูนย์ช่วยเหลือ</li>
        <li>ติดต่อเรา</li>
        <li>ตั้งค่า</li>
        <li>ออกจากระบบ</li>
      </ul>
    </div>
  );
};

const DocumentTable = () => {
  const documents = [
    { id: "001", name: "เอกสารสัญญาเช่าห้องพัก", type: "ประเภทเอกสารหนังสือสัญญาเช่าห้องพัก", date: "11/07/2024", status: "ผ่าน" },
    { id: "002", name: "เอกสารสัญญาเช่าห้องพัก", type: "ประเภทเอกสารหนังสือสัญญาเช่าห้องพัก", date: "10/07/2024", status: "ยังไม่ผ่าน" },
    { id: "003", name: "เอกสารสัญญาเช่าห้องพัก", type: "ประเภทเอกสารหนังสือสัญญาเช่าห้องพัก", date: "12/07/2024", status: "ผ่าน" },
    { id: "004", name: "เอกสารสัญญาเช่าห้องพัก", type: "ประเภทเอกสารหนังสือสัญญาเช่าห้องพัก", date: "11/07/2024", status: "ผ่าน" },
    { id: "005", name: "เอกสารสัญญาเช่าห้องพัก", type: "ประเภทเอกสารหนังสือสัญญาเช่าห้องพัก", date: "13/07/2024", status: "ผ่าน" },
    { id: "006", name: "เอกสารสัญญาเช่าห้องพัก", type: "ประเภทเอกสารหนังสือสัญญาเช่าห้องพัก", date: "09/07/2024", status: "ยังไม่ผ่าน" },
    { id: "007", name: "เอกสารสัญญาเช่าห้องพัก", type: "ประเภทเอกสารหนังสือสัญญาเช่าห้องพัก", date: "12/07/2024", status: "ยังไม่ผ่าน" },
    { id: "008", name: "เอกสารสัญญาเช่าห้องพัก", type: "ประเภทเอกสารหนังสือสัญญาเช่าห้องพัก", date: "15/07/2024", status: "ผ่าน" },
  ];

  return (
    <div className="content">
      <div className="header">
        <h2>ข้อมูลเอกสาร</h2>
        <button className="upload-btn">+Upload</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>รหัส</th>
            <th>ชื่อเอกสาร</th>
            <th>ประเภทเอกสาร</th>
            <th>วันที่อัพโหลด</th>
            <th>ตรวจสอบ</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.name}</td>
              <td>{doc.type}</td>
              <td>{doc.date}</td>
              <td>
                <span className={doc.status === "ผ่าน" ? "status-pass" : "status-fail"}>
                  {doc.status}
                </span>
                <button className="upload-btn-small">+Upload</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <DocumentTable />
    </div>
  );
};

export default App;
