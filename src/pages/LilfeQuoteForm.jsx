import React from "react";
import "./Form.css";

export default function LifeQuoteForm() {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Enter Life Quote Details</h2>

      {/* Top Section */}
      <form className="grid-form">
        <div className="form-group">
          <label>Search Life Lead:</label>
          <input type="text" placeholder="SEARCH LIFE LEAD" />
        </div>
        <div className="form-group">
          <label>PAN Number:</label>
          <input type="text" placeholder="PAN NUMBER" />
        </div>
        <div className="form-group">
          <label>Business Type:</label>
          <select>
            <option>Select...</option>
            <option>New</option>
            <option>Renewal</option>
          </select>
        </div>
        <div className="form-group">
          <label>Quote Status:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Quote Created By:</label>
          <select>
            <option>Select...</option>
            <option>Agent</option>
            <option>Broker</option>
            <option>Direct</option>
          </select>
        </div>
      </form>

      <div style={{ textAlign: "center", margin: "15px 0" }}>
        <button className="btn primary">Get Client Details</button>
      </div>

      {/* Table Section */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "10px",
          }}
        >
          <thead>
            <tr style={{ background: "#0d6efd", color: "#fff" }}>
              <th style={thStyle}>Company Name</th>
              <th style={thStyle}>Sum Assured</th>
              <th style={thStyle}>Regular Pay</th>
              <th style={thStyle}>5 Pay</th>
              <th style={thStyle}>10 Pay</th>
              <th style={thStyle}>Pay till 60 Age</th>
              <th style={thStyle}>Other Premium</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, idx) => (
              <tr key={idx}>
                <td style={tdStyle}>
                  <select>
                    <option>Select Company</option>
                    <option>LIC</option>
                    <option>HDFC Life</option>
                    <option>ICICI Prudential</option>
                  </select>
                </td>
                <td style={tdStyle}>
                  <input type="text" />
                </td>
                <td style={tdStyle}>
                  <input type="text" />
                </td>
                <td style={tdStyle}>
                  <input type="text" />
                </td>
                <td style={tdStyle}>
                  <input type="text" />
                </td>
                <td style={tdStyle}>
                  <input type="text" />
                </td>
                <td style={tdStyle}>
                  <input type="text" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Other Details */}
      <div style={{ marginTop: "20px" }}>
        <h3
          style={{
            textAlign: "center",
            marginBottom: "15px",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Other Details for Life Quote
        </h3>

        <form className="grid-form">
          <div className="form-group">
            <label>Policy Term:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input type="number" />
          </div>
          <div className="form-group">
            <label>Gender:</label>
            <select>
              <option>Select...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Transgender</option>
            </select>
          </div>
          <div className="form-group">
            <label>Annual Income:</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Smoking Status:</label>
            <select>
              <option>Select...</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group">
            <label>PED Status:</label>
            <select>
              <option>Select...</option>
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div className="form-group" style={{ gridColumn: "span 2" }}>
            <label>Remarks:</label>
            <input type="text" />
          </div>
        </form>
      </div>

      {/* Buttons */}
      <div className="btn-row" style={{ marginTop: "20px" }}>
        <button type="submit" className="btn primary">
          Submit
        </button>
        <button type="reset" className="btn danger">
          Reset
        </button>
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
