import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Placeholder from "./pages/Placeholder";
import LeadMasterForm from "./pages/LeadMasterForm";
import VehicleMasterForm from "./pages/VehicleMasterForm";
import LifeHealthMasterForm from "./pages/LifeHealthMasterForm";
import SmeMasterForm from "./pages/SmeMasterForm";
import MotorQuoteForm from "./pages/MotorQuoteForm";
import LifeQuoteForm from "./pages/LilfeQuoteForm";
import HealthQuoteForm from "./pages/HealthQuoteForm";
import DocumentUploadForm from "./pages/DocumentPayloadForm";
import PolicyUpload from "./pages/PolicyUpload";
import BusinessLoginMaster from "./pages/BusinessLoginMaster";
import PolicyMasters from "./pages/PolicyMasters";
import PointsMaster from "./pages/PointsMaster";
import PointsVerification from "./pages/PointsVerification";
import PartnerPoints from "./pages/PartnerPoints";
import PartnerPayoutProcess from "./pages/PartnerPayoutProcess";

export default function App() {
  return (
    <div className="wrapper">
      <HomeBanner />
      <Navbar />

      <Routes>
        <Route path="/" element={<div />} />
        {/* Branch Management */}
        <Route
          path="/branch/branch-master"
          element={<Placeholder title="Branch Master" />}
        />
        <Route
          path="/branch/isp-master"
          element={<Placeholder title="ISP Master" />}
        />
        <Route
          path="/branch/service-rm"
          element={<Placeholder title="Service RM" />}
        />
        <Route
          path="/branch/associate-master"
          element={<Placeholder title="Associate Master" />}
        />
        <Route
          path="/branch/client-master"
          element={<Placeholder title="Client Master" />}
        />
        <Route
          path="/branch/payout-structure"
          element={<Placeholder title="Payout Structure" />}
        />
        {/* Lead Management */}
        <Route path="/lead/lead-master" element={<LeadMasterForm />} />
        <Route path="/lead/vehicle-master" element={<VehicleMasterForm />} />
        <Route
          path="/lead/life-health-master"
          element={<LifeHealthMasterForm />}
        />
        <Route path="/lead/sme-master" element={<SmeMasterForm />} />
        {/* Quote Management */}
        <Route path="/quote/motor-quote" element={<MotorQuoteForm />} />{" "}
        <Route path="/quote/life-quote" element={<LifeQuoteForm />} />"
        <Route path="/quote/health-quote" element={<HealthQuoteForm />} />
        {/* 👈 update */}
        <Route
          path="/quote/life-quote"
          element={<Placeholder title="Life Quote" />}
        />
        <Route
          path="/quote/health-quote"
          element={<Placeholder title="Health Quote" />}
        />
        <Route
          path="/quote/sme-quote"
          element={<Placeholder title="SME Quote" />}
        />
        {/* Document Management */}
        <Route path="/docs/document-upload" element={<DocumentUploadForm />} />
        <Route path="/docs/policy-upload" element={<PolicyUpload />} />
        <Route
          path="/docs/document-upload"
          element={<Placeholder title="Document Upload" />}
        />
        <Route
          path="/docs/policy-upload"
          element={<Placeholder title="Policy Upload" />}
        />
        {/* Business Management */}
        <Route
          path="/biz/business-login-master"
          element={<BusinessLoginMaster />}
        />
        <Route path="/biz/policy-master" element={<PolicyMasters />} />
        <Route path="/biz/points-master" element={<PointsMaster />} />
        <Route path="/biz/partner-point" element={<PartnerPoints />} />
        <Route
          path="/biz/partner-point-process"
          element={<PartnerPayoutProcess />}
        />
        <Route
          path="/biz/points-verification"
          element={<PointsVerification />}
        />
        <Route
          path="/biz/business-login-master"
          element={<Placeholder title="Business Login Master" />}
        />
        <Route
          path="/biz/policy-master"
          element={<Placeholder title="Policy Master" />}
        />
        <Route
          path="/biz/points-master"
          element={<Placeholder title="Points Master" />}
        />
        <Route
          path="/biz/points-verification"
          element={<Placeholder title="Points Verification" />}
        />
        <Route
          path="/biz/partner-point"
          element={<Placeholder title="Partner Point" />}
        />
        <Route
          path="/biz/partner-point-process"
          element={<Placeholder title="Partner Point Process" />}
        />
      </Routes>

      <Footer />
    </div>
  );
}

/* Title bar extracted so Home page shows same heading */
function HomeBanner() {
  return <h1 className="title">Insurance Lead Management</h1>;
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">© {year} Insurance Lead Management System</div>
  );
}
