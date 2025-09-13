// import React, { useRef } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import VideoBackground from "./components/VideoBackground";
// import Dashboard from "./components/Dashboard";
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
//       <Routes>
//         <Route path="/" element={<DashboardLayout type="dashboardOne" />} />
//         <Route path="/dashboardTwo" element={<DashboardLayout type="dashboardTwo" />} />
//         <Route path="/industry/:industryId" element={<IndustryDetail />} />
//         <Route path="/customer-benefits" element={<CustomerBenefits />} />
//         <Route path="/clients" element={<Client />} />
//         <Route path="/case-studies" element={<CaseStudy />} />
//         <Route path="/implementation" element={<Implementation />} />
//         <Route path="/contact-us" element={<ContactUs />} />
//         <Route path="/product/:productName" element={<ProductDetail2 />} />
//         <Route path="/product/:productId" element={<ProductDetail />} />
//         <Route path="/case-study/:id" element={<CaseStudyDetail />} />
//         <Route path="/enquire" element={<Enquire />} />
//         <Route path="/buy/:model" element={<Buy />} />
//         <Route path="*" element={<h2>Page Not Found</h2>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useEffect, useState, useRef, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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

const DashboardLayout = ({ type }) => {
  const videoRef = useRef(null);

  return (
    <div className="dashboard-layout">
      <VideoBackground videoRef={videoRef} />
      <Dashboard type={type} />
    </div>
  );
};

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ textAlign: 'center', padding: '50px', color: '#fff' }}>
          <h2>Something went wrong.</h2>
          <p>Please try refreshing the page or contact support.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const location = useLocation();

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner message="Loading page..." />}>
        <Routes>
          <Route path="/" element={<DashboardLayout type="dashboardOne" />} />
          <Route path="/dashboardTwo" element={<DashboardLayout type="dashboardTwo" />} />
          <Route path="/industry/:industryId" element={<IndustryDetail />} />
          <Route path="/customer-benefits" element={<CustomerBenefits />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/case-studies" element={<CaseStudy />} />
          <Route path="/implementation" element={<Implementation />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product/:productName" element={<ProductDetail2 />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/case-study/:id" element={<CaseStudyDetail />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/buy/:model" element={<Buy />} />
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;