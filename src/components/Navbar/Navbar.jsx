import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [resNav, toggleResNav] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className={resNav ? "res-nav-color" : undefined}>
      <aside>
        <ul>
          <li>
            <Link to="/">Features</Link>
            <div className="nav-dropdown">
              <Link to="/">Overview</Link>
              <section>
                <aside>
                  <span>
                    Time-consuming paperwork and other routine administration
                  </span>
                  <Link to="/">Automated document generation</Link>
                  <Link to="/">Secure cloud-based Console</Link>
                </aside>
                <aside>
                  <span>Complicated onboarding and compliance</span>
                  <Link to="/">Onboarding and KYC collection</Link>
                  <Link to="/">Automated reminders</Link>
                  <Link to="/">Useful integrations</Link>
                  <Link to="/">BlueMeg Sign</Link>
                </aside>
                <aside>
                  <span>Complicated onboarding and compliance</span>
                  <Link to="/">Streamlined collaboration</Link>
                  <Link to="/">Efficient reporting</Link>
                </aside>
              </section>
            </div>
          </li>
          <li>
            <Link to="/">Users</Link>
            <div className="nav-dropdown nav-dropdown-fixed">
              <Link to="/">Overview</Link>
              <section>
                <aside>
                  <Link to="/">Corporates</Link>
                  <span className="nav-straight-desc">
                    Manage your group structure with ease
                  </span>

                  <Link to="/">Professional service providers</Link>
                  <span className="nav-straight-desc">
                    Automated, error-free entity management for you and your
                    clients
                  </span>
                </aside>
              </section>
            </div>
          </li>
          <li>
            <Link to="/">Pricing</Link>
            <div className="nav-dropdown nav-dropdown-fixed">
              <section>
                <aside>
                  <Link to="/">All</Link>
                  <Link to="/">PSG Grant</Link>
                </aside>
              </section>
            </div>
          </li>
          <li>
            <Link to="/">Resources</Link>
            <div className="nav-dropdown nav-dropdown-fixed">
              <section>
                <aside>
                  <Link to="/">News and Announcements</Link>
                  <Link to="/">Featured Insights</Link>
                </aside>
              </section>
            </div>
          </li>
        </ul>
      </aside>
      <div id="logo-area" onClick={() => navigate("/")}></div>
      <aside>
        <ul>
          <li>
            <Link to="/">Clients</Link>
            <div className="nav-dropdown nav-dropdown-fixed">
              <Link to="/">Overview</Link>
              <section>
                <aside>
                  <Link to="/">Case study</Link>
                </aside>
              </section>
            </div>
          </li>
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/" id="btn-nav-link">
              Schedule a Demo
            </Link>
          </li>
        </ul>
      </aside>
      <section id="responsive-nav">
        <div
          id="res-nav-icon"
          className={resNav ? "res-nav-icon-change" : undefined}
          onClick={() => toggleResNav(!resNav)}
        ></div>
        <ul className={resNav ? "triggered-res-nav" : undefined}>
          <li>
            <Link to="/">
              Features
              <div className="res-nav-dropdown"></div>
            </Link>
            <ul>
              <li>
                <Link to="/">Overview</Link>
              </li>
              <li>
                <Link to="/">Automated document generation</Link>
              </li>
              <li>
                <Link to="/">Secure cloud-based Console</Link>
              </li>
              <li>
                <Link to="/">Onboarding and KYC collection</Link>
              </li>
              <li>
                <Link to="/">Automated reminders</Link>
              </li>
              <li>
                <Link to="/">Useful integrations</Link>
              </li>
              <li>
                <Link to="/">BlueMeg Sign</Link>
              </li>
              <li>
                <Link to="/">Streamlined collaboration</Link>
              </li>
              <li>
                <Link to="/">Efficient reporting</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              Users <div className="res-nav-dropdown"></div>
            </Link>
            <ul>
              <li>
                <Link to="/">Overview</Link>
              </li>
              <li>
                <Link to="/">Corporates</Link>
              </li>
              <li>
                <Link to="/">Professional service providers</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              Pricing <div className="res-nav-dropdown"></div>
            </Link>
            <ul>
              <li>
                <Link to="/">All</Link>
              </li>
              <li>
                <Link to="/">PSG Grant</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              Resources <div className="res-nav-dropdown"></div>
            </Link>
            <ul>
              <li>
                <Link to="/">News and Announcements</Link>
              </li>
              <li>
                <Link to="/">Featured Insights</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">
              Clients <div className="res-nav-dropdown"></div>
            </Link>
            <ul>
              <li>
                <Link to="/">Overview</Link>
              </li>
              <li>
                <Link to="/">Case study</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">About us</Link>
          </li>
          <li>
            <Link to="/">Schedule a Demo</Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
