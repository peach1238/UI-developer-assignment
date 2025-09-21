import React, { useState } from 'react';
import Nav1 from "../Assets/Nav1.svg";
import Star from "../Assets/Star.svg";
import Mode from "../Assets/Mode.svg";
import Reset from "../Assets/Reset.svg";
import Bell from "../Assets/Bell.svg";
import Search from "../Assets/Search.svg";
import s2 from "../Assets/s2.svg";

const TopHeader = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="top-header">
      {/* Left Section - Navigation */}
      <div className="header-left">
        <div className="nav-items">
          <button className="nav-button">
            <img src={Nav1} alt="icon" />
          </button>
          
          <button className="nav-button">
            <img src={Star} alt="icon" />
          </button>
          
          <div className="breadcrumb">
            <span className="breadcrumb-item">Dashboards</span>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-item active">Default</span>
          </div>
        </div>
      </div>

      {/* Center Section - Search */}
      <div className="header-center">
        <div className="search-container">
          <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            <path d="M13 13l-6-6" stroke="currentColor" strokeWidth="1.2"/>
          </svg>
          
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="search-input"
          />
          
          <div className="search-shortcut">
            <span>⌘</span>
            <span>/</span>
          </div>
        </div>
      </div>

      {/* Right Section - Actions */}
      <div className="header-right">
        <button className="header-action-btn">
          <img src={Mode} alt="icon" />
        </button>
        
        <button className="header-action-btn">
          <img src={Reset} alt="icon" />
        </button>
        
        <button className="header-action-btn notification-btn">
          <img src={Bell} alt="icon" />
          <div className="notification-dot"></div>
        </button>
        
        <button className="header-action-btn">
          <img src={Nav1} alt="icon" />
        </button>
      </div>

      <style jsx>{`
        .top-header {
          height: 64px;
          background-color: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          position: fixed;
          top: 0;
          left: 256px;
          right: 320px;
          z-index: 90;
          gap: 24px;
        }

        /* Left Section */
        .header-left {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .nav-items {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .nav-button {
          width: 36px;
          height: 36px;
          background: transparent;
          border: none;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #6b7280;
          transition: all 0.2s ease;
        }

        .nav-button:hover {
          background-color: #f3f4f6;
          color: #374151;
        }

        /* Breadcrumb */
        .breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-left: 16px;
        }

        .breadcrumb-item {
          font-size: 14px;
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s ease;
          cursor: pointer;
        }

        .breadcrumb-item:hover {
          color: #6b7280;
        }

        .breadcrumb-item.active {
          color: #111827;
          font-weight: 500;
        }

        .breadcrumb-separator {
          font-size: 14px;
          color: #d1d5db;
        }

        /* Center Section - Search - FIXED PART */
        .header-center {
          flex: 1;
          margin-left: 218px;
          display: flex;
          justify-content: center;
        }

        .search-container {
          position: relative;
          width: 100%;
          max-width: 320px;
        }

        .search-input {
    width: 44%;
    height: 33px;
    padding: 0 65px 0 36px;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 14px;
    background-color: #F5F5F4;
    transition: all 0.15s 
ease;
    outline: none;
}

        .search-input:focus {
          border-color: #3b82f6;
          background-color: #ffffff;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .search-input::placeholder {
          color: #9ca3af;
          font-size: 14px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          pointer-events: none;
          z-index: 1;
        }

        .search-shortcut {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 11px;
          color: #6b7280;
          pointer-events: none;
        }

        .search-shortcut span {
    /* width: 0px; */
    font-size: 15px;
    color: #C9C9C8;
      }

        /* Right Section */
        .header-right {
          display: flex;
          align-items: center;
          gap: 4px;
          flex-shrink: 0;
          margin-right: -24px;
        }

        .header-action-btn {
          width: 36px;
          height: 36px;
          background: transparent;
          border: none;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #6b7280;
          transition: all 0.2s ease;
          position: relative;
        }

        .header-action-btn:hover {
          background-color: #f3f4f6;
          color: #374151;
        }

        /* Notification Button */
        .notification-btn {
          position: relative;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .top-header {
            right: 0;
          }
        }

        @media (max-width: 968px) {
          .top-header {
            left: 0;
            padding: 0 16px;
          }
          
          .header-center {
            max-width: 280px;
            margin-left: 0;
          }
          
          .breadcrumb {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .header-center {
            display: none;
          }
          
          .nav-items {
            gap: 8px;
          }
          
          .header-right {
            gap: 4px;
          }
        }
          @media (max-width: 1200px) {
  .top-header {
    right: 0; /* Adjust right to 0 to fit smaller widths */
  }
}

@media (max-width: 968px) {
  .top-header {
    left: 0;
    right: 0;
    padding: 0 16px;
  }
  .header-center {
    max-width: 280px;
    margin-left: 0;
  }
  .breadcrumb {
    display: none; /* Hide breadcrumbs on smaller screens */
  }
}

@media (max-width: 640px) {
  .header-center {
    display: none; /* Hide search on very small screens */
  }
  .nav-items {
    gap: 8px;
  }
  .header-right {
    gap: 4px;
  }
}

      `}</style>
    </div>
  );
};

export default TopHeader;