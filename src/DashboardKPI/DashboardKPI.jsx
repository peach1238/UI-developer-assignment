import React from 'react';
import './DashboardKPI.css';
import { useNavigate } from "react-router-dom";
import UP from "../Assets/UP.svg";
import Down from "../Assets/Down.svg";


const DashboardKPI = () => {
  const navigate = useNavigate();
  const chartData = [
    { month: 'Jan', value: 18 },
    { month: 'Feb', value: 24 },
    { month: 'Mar', value: 20 },
    { month: 'Apr', value: 30 },
    { month: 'May', value: 16 },
    { month: 'Jun', value: 26 }
  ];

  const maxValue = Math.max(...chartData.map(d => d.value));

  return (
    <div className="dashboard-kpi">
      <h2 className="dashboard-title">eCommerce</h2>
      
      <div className="kpi-container">
        {/* Top Row - KPI Cards and Chart */}
        <div className="top-row">
          {/* KPI Cards */}
          <div className='cardSec'>
          <div className="kpi-cards">
            {/* Customers Card */}
            <div className="kpi-card customers-card">
              <div className="kpi-header">
                <h3 className="kpi-title">Customers</h3>
              </div>
              <div className="kpi-content">
                <div className="kpi-value">3,781</div>
                <div className="kpi-change positive">
                  <span className="change-text">+11.01%</span>
                            <img src={UP} alt="icon" />
                  
                </div>
              </div>
            </div>

            {/* Orders Card */}
            <div className="kpi-card orders-card" onClick={() => navigate("/orders")}>
              <div className="kpi-header">
                <h3 className="kpi-title">Orders</h3>
              </div>
              <div className="kpi-content">
                <div className="kpi-value">1,219</div>
                <div className="kpi-change negative">
                  <span className="change-text">-0.03%</span>
                            <img src={Down} alt="icon" />
                  
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row - Revenue and Growth */}
        <div className="bottom-row">
          {/* Revenue Card */}
          <div className="kpi-card revenue-card">
            <div className="kpi-header">
              <h3 className="kpi-title">Revenue</h3>
            </div>
            <div className="kpi-content">
              <div className="kpi-value">$695</div>
              <div className="kpi-change positive">
                  <span className="change-text">+15.03%</span>

                         <img src={UP} alt="icon" />
               
              </div>
            </div>
          </div>

          {/* Growth Card */}
          <div className="kpi-card growth-card">
            <div className="kpi-header">
              <h3 className="kpi-title">Growth</h3>
            </div>
            <div className="kpi-content">
              <div className="kpi-value">30.1%</div>
              <div className="kpi-change positive">
                <span className="change-text">+6.08%</span>
                          <img src={UP} alt="icon" />
                
              </div>
            </div>
          </div>
        </div>
        </div>
          {/* Chart Section */}
          <div className="chart-section">
            <div className="chart-header">
              <h3 className="chart-title">Projections vs Actuals</h3>
            </div>
            <div className="chart-container">
              <div className="chart-y-axis">
                <span className="y-label">30M</span>
                <span className="y-label">20M</span>
                <span className="y-label">10M</span>
                <span className="y-label">0</span>
              </div>
              <div className="chart-content">
                {/* Horizontal Grid Lines */}
                <div className="chart-grid">
                  <div className="grid-line" style={{ bottom: '100%' }}></div>
                  <div className="grid-line" style={{ bottom: '66.67%' }}></div>
                  <div className="grid-line" style={{ bottom: '33.33%' }}></div>
                  <div className="grid-line" style={{ bottom: '0%' }}></div>
                </div>
                
                <div className="bars-container">
                  {chartData.map((data, index) => (
                    <div key={data.month} className="bar-group">
                      <div className="bar-wrapper" style={{ height: `${(data.value / maxValue) * 100}%` }}>
                        <div className="bar-top"></div>
                        <div className="bar-bottom"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="chart-x-axis">
                  {chartData.map((data) => (
                    <span key={data.month} className="x-label">{data.month}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default DashboardKPI;