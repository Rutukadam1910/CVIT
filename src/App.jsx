import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoBackground from "./components/VideoBackground";
import Dashboard from "./components/Dashboard";
import IndustryDetail from "./components/IndustryDetail";
import CustomerBenefits from "./components/CustomerBenefits";
import Client from "./components/Client";
import ProductDetail from "./components/ProductDetail";
import CaseStudy from "./components/CaseStudy";
import CaseStudyDetail from "./components/CaseStudyDetail";
import ProductDetail2 from "./components/Productdetail2";
import Buy from "./components/buy";
import Enquire from "./components/enquire";
import Implementation from "./components/Implementation";
import ContactUs from "./components/ContactUs";
import LoadingSpinner from "./components/LoadingSpinner";
import './App.css';

// Create a Loading Context to manage global loading state
const LoadingContext = createContext({
  isLoading: false,
  setLoading: () => {},
});

// Custom hook to access loading context
const useLoading = () => useContext(LoadingContext);

// Wrapper component to handle loading state for routes
const RouteWrapper = ({ children }) => {
  const { isLoading } = useLoading();
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {children}
    </>
  );
};

// Updated DashboardLayout to use loading context
const DashboardLayout = ({ type }) => {
  const videoRef = React.useRef(null);
  const { setLoading } = useLoading();

  // Simulate loading for demonstration (replace with actual data fetching logic)
  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate 2s load
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="dashboard-layout">
      <VideoBackground videoRef={videoRef} />
      <Dashboard type={type} />
    </div>
  );
};

function App() {
  const [isLoading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <RouteWrapper>
                <DashboardLayout type="dashboardOne" />
              </RouteWrapper>
            }
          />
          <Route
            path="/dashboardTwo"
            element={
              <RouteWrapper>
                <DashboardLayout type="dashboardTwo" />
              </RouteWrapper>
            }
          />
          <Route
            path="/industry/:industryId"
            element={
              <RouteWrapper>
                <IndustryDetail />
              </RouteWrapper>
            }
          />
          <Route
            path="/customer-benefits"
            element={
              <RouteWrapper>
                <CustomerBenefits />
              </RouteWrapper>
            }
          />
          <Route
            path="/clients"
            element={
              <RouteWrapper>
                <Client />
              </RouteWrapper>
            }
          />
          <Route
            path="/case-studies"
            element={
              <RouteWrapper>
                <CaseStudy />
              </RouteWrapper>
            }
          />
          <Route
            path="/implementation"
            element={
              <RouteWrapper>
                <Implementation />
              </RouteWrapper>
            }
          />
          <Route
            path="/contact-us"
            element={
              <RouteWrapper>
                <ContactUs />
              </RouteWrapper>
            }
          />
          <Route
            path="/product/:productName"
            element={
              <RouteWrapper>
                <ProductDetail2 />
              </RouteWrapper>
            }
          />
          <Route
            path="/product/:productId"
            element={
              <RouteWrapper>
                <ProductDetail />
              </RouteWrapper>
            }
          />
          <Route
            path="/case-study/:id"
            element={
              <RouteWrapper>
                <CaseStudyDetail />
              </RouteWrapper>
            }
          />
          <Route
            path="/enquire"
            element={
              <RouteWrapper>
                <Enquire />
              </RouteWrapper>
            }
          />
          <Route
            path="/buy/:model"
            element={
              <RouteWrapper>
                <Buy />
              </RouteWrapper>
            }
          />
          <Route
            path="*"
            element={
              <RouteWrapper>
                <h2>Page Not Found</h2>
              </RouteWrapper>
            }
          />
        </Routes>
      </Router>
    </LoadingContext.Provider>
  );
}

export default App;
// import React, { useRef, Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import LoadingSpinner from "./components/LoadingSpinner";
// import VideoBackground from "./components/VideoBackground";
// const Dashboard = lazy(() =>
//   new Promise((resolve) => {
//     setTimeout(() => resolve(import('./components/Dashboard')), 2000); // 2-second delay
//   })
// )
// import IndustryDetail from "./components/IndustryDetail";
// import CustomerBenefits from "./components/CustomerBenefits";
// import Client from "./components/Client";
// import ProductDetail from "./components/ProductDetail";
// import CaseStudy from "./components/CaseStudy";
// import CaseStudyDetail from "./components/CaseStudyDetail";
// import ProductDetail2 from "./components/Productdetail2";
// import Buy from "./components/buy";
// import Enquire from "./components/enquire";
// import Implementation from "./components/Implementation";
// import ContactUs from "./components/ContactUs";
// import './App.css';

// const DashboardLayout = ({ type }) => {
//   const videoRef = useRef(null);

//   return (
//     <div className="dashboard-layout">
//       <VideoBackground videoRef={videoRef} />
//       <Dashboard type={type} />
//     </div>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<LoadingSpinner />}>
//         <Routes>
//           <Route path="/" element={<DashboardLayout type="dashboardOne" />} />
//           <Route path="/dashboardTwo" element={<DashboardLayout type="dashboardTwo" />} />
//           <Route path="/industry/:industryId" element={<IndustryDetail />} />
//           <Route path="/customer-benefits" element={<CustomerBenefits />} />
//           <Route path="/clients" element={<Client />} />
//           <Route path="/case-studies" element={<CaseStudy />} />
//           <Route path="/implementation" element={<Implementation />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           <Route path="/product/:productName" element={<ProductDetail2 />} />
//           <Route path="/product/:productId" element={<ProductDetail />} />
//           <Route path="/case-study/:id" element={<CaseStudyDetail />} />
//           <Route path="/enquire" element={<Enquire />} />
//           <Route path="/buy/:model" element={<Buy />} />
//           <Route path="*" element={<h2>Page Not Found</h2>} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;