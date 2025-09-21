import React from 'react';
import './ProductsSales.css';

const ProductsSales = () => {
  const products = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' }
  ];

  const salesData = [
    { label: 'Direct', value: 300.56, color: '#1C1C1C', percentage: 38.6 },
    { label: 'Affiliate', value: 135.18, color: '#BAEDBD', percentage: 17.3 },
    { label: 'Sponsored', value: 154.02, color: '#95A4FC', percentage: 19.7 },
    { label: 'E-mail', value: 48.96, color: '#B1E3FF', percentage: 6.3 }
  ];

  // Calculate total and remaining percentage
  const totalValue = salesData.reduce((sum, item) => sum + item.value, 0);
  const totalPercentage = salesData.reduce((sum, item) => sum + item.percentage, 0);
  const remainingPercentage = 100 - totalPercentage;

  // SVG Donut Chart parameters
  const size = 120;
  const strokeWidth = 16;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  let cumulativePercentage = 0;

  return (
    <div className="products-sales-section">
      {/* Top Selling Products */}
      <div className="products-container">
        <h3 className="section-title">Top Selling Products</h3>
        <div className="products-table">
          <div className="table-header">
            <div className="header-cell name">Name</div>
            <div className="header-cell price">Price</div>
            <div className="header-cell quantity">Quantity</div>
            <div className="header-cell amount">Amount</div>
          </div>
          <div className="table-body">
            {products.map((product, index) => (
              <div key={index} className="table-row">
                <div className="cell name">{product.name}</div>
                <div className="cell price">{product.price}</div>
                <div className="cell quantity">{product.quantity}</div>
                <div className="cell amount">{product.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Total Sales */}
      <div className="sales-container">
        <h3 className="section-title">Total Sales</h3>
        <div className="donut-chart-container">
          <div className="chart-wrapper">
            <svg width={size} height={size} className="donut-chart">
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#F3F4F6"
                strokeWidth={strokeWidth}
              />
              
              {/* Data segments */}
              {salesData.map((segment, index) => {
                const gapSize = 8; 
                const totalGaps = salesData.length * gapSize;
                const availableCircumference = circumference - totalGaps;
              const segmentLength = (segment.percentage / 100) * availableCircumference;
              const offset = salesData.slice(0, index).reduce((acc, item, i) => {
                const itemLength = (item.percentage / 100) * availableCircumference;
                return acc + itemLength + gapSize;
              }, 0);
                const strokeDasharray = `${(segment.percentage / 100) * circumference} ${circumference}`;
                const strokeDashoffset = -cumulativePercentage / 100 * circumference;
                cumulativePercentage += segment.percentage;
                
                return (
                  <circle
                    key={index}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    fill="none"
                    stroke={segment.color}
                    strokeWidth={strokeWidth}
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                  />
                );
              })}
            </svg>
            
            {/* Center percentage */}
            <div className="chart-center">
              <span className="center-percentage">38.6%</span>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="sales-legend">
          {salesData.map((item, index) => (
            <div key={index} className="legend-row">
              <div className="legend-info">
                <div 
                  className="legend-dot"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="legend-label">{item.label}</span>
              </div>
              <span className="legend-value">${item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSales;