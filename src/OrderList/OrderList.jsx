import React, { useState } from 'react';
import ic from "../Assets/3.svg"
import Pic from "../Assets/Pic.png"
const OrderList = () => {
  const [selectedRows, setSelectedRows] = useState(new Set([3])); // Pre-select Orlando Diggs row
  const [searchValue, setSearchValue] = useState('');

  const orderData = [
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatar: Pic },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress'
    },
    {
      id: '#CM9802',
      user: { name: 'Kate Morrison', avatar: Pic },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'Complete'
    },
    {
      id: '#CM9803',
      user: { name: 'Drew Cano', avatar:Pic },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'Pending'
    },
    {
      id: '#CM9804',
      user: { name: 'Orlando Diggs', avatar: Pic },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'Approved'
    },
    {
      id: '#CM9805',
      user: { name: 'Andi Lane', avatar: Pic },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'Rejected',
      hasExternalLink: true
    },
    // Repeat data for sample length
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatar: Pic },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress'
    },
    {
      id: '#CM9802',
      user: { name: 'Kate Morrison', avatar: Pic },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'Complete'
    },
    {
      id: '#CM9803',
      user: { name: 'Drew Cano', avatar:Pic },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'Pending'
    },
    {
      id: '#CM9804',
      user: { name: 'Orlando Diggs', avatar: Pic },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'Approved'
    },
    {
      id: '#CM9805',
      user: { name: 'Andi Lane', avatar: Pic },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'Rejected'
    }
  ];

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedRows(new Set(orderData.map((_, index) => index)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (index) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedRows(newSelected);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'In Progress': 
        return {  color: '#6366F1' };
      case 'Complete': 
        return {  color: '#059669' };
      case 'Pending': 
        return {  color: '#2563EB' };
      case 'Approved': 
        return {  color: '#B45309' };
      case 'Rejected': 
        return {  color: '#6B7280' };
      default: 
        return {  color: '#959595' };
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1 className="title">Order List</h1>
        <div className="actions">
          <div className='allBtn'>
            <button className="btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3.5V12.5M3.5 8H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="btn">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 4H14M4 8H12M6 12H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="btn">
              <img src={ic} alt="icon" />
            </button>
          </div>
          <div className="search">
            <svg className="search-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M13 13l-6-6" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr className="header-row">
              <th className="th-checkbox">
                <input
                  type="checkbox"
                  checked={selectedRows.size === orderData.length}
                  onChange={(e) => handleSelectAll(e.target.checked)}
                  className="checkbox"
                />
              </th>
              <th className="th">Order ID</th>
              <th className="th">User</th>
              <th className="th">Project</th>
              <th className="th">Address</th>
              <th className="th">Date</th>
              <th className="th">Status</th>
              <th className="th"></th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order, index) => (
              <tr key={`${order.id}-${index}`} className={selectedRows.has(index) ? 'tr selected' : 'tr'}>
                <td className="td-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedRows.has(index)}
                    onChange={() => handleSelectRow(index)}
                    className="checkbox"
                  />
                </td>
                <td className="td">
                  <span className="order-id">{order.id}</span>
                </td>
                <td className="td">
                  <div className="user">
                    <div className="avatar">
  <img src={order.user.avatar} alt={order.user.name} style={{ width: '25px', height: '25px', borderRadius: '50%' }} />
</div>

                    <span className="name">{order.user.name}</span>
                  </div>
                </td>
                <td className="td">
                  <span>{order.project}</span>
                </td>
                <td className="td">
                  <div className="address">
                    <span>{order.address}</span>
                    {order.hasExternalLink && (
                      <svg className="external" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3 9L9 3M9 3H5M9 3V7" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </td>
                <td className="td">
                  <div className="date">
                    <svg className="calendar" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="2" y="3" width="10" height="8" rx="1" stroke="#9CA3AF" strokeWidth="1.2"/>
                      <path d="M5 1V3M9 1V3M2 7H12" stroke="#9CA3AF" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    <span>{order.date}</span>
                  </div>
                </td>
                <td className="td">
                  <div 
                    className="status"
                    style={{
                      backgroundColor: getStatusStyle(order.status).backgroundColor,
                      color: getStatusStyle(order.status).color
                    }}
                  >
                    <div 
                      className="dot"
                      style={{ backgroundColor: getStatusStyle(order.status).color }}
                    ></div>
                    {order.status}
                  </div>
                </td>
                {/* Show "more" button only if this row is selected */}
                {selectedRows.has(index) && (
                  <td className="td">
                    <button className="more">
                      <svg width="16" height="4" viewBox="0 0 16 4" fill="none">
  <circle cx="2" cy="2" r="2" fill="#9CA3AF" />
  <circle cx="8" cy="2" r="2" fill="#9CA3AF" />
  <circle cx="14" cy="2" r="2" fill="#9CA3AF" />
</svg>

                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-wrapper">
        <div className="pagination">
          <button className="page-btn prev">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M8.75 3.5L5.25 7L8.75 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn">4</button>
          <button className="page-btn">5</button>

          <button className="page-btn next">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.25 3.5L8.75 7L5.25 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          // background-color: #FAFAFA;
          padding: 32px 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          margin-top:20px;
        }

        .header {
    display: flex
;
    flex-direction: column;
    justify-content: cebter;
    align-items: start;
    margin-bottom: 32px;
    width: 100%;
}
        .title {
              font-size: 20px;
          font-weight: 600;
          color: #111827;
          margin: 0;
          margin-bottom:10px;
          flex-shrink: 0;
              margin-bottom: 23px;
        }
        .allBtn{
        display:flex;
        gap:10px;
        }
.actions {
    display: flex
;
    align-items: center;
    gap: 12px;
    background: #FFFFFF;
    width: 100%;
    background: #F7F9FB;
    justify-content:space-between;
}
        .btn {
    width: 40px;
    height: 52px;
    font-size: 15px;
    background: #F7F9FB;
    border: none;
    border-radius: 6px;
    display: flex
;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #6B7280;
    transition: all 0.2s 
ease;
}

        .btn:hover {
          background: #F9FAFB;
          border-color: #D1D5DB;
        }

       .search {
    position: relative;
    width: 112px;
    margin-right: 63px;
    /* height: 37px; */
    padding: 5px;
}

        .search-input {
          width: 100%;
          height: 40px;
          padding: 0 16px 0 44px;
          border: 1px solid #E5E7EB;
          border-radius: 6px;
          font-size: 14px;
          background: #FFFFFF;
          outline: none;
          transition: all 0.2s ease;
        }

        .search-input:focus {
          border-color: #3B82F6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .search-input::placeholder {
          color: #9CA3AF;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #9CA3AF;
          pointer-events: none;
        }

        .table-wrapper {
    /* background: #FFFFFF; */
    border: none;
    /* border-radius: 8px; */
    overflow: hidden;
    /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */
}

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .header-row {
          // background: #F9FAFB;
          border-bottom: 1px solid #E5E7EB;
        }

        .th {
          padding: 12px 24px;
          text-align: left;
          font-size: 12px;
          font-weight: 500;
          color: #ababab;
          text-transform: uppercase;
          letter-spacing: 0.025em;
        }

        .th-checkbox {
          width: 48px;
          padding: 12px 24px;
        }

        .tr {
          border-bottom: 1px solid #F3F4F6;
          transition: background-color 0.15s ease;
        }

        .tr:hover {
          background: #F9FAFB;
        }

        .tr.selected {
          // background: #EBF8FF;
        }

        .td {
          padding: 16px 24px;
          vertical-align: middle;
          font-size: 13px;
          color: #374151;
        }

        .td-checkbox {
          width: 48px;
          padding: 16px 24px;
        }

        .checkbox {
          width: 16px;
          height: 16px;
          border: 1.5px solid #D1D5DB;
          border-radius: 3px;
          cursor: pointer;
          appearance: none;
          position: relative;
        }

        .checkbox:checked {
          background: black;
          border-color: black;
        }

        .checkbox:checked::after {
          content: '✓';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 10px;
          font-weight: bold;
        }

        .order-id {
          font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
          font-weight: 500;
          color: #111827;
        }

        .user {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          background: #F3F4F6;
        }

        .name {
          font-weight: 500;
          color: #111827;
        }

        .address {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .external {
          flex-shrink: 0;
        }

        .date {
          display: flex;
          align-items: center;
          gap: 8px;
          color: black;
          font-size: 14px;
        }

        .calendar {
          flex-shrink: 0;
        }

        .status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .more {
          background: none;
          border: none;
          padding: 8px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.15s ease;
        }

        .more:hover {
          background: #F3F4F6;
        }

        .pagination-wrapper {
          display: flex;
          justify-content: flex-end;
          padding-top: 32px;
        }

        .pagination {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .page-btn {
          min-width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: none;
          background: #FFFFFF;
          border-radius: 6px;
          font-size: 18px;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .page-btn:hover {
          background: #F9FAFB;
          border-color: #D1D5DB;
        }

        .page-btn.active {
    background: #B3B3B3;
    border-color: #B3B3B3;
    color: black;
}lor: #FFFFFF;
        }

        .page-btn.prev,
        .page-btn.next {
          padding: 0 8px;
        }

        @media (max-width: 1024px) {
          .container {
            padding: 24px;
          }
          
          .header {
            flex-direction: column;
            gap: 24px;
            align-items: stretch;
          }
          
          .actions {
            justify-content: space-between;
          }

          .search {
            flex: 1;
          }
            /* Responsive styles for OrderList */

@media (max-width: 1024px) {
  .container {
    padding: 16px 12px;
  }

  .header {
    flex-direction: column;
    gap: 16px;
    align-items: stretch;
  }

  .allBtn {
    flex-wrap: wrap;
    gap: 8px;
  }

  .actions {
    flex-direction: column;
    gap: 12px;
  }

  .search {
    width: 100%;
    margin-right: 0;
  }

  .table-wrapper {
    overflow-x: auto;
  }

  .table {
    min-width: 720px; /* allow horizontal scroll on tablets */
  }
}

@media (max-width: 640px) {
  .container {
    padding: 12px 8px;
  }

  .header {
    gap: 12px;
  }

  .btn {
    width: 36px;
    height: 44px;
    font-size: 13px;
  }

  .search-input {
    font-size: 12px;
    height: 36px;
  }

  /* Stack table columns vertically on very small screens if needed */
  /* Or allow side scroll */
  .table-wrapper {
    overflow-x: auto;
  }

  .table {
    min-width: 600px;
  }
}

        }
      `}</style>
    </div>
  );
};

export default OrderList;