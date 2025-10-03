import React from "react";
import "./Form.css";

export default function HealthQuoteForm() {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Enter Health Quote Details</h2>

      {/* Top Section */}
      <form className="grid-form">
        <div className="form-group">
          <label>Search Health Lead:</label>
          <input type="text" placeholder="SEARCH HEALTH LEAD" />
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
              <th style={thStyle}>2 Year Pay</th>
              <th style={thStyle}>3 Year Pay</th>
              <th style={thStyle}>Product Name</th>
              <th style={thStyle}>Select Addon</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 5 }).map((_, idx) => (
              <tr key={idx}>
                <td style={tdStyle}>
                  <select>
                    <option>Select Company</option>
                    <option>Star Health</option>
                    <option>HDFC Ergo Health</option>
                    <option>Care Health</option>
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
                  <input type="text" placeholder="Product Name" />
                </td>
                <td style={tdStyle}>
                  <select>
                    <option>Select Addon</option>
                    <option>Critical Illness</option>
                    <option>Hospital Cash</option>
                    <option>Maternity</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Renewal Details Section */}
      <div style={{ marginTop: "25px", textAlign: "center" }}>
        <label
          style={{
            display: "block",
            fontWeight: "600",
            marginBottom: "10px",
            fontSize: "16px",
          }}
        >
          Renewal Details Quote
        </label>
        <input
          type="text"
          style={{ width: "50%", padding: "8px" }}
          placeholder="Enter Renewal Details"
        />
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
