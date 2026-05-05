// src/App.jsx
import React, { Suspense, useRef, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from 'react-cookie';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

// Components
import VideoBackground from "./components/VideoBackground";
import Dashboard from "./components/Dashboard";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy Loaded Components
const IndustryDetail = lazy(() => import("./components/IndustryDetail"));
const CustomerBenefits = lazy(() => import("./components/CustomerBenefits"));
const Client = lazy(() => import("./components/Client"));
const CaseStudy = lazy(() => import("./components/CaseStudy"));
const CaseStudyDetail = lazy(() => import("./components/CaseStudyDetail"));

const AdjustableExtensionTube = lazy(() => import("./components/AdjustableExtensionTube"));
const FixedExtensionTube = lazy(() => import("./components/FixedExtensionTube"));
const CameraEnclosureWithCoolingJacket = lazy(() => import("./components/CameraEnclosureWithCoolingJacket"));
const CameraEnclosureWithoutCoolingJacket = lazy(() => import("./components/CameraEnclosureWithoutCoolingJacket"));

const ProductDetail = lazy(() => import("./components/ProductDetail")); // ← Machine Vision Lights
const CameraEnclosureProductDetail = lazy(() => import("./components/CameraEnclosureProductDetail"));
const BordCameraHousing = lazy(() => import("./components/BordCameraHousing"));
const Accessories = lazy(() => import("./components/Accesories"));
const Enquire = lazy(() => import("./components/Enquire"));
const Buy = lazy(() => import("./components/buy"));

const Implementation = lazy(() => import("./components/Implementation"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Privacy = lazy(() => import("./components/privacy"));
const Careers = lazy(() => import("./components/Careers"));

// CSS
import './App.css';
import '../src/Styles/LoadingSpinner.css';

const DashboardLayout = ({ type }) => {
  const videoRef = useRef(null);

  return (
    <div className="dashboard-layout">
      <VideoBackground videoRef={videoRef} />
      <Dashboard type={type} />
    </div>
  );
};

// Simple Error Boundary
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("App Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          textAlign: 'center',
          padding: '100px 20px',
          background: '#121212',
          color: '#fff',
          minHeight: '100vh',
          fontFamily: 'Arial, sans-serif'
        }}>
          <h1>Oops! Something went wrong.</h1>
          <p>Please refresh the page or try again later.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

// Main App with clean, single routing structure
function App() {
  return (
    <Suspense fallback={<LoadingSpinner message="Loading..." fullScreen={true} size={300} />}>
      <Routes>
        {/* Dashboard Routes */}
        <Route path="/" element={<DashboardLayout type="dashboardOne" />} />
        <Route path="/dashboardTwo" element={<DashboardLayout type="dashboardTwo" />} />

        {/* General Pages */}
        <Route path="/industry/:industryId" element={<IndustryDetail />} />
        <Route path="/customer-benefits" element={<CustomerBenefits />} />
        <Route path="/clients" element={<Client />} />
        <Route path="/case-studies" element={<CaseStudy />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />
        <Route path="/implementation" element={<Implementation />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/careers" element={<Careers />} />
  
   
                
        {/* Static product pages FIRST */}
        <Route path="/product/adjustable-length" element={<AdjustableExtensionTube />} />
        <Route path="/product/fix-length" element={<FixedExtensionTube />} />
        <Route path="/product/with-cooling-jacket" element={<CameraEnclosureWithCoolingJacket />} />
        <Route path="/product/without-cooling-jacket" element={<CameraEnclosureWithoutCoolingJacket />} />

        {/* Sub-pages */}
        <Route path="/product/without-cooling-jacket/bord-camera-housing" element={<BordCameraHousing />} />
        <Route path="/product/without-cooling-jacket/accessories" element={<Accessories />} />
        <Route path="/product/without-cooling-jacket/:modelType" element={<CameraEnclosureProductDetail />} />

        {/* Dynamic product detail LAST */}
        <Route path="/product/:slug" element={<ProductDetail />} />


        {/* Forms */}
        <Route path="/enquire" element={<Enquire />} />
        <Route path="/buy/:model" element={<Buy />} />

        {/* 404 Not Found - Must be last */}
        <Route path="*" element={
          <div style={{
            textAlign: 'center',
            padding: '100px 20px',
            background: '#121212',
            color: '#fff',
            minHeight: '100vh',
            fontFamily: 'Arial, sans-serif'
          }}>
            <h1>404</h1>
            <h2>{i18n.t('PageNotFound') || 'Page Not Found'}</h2>
            <p>The page you're looking for doesn't exist.</p>
          </div>
        } />
      </Routes>
    </Suspense>
  );
}

// Final Wrapper
function AppWrapper() {
  return (
    <CookiesProvider>
      <I18nextProvider i18n={i18n}>
        <Router>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
        </Router>
      </I18nextProvider>
    </CookiesProvider>
  );
}

export default AppWrapper;