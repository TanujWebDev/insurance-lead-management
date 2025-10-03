import React from "react";
import "./Form.css";

export default function PointsVerification() {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Points Verification</h2>

      {/* Filter/Search Section */}
      <form className="grid-form">
        <div className="form-group">
          <label>Verification Status:</label>
          <select>
            <option>-- Select --</option>
            <option>Verified</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
        </div>
        <div className="form-group">
          <label>Insurance Company Name:</label>
          <select>
            <option>-- Select --</option>
            <option>HDFC Life</option>
            <option>ICICI Lombard</option>
            <option>SBI Life</option>
            <option>Bajaj Allianz</option>
          </select>
        </div>
        <div className="form-group">
          <label>Product Class:</label>
          <select>
            <option>-- Select --</option>
            <option>Life</option>
            <option>Health</option>
            <option>Motor</option>
            <option>SME</option>
          </select>
        </div>
        <div className="form-group">
          <label>Product Type:</label>
          <select>
            <option>-- Select --</option>
            <option>Term</option>
            <option>Endowment</option>
            <option>ULIP</option>
          </select>
        </div>

        <div className="form-group">
          <label>Deal ON:</label>
          <select>
            <option>-- Select --</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Issuance Month:</label>
          <input type="month" />
        </div>
        <div className="form-group">
          <label>Login Month:</label>
          <input type="month" />
        </div>
      </form>

      <div className="btn-row" style={{ marginTop: "15px" }}>
        <button type="button" className="btn primary">
          Search
        </button>
        <button type="reset" className="btn danger">
          Reset
        </button>
        <button type="button" className="btn secondary">
          Verify All Selected
        </button>
      </div>

      {/* Table Section */}
      <div style={{ marginTop: "25px", overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr style={{ background: "#0d6efd", color: "#fff" }}>
              <th style={thStyle}></th>
              <th style={thStyle}>Policy Number</th>
              <th style={thStyle}>Client Name</th>
              <th style={thStyle}>Issuance Month</th>
              <th style={thStyle}>Insurance Company</th>
              <th style={thStyle}>Product Type</th>
              <th style={thStyle}>Deal ON</th>
              <th style={thStyle}>IRDA Amount</th>
              <th style={thStyle}>Reward Amount</th>
              <th style={thStyle}>Other Amount</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 3 }).map((_, idx) => (
              <tr key={idx}>
                <td style={tdStyle}>
                  <input type="checkbox" />
                </td>
                <td style={tdStyle}>POL00{idx + 1}</td>
                <td style={tdStyle}>Client {idx + 1}</td>
                <td style={tdStyle}>09/2025</td>
                <td style={tdStyle}>HDFC Life</td>
                <td style={tdStyle}>Life</td>
                <td style={tdStyle}>Yes</td>
                <td style={tdStyle}>₹5000</td>
                <td style={tdStyle}>₹2000</td>
                <td style={tdStyle}>₹1000</td>
                <td style={tdStyle}>Pending</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const thStyle = {
  padding: "10px",
  border: "1px solid #ddd",
  fontSize: "14px",
  textAlign: "center",
};

const tdStyle = {
  padding: "8px",
  border: "1px solid #ddd",
  textAlign: "center",
};
