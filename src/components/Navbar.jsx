import { Link, useLocation } from "react-router-dom";

const MENUS = [
  { label: "Home", path: "/" },

  {
    label: "Branch Management",
    items: [
      { label: "Branch Master", path: "/branch/branch-master" },
      { label: "ISP Master", path: "/branch/isp-master" },
      { label: "Service RM", path: "/branch/service-rm" },
      { label: "Associate Master", path: "/branch/associate-master" },
      { label: "Client Master", path: "/branch/client-master" },
      { label: "Payout Structure", path: "/branch/payout-structure" },
    ],
  },

  {
    label: "Lead Management",
    items: [
      { label: "Lead Master", path: "/lead/lead-master" },
      { label: "Vehicle Master", path: "/lead/vehicle-master" },
      { label: "Life Health Master", path: "/lead/life-health-master" },
      { label: "SME Master", path: "/lead/sme-master" },
    ],
  },

  {
    label: "Quote Management",
    items: [
      { label: "Motor Quote", path: "/quote/motor-quote" },
      { label: "Life Quote", path: "/quote/life-quote" },
      { label: "Health Quote", path: "/quote/health-quote" },
      { label: "SME Quote", path: "/quote/sme-quote" },
    ],
  },

  {
    label: "Document Management",
    items: [
      { label: "Document Upload", path: "/docs/document-upload" },
      { label: "Policy Upload", path: "/docs/policy-upload" },
    ],
  },

  {
    label: "Business Management",
    items: [
      { label: "Business Login Master", path: "/biz/business-login-master" },
      { label: "Policy Master", path: "/biz/policy-master" },
      { label: "Points Master", path: "/biz/points-master" },
      { label: "Points Verification", path: "/biz/points-verification" },
      { label: "Partner Point", path: "/biz/partner-point" },
      { label: "Partner Point Process", path: "/biz/partner-point-process" },
    ],
  },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const topActive = (label, path) => {
    if (label === "Home") return pathname === "/";
    // mark active if current path starts with the group's first item prefix
    return MENUS.find((m) => m.label === label)?.items?.some((i) =>
      pathname.startsWith(i.path)
    );
  };

  return (
    <div className="nav">
      {MENUS.map((m) => (
        <div key={m.label} className="menu">
          {m.path ? (
            <Link
              to={m.path}
              className={`nav-btn ${
                topActive(m.label, m.path) ? "active" : ""
              }`}
            >
              {m.label}
            </Link>
          ) : (
            <button className={`nav-btn ${topActive(m.label) ? "active" : ""}`}>
              {m.label}
            </button>
          )}

          {m.items && (
            <div className="dropdown">
              {m.items.map((it) => (
                <Link key={it.path} to={it.path} className="drop-item">
                  {it.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
