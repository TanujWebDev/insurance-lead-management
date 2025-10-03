import React from "react";
import "./Form.css";

export default function DocumentUploadForm() {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Document Management Section</h2>

      {/* Client Info */}
      <form className="grid-form">
        <div className="form-group">
          <label>Client Name:</label>
          <input type="text" placeholder="Enter client name" />
        </div>
        <div className="form-group">
          <label>PAN Number:</label>
          <input type="text" placeholder="Enter PAN number" />
        </div>
        <div className="form-group" style={{ gridColumn: "span 2" }}>
          <label>Remarks (if any):</label>
          <input type="text" placeholder="Remarks" />
        </div>
      </form>

      <h3 style={{ marginTop: "20px", color: "#0d6efd" }}>
        Upload Required Documents:
      </h3>
      <form className="grid-form">
        <div className="form-group">
          <label>PAN Card:</label>
          <input type="file" />
        </div>
        <div className="form-group">
          <label>Aadhar Card:</label>
          <input type="file" />
        </div>
        <div className="form-group">
          <label>Driving License:</label>
          <input type="file" />
        </div>
        <div className="form-group">
          <label>Passport:</label>
          <input type="file" />
        </div>
        <div className="form-group">
          <label>Registration Certificate:</label>
          <input type="file" />
        </div>
        <div className="form-group">
          <label>Previous Policy:</label>
          <input type="file" />
        </div>
        <div className="form-group">
          <label>Current Policy:</label>
          <input type="file" />
        </div>
        <div className="form-group">
          <label>Bank Proof:</label>
          <input type="file" />
        </div>
      </form>

      <h3 style={{ marginTop: "20px", color: "#0d6efd" }}>
        Upload Other Documents (Optional):
      </h3>
      <form>
        <div className="form-group">
          <input type="file" />
        </div>
      </form>

      {/* Buttons */}
      <div className="btn-row" style={{ marginTop: "20px" }}>
        <button type="button" className="btn secondary">
          + Add Document
        </button>
        <button type="submit" className="btn primary">
          Upload Documents
        </button>
      </div>
    </div>
  );
}
