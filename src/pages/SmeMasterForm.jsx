import React from "react";
import "./Form.css"; // same css

export default function SmeMasterForm() {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Enter SME Client Details</h2>
      <form className="grid-form">
        {/* Row 1 */}
        <div className="form-group">
          <label>Product Type:</label>
          <select>
            <option>Select...</option>
            <option>Manufacturing</option>
            <option>Service</option>
            <option>Trading</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Client Name:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Registration No / PAN No:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>State / City:</label>
          <input type="text" />
        </div>
        <div className="form-group" style={{ gridColumn: "span 4" }}>
          <label>Remarks:</label>
          <input type="text" />
        </div>
      </form>

      <div className="btn-row">
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
