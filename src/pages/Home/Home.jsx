import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="home-section-first">
        <h1>Modern Entity Management</h1>
        <h5>With BlueMeg, corporate governance doesn’t have to be a hassle</h5>
        <div id="btn-wrapper">
          <Link to="/">See more</Link>
          <Link to="/"> Schedule a Demo</Link>
        </div>
        <div id="home-image-first"></div>
      </section>
      <section id="home-section-second">
        <aside>
          <h1>Expedited processes</h1>
          <ul>
            <li>
              Automate corporate actions to save time and optimise workflows
            </li>
            <li>
              Streamline onboarding and KYC with BlueMeg’s secure and
              user-friendly Console
            </li>
            <li>
              Store information from your clients in the cloud-based Document
              Library
            </li>
            <li>
              Establish a single source of truth for your clients and your
              organisation
            </li>
            <li>
              Consolidate client management, compliance and corporate governance
              in one platform
            </li>
          </ul>
        </aside>
        <aside></aside>
      </section>
      <section id="home-section-third">
        <h1>Intuitive solutions</h1>
        <article>
          <aside>
            <h5>
              Overwhelmed by time-consuming paperwork and other routine
              administration?
            </h5>
            <div></div>
            <ul>
              <li>Automated document generation</li>
              <li>Secure cloud-based Console</li>
              <li>Extensive library of resolutions and government forms</li>
              <li>BlueMeg Sign</li>
            </ul>
          </aside>
          <aside>
            <h5>
              Struggling with complicated onboarding and compliance procedures?
            </h5>
            <div></div>
            <ul>
              <li>Onboarding and KYC Console</li>
              <li>Automated reminders</li>
              <li>Best-in-class integrations</li>
              <li>BlueMeg Sign</li>
            </ul>
          </aside>
          <aside>
            <h5>
              Searching multiple databases to find information for different
              entities?
            </h5>
            <div></div>
            <ul>
              <li>Streamlined collaboration</li>
              <li>Efficient reporting</li>
            </ul>
          </aside>
        </article>
        <Link to="/">Explore more features</Link>
      </section>
      <section id="home-section-fourth">
        <h1>Users</h1>
        <article>
          <aside>
            <div></div>
            <h5>Professional service providers</h5>
            <Link to="/">See more</Link>
          </aside>
          <aside>
            <div></div>
            <h5>Multinational corporations</h5>
            <Link to="/">See more</Link>
          </aside>
          <aside>
            <div></div>
            <h5>VC/PE funds</h5>
            <Link to="/">See more</Link>
          </aside>
        </article>
      </section>
      <section id="home-section-fifth">
        <h1>Our Partners</h1>
        <article>
          <div id="slideLeft">
            <div></div>
          </div>
          <div id="partners">
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
            <div>
              <div></div>
            </div>
          </div>
          <div id="slideRight">
            <div></div>
          </div>
        </article>
        <div id="manual-slide">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
      <section id="home-section-sixth">
        <h1>Why clients choose BlueMeg</h1>
        <article>
          <div>
            <div>
              <span>Tricor</span>
              <div></div>
            </div>
            <div id="home-clients-image"></div>
            <p>
              sed diam nonummy nibh euismod tincidunt utel laoreet dolore
              magnage sed diam nonummy nibh euismod tincidunt utel Anonummy nibh
              euismod tincidunt utel laoreet dolore magna ali amet, consectetuer
              elit, sed diam nonummy nibh euismod tincidunt utel Lorem ipsum
              dolor sit amet, consectetuer elit, sed diam nonummy nibh euismod
              tincidunt utel laoreet dolore magnage sed diam nonummy nibh
              euismod tincidunt utel...
            </p>
          </div>
          <div>
            <div>
              <span>Zedra</span>
              <div></div>
            </div>
            <div id="home-clients-image"></div>
            <p>
              , sed diam nonummy nibh euismod tincidunt utel laoreet dolore
              ma...
            </p>
          </div>
          <div>
            <span>See more</span>
          </div>
          <div>
            <div>
              <span>Mazars</span>
              <div></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy
              nibh euismod tincidunt utel...
            </p>
          </div>
          <div>
            <div>
              <span>Client</span>
              <div></div>
            </div>
            <div id="home-clients-image"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy
              nibh euismod tincidunt utel laoreet dolore ma...
            </p>
          </div>
        </article>
      </section>
      <section id="home-section-seventh">
        <h1>Schedule a demo</h1>
        <form action="" autoComplete="off">
          <span>
            Reach out to BlueMeg’s team for advice on products, services,
            pricing, and technical issues.
          </span>
          <fieldset>
            <input type="text" placeholder="Name" required />
            <select name="" id="" required>
              <option value="" disabled selected>
                Subject
              </option>
            </select>
            <input type="text" placeholder="Company" required />
            <input type="email" required placeholder="Email" />
            <input type="text" placeholder="Phone" required />
            <select name="" required id="spec-select">
              <option value="" disabled selected>
                What do you looking for?
              </option>
            </select>
            <textarea
              placeholder="Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </fieldset>
          <button>Confirm</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
