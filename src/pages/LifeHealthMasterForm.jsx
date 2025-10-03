import React from "react";
import "./Form.css"; // same css as other forms

export default function LifeHealthMasterForm() {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Enter Life Health Client Details</h2>
      <form className="grid-form">
        {/* Row 1 */}
        <div className="form-group">
          <label>Product Type:</label>
          <select>
            <option>Select...</option>
            <option>Life</option>
            <option>Health</option>
            <option>Term</option>
          </select>
        </div>
        <div className="form-group">
          <label>Client Name:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Registration No/Pan No.:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Family Size:</label>
          <select>
            <option>Select...</option>
            <option>1 Member</option>
            <option>2 Members</option>
            <option>3 Members</option>
            <option>4 Members</option>
            <option>5+</option>
          </select>
        </div>

        {/* Row 2 */}
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
          <label>Date of Birth:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Annual Income:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Sum Assured:</label>
          <input type="text" />
        </div>

        {/* Row 3 */}
        <div className="form-group">
          <label>State/City:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Occupation:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Qualification:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Pre-existing Disease:</label>
          <select>
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Row 4 */}
        <div className="form-group">
          <label>Disease Details:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Smoking:</label>
          <select>
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Smoking Details:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Spouse Name:</label>
          <input type="text" />
        </div>

        {/* Row 5 */}
        <div className="form-group">
          <label>Spouse Date of Birth:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Child 1 Name:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Child 1 Date of Birth:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Child 2 Name:</label>
          <input type="text" />
        </div>

        {/* Row 6 */}
        <div className="form-group">
          <label>Child 2 Date of Birth:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Child 3 Name:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Child 3 Date of Birth:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Remarks:</label>
          <input type="text" />
        </div>
      </form>

      <div className="btn-row">
        <button type="submit" className="btn primary">
          Submit
        </button>
      </div>
    </div>
  );
}
