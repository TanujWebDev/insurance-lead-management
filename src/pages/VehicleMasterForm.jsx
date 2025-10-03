import React from "react";
import "./Form.css"; // same css

export default function VehicleMasterForm() {
  return (
    <div className="form-wrapper">
      <h2 className="form-title">Enter Vehicle Details</h2>
      <form className="grid-form">
        {/* Row 1 */}
        <div className="form-group">
          <label>Registration No.:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Product Type:</label>
          <select>
            <option>Select...</option>
            <option>Car</option>
            <option>Bike</option>
            <option>Commercial Vehicle</option>
          </select>
        </div>
        <div className="form-group">
          <label>Registration Date:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Main Client Name:</label>
          <input type="text" />
        </div>

        {/* Row 2 */}
        <div className="form-group">
          <label>Name As per Authority:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Insurance Company:</label>
          <select>
            <option>Select...</option>
            <option>LIC</option>
            <option>ICICI Lombard</option>
            <option>HDFC Ergo</option>
            <option>SBI General</option>
          </select>
        </div>
        <div className="form-group">
          <label>Previous Policy Expiry Date:</label>
          <input type="date" />
        </div>
        <div className="form-group">
          <label>Policy No:</label>
          <input type="text" />
        </div>

        {/* Row 3 */}
        <div className="form-group">
          <label>Previous IDV Cover:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>CNG/LPG/Electric Kit Value:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Previous NCB:</label>
          <select>
            <option>Select...</option>
            <option>0%</option>
            <option>20%</option>
            <option>25%</option>
            <option>35%</option>
            <option>45%</option>
            <option>50%</option>
          </select>
        </div>
        <div className="form-group">
          <label>Vahan Status:</label>
          <select>
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Row 4 */}
        <div className="form-group">
          <label>Claim Status:</label>
          <select>
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Loan Status:</label>
          <select>
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Valid Licence:</label>
          <select>
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className="form-group">
          <label>Existing PA Cover:</label>
          <select>
            <option>Select...</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Row 5 */}
        <div className="form-group">
          <label>Financer Name:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Vehicle Brand:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Fuel Type:</label>
          <select>
            <option>Select...</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>CNG</option>
            <option>Electric</option>
          </select>
        </div>
        <div className="form-group">
          <label>Vehicle Model Variant:</label>
          <input type="text" />
        </div>

        {/* Row 6 */}
        <div className="form-group">
          <label>Cubic Capacity:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Zone:</label>
          <select>
            <option>Select...</option>
            <option>Zone A</option>
            <option>Zone B</option>
          </select>
        </div>
        <div className="form-group">
          <label>GVW:</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Engine No:</label>
          <input type="text" />
        </div>

        {/* Row 7 */}
        <div className="form-group">
          <label>Chassis No:</label>
          <input type="text" />
        </div>
        <div className="form-group" style={{ gridColumn: "span 3" }}>
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
