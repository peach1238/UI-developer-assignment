import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import TopHeader from './TopHeader/TopHeader';
import TopHeader2 from './TopHeader2/TopHeader2';
import DashboardKPI from './DashboardKPI/DashboardKPI';
import RevenueSection from './RevenueSection/RevenueSection';
import ProductsSales from './ProductsSales/ProductsSales';
import RightSidebar from './RightSidebar/RightSidebar';
import OrderList from './OrderList/OrderList';

function App() {
  const location = useLocation();
  const isOrdersPage = location.pathname === "/orders";

  return (
    <div className="App">
      <Sidebar />

      {isOrdersPage ? (
        <div
          className="orders-wrapper"
          style={{ marginLeft: "262px", marginTop: "14px", width: "79%"}} // example styles for orders page
        >
          <Routes>
            <Route
              path="/orders"
              element={
                <>
                  <TopHeader2 />
                  <OrderList />
                </>
              }
            />
          </Routes>
        </div>
      ) : (
        <div
          className="main-content"
          style={{ marginLeft: "256px", marginTop: "64px", marginRight: "320px" }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TopHeader />
                  <DashboardKPI />
                  <RevenueSection />
                  <ProductsSales />
                  <RightSidebar />
                </>
              }
            />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
