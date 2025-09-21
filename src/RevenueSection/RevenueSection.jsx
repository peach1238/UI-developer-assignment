import React from 'react';
import './RevenueSection.css';
import Map from "../Assets/Map.svg";

const RevenueSection = () => {
  const chartData = [
    { month: 'Jan', current: 15, previous: 8 },
    { month: 'Feb', current: 8, previous: 18 },
    // { month: 'Mar', current: 10, previous: 14 },
    { month: 'Apr', current: 18, previous: 12 },
    // { month: 'May', current: 22, previous: 10 },
    { month: 'Jun', current: 22, previous: 25 }
  ];
  // const locationData = [
  //   { city: 'New York', value: '72K', position: { top: '45%', left: '25%' } },
  //   { city: 'San Francisco', value: '39K', position: { top: '55%', left: '8%' } },
  //   { city: 'Sydney', value: '25K', position: { top: '75%', right: '15%' } },
  //   { city: 'Singapore', value: '61K', position: { top: '65%', right: '22%' } }
  // ];

  const locationData = [
    { city: 'New York', value: '72K', percentage: 72 },
    { city: 'San Francisco', value: '39K', percentage: 39 },
    { city: 'Sydney', value: '25K', percentage: 25 },
    { city: 'Singapore', value: '61K', percentage: 61 }
  ];

  // Create SVG path for smooth curves
  const createPath = (data, yScale) => {
    let path = '';
    data.forEach((point, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = 100 - (point * yScale);
      
      if (index === 0) {
        path += `M ${x} ${y}`;
      } else {
        const prevX = ((index - 1) / (data.length - 1)) * 100;
        const controlX1 = prevX + (x - prevX) * 0.4;
        const controlX2 = prevX + (x - prevX) * 0.6;
        path += ` C ${controlX1} ${100 - (data[index - 1] * yScale)} ${controlX2} ${y} ${x} ${y}`;
      }
    });
    return path;
  };

  const maxValue = 30;
  const yScale = 80 / maxValue;
  const yAxisValues = ['30M', '20M', '10M', '0'];
const hasDotted = chartData.some(d => d.current == 18);

  return (
    <div className="revenue-section">
      {/* Revenue Chart */}
      <div className="revenue-chart-container">
        <div className="chart-header">
          <h3 className="chart-title">Revenue</h3>
<span
  style={{
    marginLeft: "12px",
    color: "#b3b3b3",
    fontSize: "20px",
    marginTop: "-3px"
  }}
>
  |
</span>

          <div className="legend">
            <div className="legend-item">
              <div className="legend-dot current"></div>
              <span>Current Week</span>
              <span className="legend-value">$58,211</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot previous"></div>
              <span>Previous Week</span>
              <span className="legend-value">$68,768</span>
            </div>
          </div>
        </div>
        
        <div className="chart-area">
          <div className="y-axis">
            <span>30M</span>
            <span>20M</span>
            <span>10M</span>
            <span>0</span>
          </div>
          
          <div className="chart-content">
            <svg className="revenue-chart" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
      d={createPath(chartData.map(d => d.current), yScale)}
      stroke="#111827"
      strokeWidth={0.8}
      // strokeDasharray={hasDotted ? "1 4" : "2 2"}
      fill="none"
      className="current-line"
    />
              
              <path
                d={createPath(chartData.map(d => d.previous), yScale)}
                stroke="#A8C5DA"
                strokeWidth="0.8"
                fill="none"
                strokeDasharray="0 40 100"
                className="previous-line"
              />
              
              <path
                d={createPath(chartData.map(d => d.previous), yScale)}
                stroke="#A8C5DA"
                strokeWidth="0.6"
                fill="none"
                // strokeDasharray="2 2"
                strokeDashoffset="40"
                className="previous-dashed"
              />
            </svg>
            
            <div className="x-axis">
              {chartData.map(d => (
                <span key={d.month}>{d.month}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="location-container">
        <div className="location-header">
          <h3 className="location-title">Revenue by Location</h3>
        </div>
        
        <div className="world-map-container">
                    <img src={Map} alt="icon" style={{ width: "180px" }} />
        </div>
        
        {/* Location Stats */}
        <div className="location-stats">
      {locationData.map((location) => (
        <div key={location.city} className="location-stat">
          <div className="location-info">
            <div className="location-header">
              <span className="location-name">{location.city}</span>
              <span className="location-value">{location.value}</span>
            </div>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${location.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}

        </div>
      </div>
    </div>
  );
};

export default RevenueSection;