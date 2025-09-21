import React, { useState } from "react";
import "./Sidebar.css";
import IconSet from "../Assets/IconSet.svg";
import Dot from "../Assets/Dot.svg";
import Default from "../Assets/Default.svg";
import Ecom from "../Assets/Ecom.svg";
import Proj from "../Assets/Proj.svg";
import Book from "../Assets/Book.svg";
import Left from "../Assets/arrow_left.svg";
import Down from "../Assets/down-arrow.svg";
import User from "../Assets/user_pro.svg";
import Account from "../Assets/Account.svg";
import Corp from "../Assets/Corp.svg";
import Social from "../Assets/Social.svg";
import Blog from "../Assets/Blog.svg";



const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("Favorites");
  const [expandedItems, setExpandedItems] = useState(["User Profile"]);

  const toggleExpanded = (itemName) => {
    setExpandedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((item) => item !== itemName)
        : [...prev, itemName]
    );
  };

  return (
    <div className="sidebar">
      {/* Logo Section */}
      <div className="logo-section">
        <div className="logo-icon">
          <img src={IconSet} alt="icon" />
        </div>
        <span className="logo-text">ByeWind</span>
      </div>

      {/* Favorites Section */}
      <div className="nav-section">
        <div className="section-tabs">
          <span
            className={`tab ${activeTab === "Favorites" ? "active" : ""}`}
            onClick={() => setActiveTab("Favorites")}
          >
            Favorites
          </span>
          <span
            className={`tab ${activeTab === "Recently" ? "active" : ""}`}
            onClick={() => setActiveTab("Recently")}
          >
            Recently
          </span>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <img src={Dot} alt="icon" />
            Overview
          </li>
          <li className="nav-item">
            <img src={Dot} alt="icon" />
            Projects
          </li>
        </ul>
      </div>

      {/* Dashboards Section */}
      <div className="nav-section">
        <h3 className="section-title">Dashboards</h3>
        <ul className="nav-list">
          <li className="nav-item active">
            <div className="active-indicator"></div>
                      <img src={Default} alt="icon" />

            Default
          </li>
          <li className="nav-item">
                      <img src={Left} alt="icon" />

                      <img src={Ecom} alt="icon" />

            eCommerce
          </li>
          <li className="nav-item">
                      <img src={Left} alt="icon" />

                      <img src={Proj} alt="icon" />

            Projects
          </li>
          <li className="nav-item">
                      <img src={Left} alt="icon" />

                      <img src={Book} alt="icon" />

            Online Courses
          </li>
        </ul>
      </div>

      {/* Pages Section */}
      <div className="nav-section">
        <h3 className="section-title">Pages</h3>
        <ul className="nav-list">
          <li
            className={`nav-item expandable ${
              expandedItems.includes("User Profile") ? "expanded" : ""
            }`}
            onClick={() => toggleExpanded("User Profile")}
          >
            <div className="nav-item-content">
                        <img src={Down} alt="icon" />
          <img src={User} alt="icon" />

              User Profile
            </div>
          </li>
          {expandedItems.includes("User Profile") && (
            <ul className="sub-nav-list">
              <li className="sub-nav-item">Overview</li>
              <li className="sub-nav-item">Projects</li>
              <li className="sub-nav-item">Campaigns</li>
              <li className="sub-nav-item">Documents</li>
              <li className="sub-nav-item">Followers</li>
            </ul>
          )}
          <li className="nav-item">
          <img src={Left} alt="icon" />

          <img src={Account} alt="icon" />
            
            Account
          </li>
          <li className="nav-item">
                      <img src={Left} alt="icon" />
          <img src={Corp} alt="icon" />

            Corporate
          </li>
          <li className="nav-item">
                                  <img src={Left} alt="icon" />
                      <img src={Blog} alt="icon" />

            Blog
          </li>
          <li className="nav-item">
                      <img src={Left} alt="icon" />
                      <img src={Social} alt="icon" />
           
            Social
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
