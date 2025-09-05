import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DashboardTwo from "./components/DashboardTwo";
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

function App() {
  console.log("CaseStudyDetail:", CaseStudyDetail);
  return (
    <Router>
      <Routes>
        {/* Dashboard page */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardTwo" element={<DashboardTwo />} />
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
    </Router>
  );
}

export default App;