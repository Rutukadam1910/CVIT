// import React, { useEffect, useState, useRef } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";

// import Bar_Light from "../assets/BarLight.png";
// import Ring_Light from "../assets/RingLight.png";
// import Dome_Light from "../assets/DomeLight.png";
// import Flat_Diffused_Light_With_Center_Hole from "../assets/DirectDiffusedLight.png";
// import Flat_Diffused_Light from "../assets/DiffusedLight.png";
// import Indirect_Flat_Light from "../assets/IndirectFlatLight.png";
// import Back_Light from "../assets/BackLight.png";
// import Spot_Light from "../assets/SpotLight.png";
// import Tunnel_Light from "../assets/TunnelLight.png";

// import Bar_Light_dimension from "../assets/Bar_Light.png";
// import Ring_Light_dimension from "../assets/Ring_Light.png";
// import Dome_Light_dimension from "../assets/Dome_Light.png";
// import Flat_Diffused_Light_With_Center_Hole_dimension from "../assets/Flat_Direct_Diffused_Light_With_Center_Hole.png";
// import Flat_Diffused_Light_dimension from "../assets/Flat_Direct_Diffused_Light.png";
// import Indirect_Flat_Light_dimension from "../assets/Indirect_Flat_Light.png";
// import Back_Light_dimension from "../assets/Back_Light.png";
// import Spot_Light_dimension from "../assets/Spot_Light.png";
// import Tunnel_Light_dimension from "../assets/Tunnel_Light.png";

// import info1 from "../assets/info1.png";
// import info2 from "../assets/info2.png";
// import info3 from "../assets/info3.png";

// import g1 from "../assets/g1.png";
// import g2 from "../assets/g2.png";
// import g3 from "../assets/g3.png";

// const COMMON_SPECIFICATIONS = {
//   "Type of Illumination": "LED Illuminator",
//   Manufacturer: "CVIT",
//   Warranty: "6 Months",
//   "Illumination Mode": "Constant",
//   "Input Voltage (V)": "24",
//   "Operating Temperature": "0°C - 50°C",
//   "IP Rating": "IP55",
// };

// const productsData = {
//   "bar-light": {
//     title: "BAR LIGHT",
//     image: Bar_Light,
//     image2: Bar_Light_dimension,
//     diagramImage: Bar_Light_dimension,
//     description: {
//       intro: "Provides consistent, high-intensity illumination across a long, narrow area. Its uniform light distribution minimizes shadows and enhances visibility of extended objects."
//     },
//     specifications: [
//       ["Model", "CMVBRL32632240200", "CMVBRL22632240150", "CMVBRL12632240100", "CMVBRL42060240500"],
//       ["Electrical Input", "24 V", "24 V", "24 V", "24 V"],
//       ["Input Current", "300 mA", "350 mA", "400 mA", "450 mA"],
//       ["Lumens", "1800", "1500", "2000", "2500"],
//       ["Colour", "Red", "White", "Cool White", "White"],
//       ["Colour Temp", "N/A", "6500K", "5000K", "6000K"],
//       ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
//       ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
//       ["IP Rating", "IP 65", "IP 65", "IP 65", "IP 65"],
//       ["Weight", "0.350 KG", "0.274 KG", "0.192 KG", "0.427 KG"],
//     ],
//     modelTree: [
//       { name: "CMVBRL32632240200" },
//       { name: "CMVBRL22632240150" },
//       { name: "CMVBRL12632240100" },
//       { name: "CMVBRL42060240500" },
//       { name: "CMVBRL32060240500" },
//       { name: "CMVBRL22060240500" },
//       { name: "CMVBRL12060240500" },
//       { name: "CMVBRL42632240250" },
//     ],
//   },
//   "ring-light": {
//     title: "RING LIGHT",
//     image: Ring_Light,
//     image2: Ring_Light_dimension,
//     diagramImage: Ring_Light_dimension,
//     description: {
//       intro: "Ring Lights provide shadow-free, 360-degree illumination around the camera lens, perfect for macro inspection and detailed imaging."
//     },
//     specifications: [
//       ["Model", "CMVRL15090240210", "CMVRL20095240500", "CMVRL20065240500", "CMVRL14069240210"],
//       ["Electrical Input", "24 V", "24 V", "24 V", "24 V"],
//       ["Input Current", "300 mA", "350 mA", "400 mA", "450 mA"],
//       ["Lumens", "1800", "1500", "2000", "2500"],
//       ["Colour", "Red", "White", "Cool White", "White"],
//       ["Colour Temp", "N/A", "6500K", "5000K", "6000K"],
//       ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
//       ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
//       ["IP Rating", "IP 65", "IP 65", "IP 65", "IP 65"],
//       ["Weight", "0.192 KG", "0.274 KG", "0.350 KG", "0.427 KG"],
//     ],
//     modelTree: [
//       {
//         name: "DIFFUSED RING LIGHT",
//         submenu: [
//           {
//             name: "High Angle Ring Light",
//             submenu: [
//               { name: "CMVHARL15090240210" },
//               { name: "CMVHARL20095240500" },
//               { name: "CMVHARL20065240500" },
//             ],
//           },
//           {
//             name: "Low Angle Ring Light",
//             submenu: [
//               { name: "CMVLARL15090240210" },
//               { name: "CMVLARL20095240500" },
//               { name: "CMVLARL20065240500" },
//             ],
//           },
//           {
//             name: "Flat Ring Light",
//             submenu: [
//               { name: "CMVRL15090240210" },
//               { name: "CMVRL20095240500" },
//               { name: "CMVRL20065240500" },
//             ],
//           },
//         ],
//       },
//       {
//         name: "Non Diffused Ring Light",
//         submenu: [
//           {
//             name: "High Angle Ring Light",
//             submenu: [
//               { name: "ND-CMVHARL15090240210" },
//               { name: "ND-CMVHARL20095240500" },
//               { name: "ND-CMVHARL20065240500" },
//             ],
//           },
//           {
//             name: "Low Angle Ring Light",
//             submenu: [
//               { name: "ND-CMVLARL15090240210" },
//               { name: "ND-CMVLARL20095240500" },
//               { name: "ND-CMVLARL20065240500" },
//             ],
//           },
//           {
//             name: "Flat Ring Light",
//             submenu: [
//               { name: "ND-CMVRL15090240210" },
//               { name: "ND-CMVRL20095240500" },
//               { name: "ND-CMVRL20065240500" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   "dome-light": {
//     title: "DOME LIGHT",
//     image: Dome_Light,
//     image2: Dome_Light_dimension,
//     diagramImage: Dome_Light_dimension,
//     description: {
//       intro: "Dome Lights offer diffused lighting from all sides, ideal for reducing glare and reflections on curved surfaces."
//     },
//     specifications: [
//       ["Model", "CMVDL629256240210", "CMVDL120200120240500", "CMVDL7614888240210"],
//       ["Electrical Input", "24 V", "24 V", "24 V"],
//       ["Input Current", "300 mA", "350 mA", "400 mA"],
//       ["Lumens", "1800", "1500", "2000"],
//       ["Colour", "Red", "White", "Cool White"],
//       ["Colour Temp", "N/A", "6500K", "5000K"],
//       ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
//       ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
//       ["IP Rating", "IP 65", "IP 65", "IP 65"],
//       ["Weight", "0.192 KG", "0.274 KG", "0.350 KG"],
//     ],
//     modelTree: [
//       {
//         name: "Aluminium Body",
//         submenu: [
//           { name: "CMVDL629256240210" },
//           { name: "CMVDL120200120240500" },
//           { name: "CMVDL7614888240210" },
//         ],
//       },
//       {
//         name: "Plastic Body",
//         submenu: [
//           { name: "CMVDL170250135240500" },
//           { name: "CMVDL120200120240500" },
//           { name: "CMVDL7614888240210" },
//           { name: "CMVDL629256240210" },
//         ],
//       },
//     ],
//   },
//   "flat-diffused-light-with-center-hole": {
//     title: "FLAT DIFFUSED LIGHT WITH CENTER HOLE",
//     image: Flat_Diffused_Light_With_Center_Hole,
//     image2: Flat_Diffused_Light_With_Center_Hole_dimension,
//     description: {
//       intro: "Flat Diffused Light With Center Hole provides uniform lighting with an aperture in the middle to accommodate camera lenses or sensors."
//     },
//     specifications: [
//       ["Model", "CMVDFLCH15020025240430", "CMVDFLCH20020025240430", "CMVDFLCH37227225240430", "CMVDFLCH40040025240860"],
//       ["Electrical Input", "24 V", "24 V", "24 V", "24 V"],
//       ["Input Current", "300 mA", "350 mA", "400 mA", "450 mA"],
//       ["Lumens", "1800", "1500", "2000", "2500"],
//       ["Colour", "Red", "White", "Cool White", "White"],
//       ["Colour Temp", "N/A", "6500K", "5000K", "6000K"],
//       ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
//       ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
//       ["IP Rating", "IP 65", "IP 65", "IP 65", "IP 65"],
//       ["Weight", "0.192 KG", "0.274 KG", "0.350 KG", "0.427 KG"],
//     ],
//     modelTree: [
//       {
//         name: "Aluminium Body",
//         submenu: [
//           { name: "CMVDFLCH15020025240430" },
//           { name: "CMVDFLCH20020025240430" },
//           { name: "CMVDFLCH37227225240430" },
//           { name: "CMVDFLCH40040025240860" },
//         ],
//       },
//       {
//         name: "MS Body",
//         submenu: [
//           { name: "CMVDFLCH15020025240430" },
//           { name: "CMVDFLCH20020025240430" },
//           { name: "CMVDFLCH37227225240430" },
//           { name: "CMVDFLCH40040025240860" },
//         ],
//       },
//     ],
//   },
//   "flat-diffused-light": {
//     title: "FLAT DIFFUSED LIGHT",
//     image: Flat_Diffused_Light,
//     image2: Flat_Diffused_Light_dimension,
//     description: {
//       intro: "Flat Diffused Light is ideal for uniform illumination with minimal shadows, used in industrial inspection and machine vision applications."
//     },
//     specifications: [
//       ["Model", "CMVFL-1262240160", "CMVFL-2362240150", "CMVFL-3262240200"],
//       ["Electrical Input", "24 V", "24 V", "24 V"],
//       ["Input Current", "300 mA", "350 mA", "400 mA"],
//       ["Lumens", "1800", "1500", "2000"],
//       ["Colour", "Red", "White", "Cool White"],
//       ["Colour Temp", "N/A", "6500K", "5000K"],
//       ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
//       ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
//       ["IP Rating", "IP 65", "IP 65", "IP 65"],
//       ["Weight", "0.192 KG", "0.274 KG", "0.350 KG"],
//     ],
//     modelTree: [
//       { name: "CMVFL-1262240160" },
//       { name: "CMVFL-2362240150" },
//       { name: "CMVFL-3262240200" },
//       { name: "CMVFL-4262240250" },
//     ],
//   },
//   "indirect-flat-light": {
//     title: "INDIRECT FLAT LIGHT",
//     image: Indirect_Flat_Light,
//     image2: Indirect_Flat_Light_dimension,
//     description: {
//       intro: "Indirect Flat Light provides indirect illumination via reflective surfaces, reducing hotspots and enhancing surface defect detection."
//     },
//     specifications: [
//       ["Model", "CMVIDFLCH22014030240600", "CMVIDFLCH42042032241000", "CMVIDFLCH42035030240800", "CMVIDFLCH42032032240800"],
//       ["Electrical Input", "24 V", "24 V", "24 V", "24 V"],
//       ["Input Current", "300 mA", "350 mA", "400 mA", "450 mA"],
//       ["Lumens", "1800", "1500", "2000", "2500"],
//       ["Colour", "Red", "White", "Cool White", "White"],
//       ["Colour Temp", "N/A", "6500K", "5000K", "6000K"],
//       ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
//       ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
//       ["IP Rating", "IP 65", "IP 65", "IP 65", "IP 65"],
//       ["Weight", "0.192 KG", "0.274 KG", "0.350 KG", "0.427 KG"],
//     ],
//     modelTree: [
//       { name: "CMVIDFLCH22014030240600" },
//       { name: "CMVIDFLCH42042032241000" },
//       { name: "CMVIDFLCH42035030240800" },
//       { name: "CMVIDFLCH42032032240800" },
//     ],
//   },
//   "back-light": {
//     title: "BACK LIGHT",
//     image: Back_Light,
//     image2: Back_Light_dimension,
//     description: {
//       intro: "Back Lights produce strong background illumination to create silhouettes of the object, useful for shape and outline inspection."
//     },
//     specifications: [
//       ["Model", "CMVBKL12612640240200", "CMVBKL15015045240200", "CMVBKL22014040240200"],
//       ["Electrical Input", "24 V", "24 V", "24 V"],
//       ["Input Current", "300 mA", "350 mA", "400 mA"],
//       ["Lumens", "1800", "1500", "2000"],
//       ["Colour", "Red", "White", "Cool White"],
//       ["Colour Temp", "N/A", "6500K", "5000K"],
//       ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
//       ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
//       ["IP Rating", "IP 65", "IP 64", "IP 65"],
//       ["Weight", "0.192 KG", "0.274 KG", "0.350 KG"],
//     ],
//     modelTree: [
//       {
//         name: "Aluminium Body",
//         submenu: [
//           { name: "CMVBKL12612640240200" },
//           { name: "CMVBKL15015045240200" },
//           { name: "CMVBKL22014040240200" },
//           { name: "CMVBKL32622645240500" },
//           { name: "CMVBKL37224445240500" },
//           { name: "CMVBKL35035045240600" },
//           { name: "CMVBKL45045045240500" },
//         ],
//       },
//       {
//         name: "MS Body",
//         submenu: [
//           { name: "CMVBKL12612640240200" },
//           { name: "CMVBKL15015045240200" },
//           { name: "CMVBKL22014040240200" },
//           { name: "CMVBKL32622645240500" },
//           { name: "CMVBKL37224445240500" },
//           { name: "CMVBKL35035045240600" },
//           { name: "CMVBKL45045045240500" },
//           { name: "CMVBKL70060050241000" },
//         ],
//       },
//     ],
//   },
//   "spot-light": {
//     title: "SPOT LIGHT",
//     image: Spot_Light,
//     image2: Spot_Light_dimension,
//     description: {
//       intro: "Spot Lights produce focused, intense beams of light to highlight specific areas on an object for precision inspection."
//     },
//     specifications: [
//       ["Model", "CMVSPTL8660ADF240100", "CMVSPTL6452ADF240100"],
//       ["Electrical Input", "24 V", "24 V"],
//       ["Input Current", "300 mA", "350 mA"],
//       ["Lumens", "1800", "1500"],
//       ["Colour", "Red", "White"],
//       ["Colour Temp", "N/A", "6500K"],
//       ["Operating Temp", "0°C - 50°C", "0°C - 50°C"],
//       ["Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
//       ["IP Rating", "IP 65", "IP 65"],
//       ["Weight", "0.192 KG", "0.274 KG"],
//     ],
//     modelTree: [{ name: "CMVSPTL8660ADF240100" }, { name: "CMVSPTL6452ADF240100" }],
//   },
//   "tunnel-light": {
//     title: "TUNNEL LIGHT",
//     image: Tunnel_Light,
//     image2: Tunnel_Light_dimension,
//     description: {
//       intro: "Tunnel Lights provide bright, uniform lighting inside conveyor tunnels for capturing defect-free product images in production lines."
//     },
//     specifications: [
//       ["Model", "CMVITL280320240400", "CMVITL262256240400", "CMVITL152156240200"],
//       ["Electrical Input", "24 V", "24 V", "24 V"],
//       ["Input Current", "300 mA", "350 mA", "400 mA"],
//       ["Lumens", "1800", "1500", "2000"],
//       ["Colour", "Red", "White", "Cool White"],
//       ["Colour Temp", "N/A", "6500K", "5000K"],
//       ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
//       ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
//       ["IP Rating", "IP 65", "IP 65", "IP 65"],
//       ["Weight", "0.192 KG", "0.274 KG", "0.350 KG"],
//     ],
//     modelTree: [
//       { name: "CMVITL280320240400" },
//       { name: "CMVITL262256240400" },
//       { name: "CMVITL152156240200" },
//     ],
//   },
// };

// const ProductDetail2 = () => {
//   const { productName } = useParams();
//   const navigate = useNavigate();

//   const slug = productName
//     ? productName.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")
//     : "";
//   const product = productsData[slug];

//   const [activeSection, setActiveSection] = useState("product");
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [isDragging, setIsDragging] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [startPos, setStartPos] = useState({ x: 0, y: 0 });
//   const zoomContainerRef = useRef(null);
//   const productSectionRef = useRef(null);
//   const techInfoSectionRef = useRef(null);
//   const gallerySectionRef = useRef(null);
//   const rootRef = useRef(null);
//   const marqueeRef = useRef(null);

//   useEffect(() => {
//     setActiveSection("product");
//     setSelectedImage(null); // Reset selected image on product change
//   }, [slug]);

//   // IntersectionObserver for reveal animations
//   useEffect(() => {
//     const node = rootRef.current || document;
//     const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//     if (prefersReduced) {
//       const els = node.querySelectorAll(".reveal-on-scroll");
//       els.forEach((el) => el.classList.add("in-view"));
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("in-view");
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
//     );

//     const els = node.querySelectorAll(".reveal-on-scroll");
//     els.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

// useEffect(() => {
//   if (window.location.hash === "#top") {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }
// }, [slug]);
//   // JavaScript for marquee
//   useEffect(() => {
//     const marqueeContent = marqueeRef.current;
//     if (marqueeContent) {
//       const root = document.documentElement;
//       const marqueeElementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"));
//       const children = Array.from(marqueeContent.children);
//       const totalElements = children.length;
//       root.style.setProperty("--marquee-elements", totalElements);

//       // Clear existing cloned elements if any
//       while (marqueeContent.children.length > totalElements) {
//         marqueeContent.removeChild(marqueeContent.lastChild);
//       }

//       // Clone elements for infinite scrolling
//       for (let i = 0; i < marqueeElementsDisplayed; i++) {
//         const clone = children[i % totalElements].cloneNode(true);
//         marqueeContent.appendChild(clone);
//       }

//       // Attach onClick to all images, including clones
//       const images = marqueeContent.querySelectorAll("img");
//       images.forEach((img, index) => {
//         img.onclick = () => handleImageClick(galleryImages[index % galleryImages.length]);
//       });
//     }
//   }, []);

//   if (!product) {
//     return (
//       <div
//         style={{
//           width: "100%",
//           minHeight: "100vh",
//           padding: "2rem",
//           color: "#EF3A3A",
//           textAlign: "center",
//           background: "linear-gradient(180deg,#f8fafb,#ffffff)",
//           boxSizing: "border-box",
//           fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//           border: "1px solid black",
//         }}
//       >
//         <Navbar />
//         <h2>Product not found</h2>
//         <button
//           onClick={() => navigate("/dashboardTwo")}
//           aria-label="Go back to products"
//           className="premium-btn action-btn"
//           style={{ marginTop: "2rem" }}
//         >
//           Go Back to Products
//         </button>
//       </div>
//     );
//   }

//   const handleNavClick = (section) => {
//     setActiveSection(section);
//     let targetRef = null;
//     switch (section) {
//       case "product":
//         targetRef = productSectionRef;
//         break;
//       case "technical":
//         targetRef = techInfoSectionRef;
//         break;
//       case "gallery":
//         targetRef = gallerySectionRef;
//         break;
//       default:
//         targetRef = productSectionRef;
//     }
//     if (targetRef && targetRef.current) {
//       targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };

//   const handleImageClick = (imgSrc) => {
//     setSelectedImage(imgSrc);
//     setZoomLevel(1);
//     setPosition({ x: 0, y: 0 });
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//     setIsDragging(false);
//     setPosition({ x: 0, y: 0 });
//   };

//   const handleZoomIn = () => {
//     setZoomLevel((prev) => Math.min(prev + 0.2, 3));
//   };

//   const handleZoomOut = () => {
//     setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
//   };

//   const handleMouseDown = (e) => {
//     if (zoomLevel > 1) {
//       setIsDragging(true);
//       setStartPos({
//         x: e.clientX - position.x,
//         y: e.clientY - position.y,
//       });
//       e.preventDefault();
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (isDragging && zoomLevel > 1) {
//       const newX = e.clientX - startPos.x;
//       const newY = e.clientY - startPos.y;

//       const container = zoomContainerRef.current;
//       if (container) {
//         const containerRect = container.getBoundingClientRect();
//         const imgWidth = containerRect.width * zoomLevel;
//         const imgHeight = containerRect.height * zoomLevel;
//         const maxX = (imgWidth - containerRect.width) / 2;
//         const maxY = (imgHeight - containerRect.height) / 2;

//         setPosition({
//           x: Math.max(-maxX, Math.min(maxX, newX)),
//           y: Math.max(-maxY, Math.min(maxY, newY)),
//         });
//       }
//     }
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//   };

//   const handleTouchStart = (e) => {
//     if (zoomLevel > 1 && e.touches.length === 1) {
//       setIsDragging(true);
//       setStartPos({
//         x: e.touches[0].clientX - position.x,
//         y: e.touches[0].clientY - position.y,
//       });
//       e.preventDefault();
//     }
//   };

//   const handleTouchMove = (e) => {
//     if (isDragging && zoomLevel > 1 && e.touches.length === 1) {
//       const newX = e.touches[0].clientX - startPos.x;
//       const newY = e.touches[0].clientY - startPos.y;

//       const container = zoomContainerRef.current;
//       if (container) {
//         const containerRect = container.getBoundingClientRect();
//         const imgWidth = containerRect.width * zoomLevel;
//         const imgHeight = containerRect.height * zoomLevel;
//         const maxX = (imgWidth - containerRect.width) / 2;
//         const maxY = (imgHeight - containerRect.height) / 2;

//         setPosition({
//           x: Math.max(-maxX, Math.min(maxX, newX)),
//           y: Math.max(-maxY, Math.min(maxY, newY)),
//         });
//       }
//       e.preventDefault();
//     }
//   };

//   const handleTouchEnd = () => {
//     setIsDragging(false);
//   };

//   const flattenModelTree = (tree) => {
//     const rows = [];

//     const traverse = (nodes, currentCategory = null, currentSubtype = []) => {
//       nodes.forEach((node) => {
//         if (Array.isArray(node.submenu) && node.submenu.length > 0) {
//           if (!currentCategory) {
//             traverse(node.submenu, node.name, []);
//           } else {
//             traverse(node.submenu, currentCategory, [...currentSubtype, node.name]);
//           }
//         } else {
//           const category = currentCategory || product.title;
//           const subtype = currentSubtype.length > 0 ? currentSubtype.join(" > ") : "";
//           rows.push({
//             category,
//             subtype,
//             model: node.name,
//           });
//         }
//       });
//     };

//     if (!Array.isArray(tree) || tree.length === 0) return [];
//     traverse(tree, null, []);
//     return rows;
//   };

//   const makeDummySpec = (index) => {
//     const L = 80 + (index % 60);
//     const W = 100 + ((index * 3) % 120);
//     const H = parseFloat((L * 1.25 + (index % 5)).toFixed(2));
//     const IC = `${(0.8 + ((index % 6) * 0.1)).toFixed(1)} A`;
//     const IP = "IP 65";
//     const Lumens = 1800 + ((index % 6) * 100);
//     const Connector = index % 2 === 0 ? "M12 - 2P" : "M12 - 3P";
//     return { L, W, H, IC, IP, Lumens, Connector };
//   };

// const renderModelStructureTable = () => {
//   const rows = flattenModelTree(product.modelTree || []);
//   if (!rows.length) {
//     return (
//       <div style={{ padding: "1rem", color: "#666" }}>
//         No models available for this product.
//       </div>
//     );
//   }

//   let catStart = 0;
//   for (let i = 1; i <= rows.length; i++) {
//     if (i === rows.length || rows[i].category !== rows[catStart].category) {
//       rows[catStart].catSpan = i - catStart;
//       catStart = i;
//     }
//   }

//   let subStart = 0;
//   for (let i = 1; i <= rows.length; i++) {
//     if (i === rows.length || rows[i].subtype !== rows[subStart].subtype || rows[i].category !== rows[subStart].category) {
//       rows[subStart].subSpan = i - subStart;
//       subStart = i;
//     }
//   }

//   const hasSubtypes = rows.some((row) => row.subtype);

//   const tableWrapStyle = {
//     width: "100%",
//     maxWidth: "1300px",
//     margin: "0 auto 1.5rem",
    
//     boxShadow: "0 8px 24px rgba(4, 12, 30, 0.08)",
//     background: "linear-gradient(180deg, #ffffff, #f9fafb)",
//     padding: "0.5rem",
//     border: "1px solid rgba(15, 23, 42, 0.05)",
//   };

//   const tableStyle = {
//     width: "100%",
//     borderCollapse: "separate",
//     borderSpacing: 0,
//     fontSize: "0.95rem",
//     fontFamily: "'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     tableLayout: "fixed",
//     backgroundColor: "#d9d2e9",
//   };

//   const thBaseStyle = {
//     padding: "15px 10px",
//     background: "#d3d3d3",
//     color: "#000000",
//     borderBottom: "3px solid rgba(255, 255, 255, 0.1)", // Increased thickness
//     borderRight: "3px solid rgba(255, 255, 255, 0.05)", // Increased thickness
//     verticalAlign: "middle",
//     textAlign: "left",
//     fontWeight: 600,
//     fontSize: "0.73rem",
//     textTransform: "uppercase",
//     letterSpacing: "0.5px",
//     boxSizing: "border-box",
//     whiteSpace: "normal",
//     wordBreak: "break-word",
//     lineHeight: 1.4,
//   };

//   const tdBaseStyle = {
//     padding: "14px 16px",
//     borderBottom: "3px solid rgba(15, 23, 42, 0.05)", // Increased thickness
//     borderRight: "3px solid rgba(15, 23, 42, 0.05)", // Increased thickness
//     verticalAlign: "middle",
//     textAlign: "left",
//     overflow: "hidden",
//     whiteSpace: "normal",
//     fontSize: "0.85rem",
//     wordBreak: "break-word",
//     boxSizing: "border-box",
//     lineHeight: 1.5,
//     color: "#1a2a44",
//     fontWeight: 400,
//     background: "#ffffff",
//     transition: "background 200ms ease",
//   };

//   const headers = [
//     "Category",
//     ...(hasSubtypes ? ["Subtype"] : []),
//     "Model",
//     "L (mm)",
//     "W (mm)",
//     "H (mm)",
//     "Input Current",
//     "IP Rating",
//     "Lumens",
//     "Connector",
//     "Buy Now",
//   ];

//   const totalCols = headers.length;

//   const getCellStyle = (base, colIndex) => {
//     const style = { ...base };
//     style.borderRight = colIndex < totalCols - 1 ? "2px solid rgba(15, 23, 42, 0.05)" : "none";

//     if (colIndex === 0) {
//       style.width = hasSubtypes ? "15%" : "20%";
//       style.paddingLeft = 20;
//     } else if (hasSubtypes && colIndex === 1) {
//       style.width = "15%";
//       style.paddingLeft = 20;
//     } else if (colIndex === (hasSubtypes ? 2 : 1)) {
//       style.width = hasSubtypes ? "15%" : "20%";
//       style.paddingLeft = 20;
//       style.fontWeight = 500;
//     } else if (colIndex < totalCols - 1) {
//       style.width = hasSubtypes ? "8%" : "9%";
//       style.textAlign = "center";
//     } else {
//       style.width = "7%";
//       style.textAlign = "center";
//     }

//     return style;
//   };

//   return (
//     <div style={tableWrapStyle} className="reveal-on-scroll">
//       <table style={tableStyle} aria-label={`${product.title} structured models and specs`}>
//         <colgroup>
//           <col style={{ width: hasSubtypes ? "15%" : "20%" }} />
//           {hasSubtypes && <col style={{ width: "15%" }} />}
//           <col style={{ width: hasSubtypes ? "15%" : "20%" }} />
//           <col style={{ width: hasSubtypes ? "8%" : "9%" }} />
//           <col style={{ width: hasSubtypes ? "8%" : "9%" }} />
//           <col style={{ width: hasSubtypes ? "8%" : "9%" }} />
//           <col style={{ width: hasSubtypes ? "8%" : "9%" }} />
//           <col style={{ width: hasSubtypes ? "8%" : "9%" }} />
//           <col style={{ width: hasSubtypes ? "8%" : "9%" }} />
//           <col style={{ width: hasSubtypes ? "8%" : "9%" }} />
//           <col style={{ width: "7%" }} />
//         </colgroup>

//         <thead>
//           <tr>
//             {headers.map((h, idx) => (
//               <th key={h} style={getCellStyle(thBaseStyle, idx)}>
//                 {h}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         <tbody>
//           {rows.map((r, idx) => {
//             const specs = makeDummySpec(idx);

//             return (
//               <tr
//                 key={`${r.category}-${r.subtype}-${r.model}-${idx}`}
//                 className="table-row"
//               >
//                 {r.catSpan && (
//                   <td rowSpan={r.catSpan} style={getCellStyle(tdBaseStyle, 0)} title={r.category}>
//                     {r.category}
//                   </td>
//                 )}
//                 {hasSubtypes && r.subSpan && (
//                   <td rowSpan={r.subSpan} style={getCellStyle(tdBaseStyle, 1)} title={r.subtype || "-"}>
//                     {r.subtype || "-"}
//                   </td>
//                 )}
//                 <td style={getCellStyle(tdBaseStyle, hasSubtypes ? 2 : 1)} title={r.model}>
//                   {r.model}
//                 </td>
//                 <td style={getCellStyle(tdBaseStyle, hasSubtypes ? 3 : 2)} title={specs.L.toString()}>
//                   {specs.L}
//                 </td>
//                 <td style={getCellStyle(tdBaseStyle, hasSubtypes ? 4 : 3)} title={specs.W.toString()}>
//                   {specs.W}
//                 </td>
//                 <td style={getCellStyle(tdBaseStyle, hasSubtypes ? 5 : 4)} title={specs.H.toString()}>
//                   {specs.H}
//                 </td>
//                 <td style={getCellStyle(tdBaseStyle, hasSubtypes ? 6 : 5)} title={specs.IC}>
//                   {specs.IC}
//                 </td>
//                 <td style={getCellStyle(tdBaseStyle, hasSubtypes ? 7 : 6)} title={specs.IP}>
//                   {specs.IP}
//                 </td>
//                 <td style={getCellStyle(tdBaseStyle, hasSubtypes ? 8 : 7)} title={specs.Lumens.toString()}>
//                   {specs.Lumens}
//                 </td>
//                 <td style={getCellStyle(tdBaseStyle, hasSubtypes ? 9 : 8)} title={specs.Connector}>
//                   {specs.Connector}
//                 </td>
//                 <td style={getCellStyle(tdBaseStyle, hasSubtypes ? 10 : 9)}>
//                  <button
//   key={`buy-${idx}`}
//   style={{
//     color: "white",
//     border: "none",
//     padding: "5px 7px",
//     borderRadius: "5px",
//     cursor: "pointer",
//     fontSize: "1.8rem",
//   }}
// onClick={() => navigate(`/buy/${r.model}`, { state: { productName: slug } })}
// >
//   🛒
// </button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// };

//   const renderCommonSpec = () => {
//     const entries = Object.entries(COMMON_SPECIFICATIONS);

//     const pairedRows = [];
//     for (let i = 0; i < entries.length; i += 2) {
//       const left = entries[i];
//       const right = entries[i + 1] || null;
//       pairedRows.push({ left, right });
//     }

//     const containerStyle = {
//       width: "50%",
//       maxWidth: "650px",
//       maxHeight: "500px",
//       margin: "0.1rem auto 4.2rem",
//       padding: "0",
//       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//       color: "#334155",
//       userSelect: "none",
//       boxSizing: "border-box",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//     };

//     const tableStyle = {
//       width: "100%",
     
//       borderCollapse: "collapse",
//       fontSize: "1rem",
//       tableLayout: "fixed",
//       border: "1px solid #d1d5db",
//     };

//     const headerStyle = {
//       padding: "12px 16px",
//       fontWeight: 700,
//       fontSize: "1.25rem",
//       color: "#1e293b",
//       textAlign: "center",
//       verticalAlign: "middle",
//       boxSizing: "border-box",
//       textTransform: "uppercase",
//       letterSpacing: "0.7px",
//       lineHeight: 1.4,
//       userSelect: "none",
//       borderBottom: "2px solid #cbd5e1",
//       backgroundColor: "#c3c3c3",
//     };

//     const labelCellStyle = {
//       padding: "8px 12px",
//       fontWeight: 600,
//       color: "#475569",
//       borderBottom: "1px solid #d1d5db",
//       width: "25%",
//       whiteSpace: "normal",
//       wordBreak: "break-word",
//       verticalAlign: "middle",
//       textAlign: "left",
//       lineHeight: 1.6,
//       userSelect: "text",
//     };

//     const valueCellStyle = {
//       padding: "8px 12px",
//       color: "#a0a0a0",
//       fontWeight: 500,
//       borderBottom: "1px solid #d1d5db",
//       width: "25%",
//       verticalAlign: "middle",
//       textAlign: "left",
//       lineHeight: 1.6,
//       userSelect: "text",
//       borderRight: "1px solid #d1d5db",
//     };

//     const emptyCellStyle = {
//       padding: "12px 16px",
//       borderBottom: "1px solid #d1d5db",
//       width: "25%",
//       verticalAlign: "middle",
//       lineHeight: 1.6,
//       userSelect: "none",
//     };

//     return (
//       <div style={containerStyle} className="reveal-on-scroll" role="region" aria-labelledby="common-spec-title">
//         <div id="common-spec-title" style={headerStyle} aria-hidden="true">
//           Common Specifications
//         </div>
//         <table style={tableStyle} aria-label="Common Specifications Table" role="table">
//           <tbody>
//             {pairedRows.map((pair, idx) => {
//               const [lKey, lVal] = pair.left;
//               const rightExists = !!pair.right;
//               const [rKey, rVal] = pair.right || ["", ""];

//               return (
//                 <tr key={`cs-row-${idx}`} className="table-row" role="row">
//                   <td style={labelCellStyle} aria-label={lKey} role="rowheader">
//                     {lKey}:
//                   </td>
//                   <td style={valueCellStyle} aria-label={`${lKey} value`} role="cell">
//                     {lVal}
//                   </td>
//                   {rightExists ? (
//                     <>
//                       <td style={labelCellStyle} aria-label={rKey} role="rowheader">
//                         {rKey}:
//                       </td>
//                       <td style={valueCellStyle} aria-label={`${rKey} value`} role="cell">
//                         {rVal}
//                       </td>
//                     </>
//                   ) : (
//                     <>
//                       <td style={emptyCellStyle} />
//                       <td style={emptyCellStyle} />
//                     </>
//                   )}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     );
//   };

//   const galleryImages = [g1, g2, g3];

//   const mainStyle = {
//     width: "100%",
//     color: "#0f172a",
//     minHeight: "100vh",
//     padding: "1.3rem 0rem",
//     background: "linear-gradient(180deg,#fAfbfc,#ffffff)",
//     boxSizing: "border-box",
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "1.2rem",
//     marginLeft: "auto",
//     marginRight: "auto",
   
//   };

//   const titleStyle = {
//     fontSize: "clamp(1.6rem, 3.6vw, 2.6rem)",
//     color: "#0f172a",
//     margin: 0,
//     textAlign: "center",
//     fontWeight: 800,
//     letterSpacing: "0.6px",
//     lineHeight: 1,
//     textTransform: "uppercase",
//     background: "linear-gradient(90deg,#0f172a,#1f3a8a)",
//     WebkitBackgroundClip: "text",
//     backgroundClip: "text",
//     colorRendering: "optimizeLegibility",
//   };

//   const headerRowStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     maxWidth: "1200px",
//     gap: "20rem",
//     padding: "0rem",
//     maxHeight: 265,
//     boxSizing: "border-box",
//     background: "transparent",
//   };

//   const headerImageStyle = {
//     width: "70%",
//     maxWidth: 265,
//     minWidth: 60,
//     maxHeight: 265,
//     height: "auto",
//     objectFit: "contain",
//     borderRadius: 12,
//     marginRight: 10,
//     transition: "transform 400ms ease, box-shadow 400ms ease",
//   };

//   const leftHeaderImageStyle = {
//     width: "70%",
//     maxWidth: 350,
//     minWidth: 70,
//     maxHeight: 350,
//     height: "auto",
//     objectFit: "contain",
//     borderRadius: 12,
//     transition: "transform 400ms ease, box-shadow 400ms ease",
//   };

//   const descriptionContainerStyle = {
//     width: "50%",
//     padding: "2rem 2.4rem",
//     boxSizing: "border-box",
//     background: "#fAfbfc",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     overflowY: "auto",
//     maxHeight: "335px",
//     marginTop: 20,
//   };

//   const paragraphStyle = {
//     fontSize: "clamp(1rem,2.4vw,1.19rem)",
//     lineHeight: 1.75,
//     margin: 0,
//     textAlign: "center",
//     color: "#334155",
//     fontWeight: 500,
//   };

// const navStyle = {
//   width: "100%",
//   maxWidth: "2000px",
//   height: "60px",
//   background: "#fafbfc",
//   borderBottom: "3.5px solid transparent",
//   borderImage: "linear-gradient(to right, transparent 0%, #ef3a3a 0%, #ef3a3a 70%, transparent 100%) 1",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   position: "sticky",
//   top: "60px", // Adjusted to account for the main Navbar height
//   zIndex: 998, // Slightly lower than main Navbar to avoid overlap conflicts
//   boxShadow: "none",
// };
//   const navButtonWrapperStyle = {
//     display: "flex",
//     justifyContent: "flex-start",
//     alignItems: "center",
//     width: "auto",
//     marginLeft: "10rem",
//     marginTop: "1.7rem",
//     zIndex: 998,
//     position: "sticky",
//   };

  

// const sectionTitleStyle = {
//     fontSize: "clamp(1.15rem, 2.6vw, 1.5rem)",
//     marginTop: "2rem",
//     marginBottom: "2rem",
//     color: "#06102b",
//     textAlign: "center",
//     fontWeight: 700,
//     textDecoration: "none", // Remove default underline
//     backgroundImage: "linear-gradient(to left, #ef3a3a 100%, transparent 70%)", // Wider underline effect
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center bottom",
//     backgroundSize: "12% 2.5px", // Increased width to 70%
// };
// const sectionTitleStyle2 = {
//     fontSize: "clamp(1.15rem, 2.6vw, 1.5rem)",
   
//     marginBottom: "3rem",
//     color: "#06102b",
//     textAlign: "center",
//     fontWeight: 700,
//     textDecoration: "none", // Remove default underline
//     backgroundImage: "linear-gradient(to left, #ef3a3a 100%, transparent 70%)", // Wider underline effect
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center bottom",
//     backgroundSize: "28% 2.5px", // Increased width to 70%
// };

// const sectionTitleStyle3 = {
//   fontSize: "clamp(1.15rem, 2.6vw, 1.5rem)",

//   color: "#06102b",
//   textAlign: "center",
//   fontWeight: 700,
//   textDecoration: "none",
//   backgroundImage: "linear-gradient(to left, #ef3a3a 100%, transparent 70%)",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center bottom",
//   backgroundSize: "11% 2.5px",
// };
// const enquireContainerStyle = {
//   width: "100%",
//   maxWidth: "1300px",
//   borderRadius: 12,
//   boxShadow: "0 8px 24px rgba(4, 12, 30, 0.08)",
//   background: "linear-gradient(180deg, #ffffff, #f9fafb)",
//   padding: "0.9rem",
//   border: "1px solid rgba(15, 23, 42, 0.05)",
//   display: "flex",
//   justifyContent: "flex-end",
//   alignItems: "center",
//   fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   fontSize: "1rem",
//   color: "#334155",
//   fontWeight: 500,
//   gap: "1rem",
// };

// const enquireTextStyle = {
//   margin: 0,
// };
// const techGalleryContainerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     gap: "6rem",
//     flexWrap: "wrap",
//     marginBottom: "2rem",
//     padding: "0 1rem",
//     alignItems: "stretch",
//   };

//   const techGalleryImgStyle = {
//     maxWidth: 320,
//     width: "100%",
//     height: "auto",
//     borderRadius: 12,
//     boxShadow: "0 12px 30px rgba(2,6,23,0.06)",
//     userSelect: "none",
//     objectFit: "cover",
//     transform: "translateZ(0)",
//   };

//   const hrStyle = {
//     border: "none",
//     borderTop: "1px solid rgba(15,23,42,0.06)",
//     margin: "2rem auto",
//     width: "90%",
//     opacity: 0.9,
//   };

//   const modalStyle = {
//     position: "fixed",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(0, 0, 0, 0.85)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     zIndex: 2000,
//   };

//   const modalContentStyle = {
//     position: "relative",
//     width: "100%",
//     maxWidth: "95vw",
//     height: "100%",
//     maxHeight: "90vh",
//     display: "flex",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     textAlign: "center",
//     overflow: "hidden",
//     gap: "1rem",
//   };

//   const zoomContainerStyle = {
//     width: "740px",
//     maxWidth: "80vw",
//     height: "600px",
//     maxHeight: "80vh",
//     overflow: "hidden",
//     borderRadius: "12px",
//     boxShadow: "0 12px 30px rgba(2,6,23,0.3)",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     position: "relative",
//     cursor: zoomLevel > 1 ? "move" : "default",
//   };

//   const zoomImageStyle = (zoom, posX, posY) => ({
//     width: "100%",
//     height: "100%",
//     minWidth: `${100 * zoom}%`,
//     minHeight: `${100 * zoom}%`,
//     objectFit: "cover",
//     objectPosition: "center",
//     transform: zoom > 1 ? `translate(${posX}px, ${posY}px)` : "none",
//     transition: isDragging ? "none" : "transform 0.2s ease-in-out",
//   });

//   const controlButtonStyle = {
//     background: "linear-gradient(45deg, #6b7280, #9ca3af)",
//     color: "#ffffff",
//     border: "none",
//     fontSize: "1.5rem",
//     fontWeight: 600,
//     padding: "10px 15px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     width: "50px",
//     height: "50px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//     transition: "transform 0.2s, background 0.2s, box-shadow 0.2s",
//     zIndex: 2100,
//   };

//   const closeButtonStyle = {
//     background: "#ef4444",
//     color: "#ffffff",
//     border: "none",
//     fontSize: "1.5rem",
//     fontWeight: 700,
//     padding: "10px 15px",
//     borderRadius: "8px",
//     cursor: "pointer",
//     width: "50px",
//     height: "50px",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
//     transition: "transform 0.2s, opacity 0.2s",
//     zIndex: 2100,
//   };

//   const buttonContainerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     gap: "10px",
//     alignItems: "center",
//     justifyContent: "center",
//   };

//   return (
//     <>
//       <style>
//         {`
//         @import url('https://fonts.googleapis.com/css?family=Montserrat');

//         :root {
//           --accent: #ef3a3a;
//           --deep: #06102b;
//           --muted: rgba(2,6,23,0.06);
//           --glow: rgba(239,58,58,0.24);
//           --marquee-width: 90vw;
//           --marquee-height: 400px;
//           --marquee-elements-displayed: 4;
//           --marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
//           --marquee-gap: 2rem;
//           --marquee-animation-duration: calc(var(--marquee-elements) * 4s);
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .premium-btn, .action-btn, .reveal-on-scroll, .table-row, .marquee-content, .control-btn, .close-btn, .enquire-btn { 
//             transition: none !important; 
//             animation: none !important; 
//           }
//         }

//         .premium-btn {
//           position: relative;
//           display: inline-flex;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           padding: 10px 18px;
//           font-weight: 700;
//           border-radius: 10px;
//           border: none;
//           color: white;
//           cursor: pointer;
//           background: linear-gradient(90deg, rgba(20,64,160,0.95), rgba(12,34,86,0.98));
//           box-shadow: 0 6px 20px rgba(3,7,18,0.14), 0 0 20px rgba(12,34,86,0.06);
//           overflow: visible;
//           transform: translateZ(0);
//           transition: transform 260ms cubic-bezier(.2,.9,.3,1), box-shadow 260ms, color 200ms;
//         }

//         .premium-btn::before {
//           content: "";
//           position: absolute;
//           left: 0;
//           right: 0;
//           top: -6px;
//           bottom: -6px;
//           borderRadius: 12px;
//           background: radial-gradient(120px 40px at 10% 0%, rgba(255,255,255,0.02), transparent),
//                       radial-gradient(120px 40px at 90% 100%, rgba(255,255,255,0.02), transparent);
//           filter: blur(10px);
//           opacity: 0.9;
//           pointer-events: none;
//           transition: opacity 300ms;
//         }

//         .premium-btn::after {
//           content: "";
//           position: absolute;
//           inset: 0;
//           border-radius: 10px;
//           box-shadow: 0 8px 28px rgba(14,45,120,0.12), 0 0 36px rgba(14,45,120,0.06);
//           mix-blend-mode: screen;
//           opacity: 0.65;
//           transition: opacity 260ms, transform 260ms;
//         }

//         .premium-btn:hover {
//           transform: translateY(-4px) scale(1.02);
//           box-shadow: 0 14px 40px rgba(2,6,23,0.12), 0 0 40px rgba(14,45,120,0.08);
//         }

//         .premium-btn:active {
//           transform: translateY(-1px) scale(0.995);
//         }

//         .action-btn {
//           background: linear-gradient(90deg, var(--accent), #b02a2a);
//           box-shadow: 0 8px 40px rgba(239,58,58,0.18), 0 0 24px rgba(239,58,58,0.09);
//         }

//         .action-btn::after {
//           box-shadow: 0 12px 60px rgba(239,58,58,0.12), 0 0 40px rgba(239,58,58,0.08);
//         }

//         .enquire-btn {
//           background: #ef3a3a;
//           color: #ffffff;
//           font-weight: 700;
//           font-size: 0.9rem;
//           padding: 8px 20px;
//           border-radius: 8px;
//           border: none;
//           margin-right:1.5rem;
//           text-transform: uppercase;
//           letterSpacing: 0.5px;
//           cursor: pointer;         
//           transition: transform 200ms ease, box-shadow 200ms ease, background 200ms ease;
//           z-index: 999;
//         }

//         .enquire-btn:hover {
//           transform: translateY(-2px) scale(1.03);
//         }

//         .enquire-btn:active {
//           transform: translateY(0) scale(0.98);
//           box-shadow: 0 4px 15px rgba(239,58,58,0.25), 0 0 15px rgba(239,58,58,0.1);
//         }

//         @keyframes pulseGlow {
//           0% { box-shadow: 0 6px 16px rgba(239,58,58,0.12), 0 0 0 rgba(239,58,58,0.06); }
//           50% { box-shadow: 0 10px 30px rgba(239,58,58,0.16), 0 0 30px rgba(239,58,58,0.12); }
//           100% { box-shadow: 0 6px 16px rgba(239,58,58,0.12), 0 0 0 rgba(239,58,58,0.06); }
//         }

//         @keyframes scrolling {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(calc(-1 * (var(--marquee-element-width) + var(--marquee-gap)) * var(--marquee-elements))); }
//         }

//         .action-btn.pulse {
//           animation: pulseGlow 3.6s ease-in-out infinite;
//         }

//         .nav-tab {
//           flex: 1 1 0;
//           background: #e3e3e3;
//           border: 2px solid #d3d3d3;
//           padding: 1px 3px;
//           font-weight: 700;
//           font-size: 0.65rem;
//           color: #444444;
//           transition: color 220ms ease, background 260ms ease, transform 220ms ease;
//           border-bottom: 1px solid #d3d3d3;
//           text-align: center;
//           width: 145px;
//           height: 30px;
//           z-index: 998;
//         }

//         .nav-tab:hover {
//           color: #000000;
//           transform: translateY(-2px);
//           background: #e0e0e0;
//         }

//         .nav-tab[aria-current="page"] {
//           color: #ffffff;
//           position: relative;
//           background: #ef3a3a;
//           border: 1.5px solid #ef3a3a;
//           border-bottom: 1px solid #ef3a3a;
//           box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1);
//           z-index: 999;
//           margin-top: 0.3rem;
//            height: 30px;
//           transform: translateY(-2px);
//         }

//         .reveal-on-scroll {
//           opacity: 0;
//           transform: translateY(18px) scale(0.995);
//           transition: opacity 620ms cubic-bezier(.15,.9,.27,1), transform 620ms cubic-bezier(.15,.9,.27,1);
//           will-change: opacity, transform;
//         }

//         .reveal-on-scroll.in-view {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//         }

//         .table-row:hover td {
//           background: #efefef;
//         }

//         .header-stack {
//           gap: 2.5rem;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .header-image {
//           width: 45%;
//           max-width: 520px;
//           min-width: 160px;
//           height: auto;
//           object-fit: contain;
//           border-radius: 12px;
//         }

//         .header-image.left {
//           max-height: 380px;
//         }

//         .header-image.right {
//           max-height: 320px;
//         }

//         .description-common-spec-container {
//           display: flex;
//           justify-content: space-between;
//           width: 100%;
//           max-width: 1300px;
//           gap: 2rem;
//         }

//         .gallery-section {
//           padding: 3rem 0;
//           overflow: hidden;
//           width: 100%;
//           max-width: 1200px;
//         }

//      .marquee {
//       width: var(--marquee-width);
//       height: var(--marquee-height);
//       background-color: transparent;
//       overflow: hidden;
//       position: relative;
//       margin: 0 auto;
//     }

//     .marquee:before, .marquee:after {
//       position: absolute;
//       top: 0;
//       width: 15rem; /* Increased from 12rem to make gradient more visible */
//       height: 100%;
//       content: "";
//       z-index: 20; /* Increased from 10 to ensure gradient is above content */
//     }

//     .marquee:before {
//       left: 0;
     
//     }

//     .marquee:after {
//       right: 0;
     
//     }

//     .marquee-content {
//       list-style: none;
//       height: 100%;
//       display: flex;
//       animation: scrolling var(--marquee-animation-duration) linear infinite;
//       padding: 0;
//       margin: 0;
//     }

//     .marquee-content:hover {
//       animation-play-state: paused;
//     }

//     .marquee-content li {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       flex-shrink: 0;
//       width: var(--marquee-element-width);
//       max-height: 100%;
//       margin-right: var(--marquee-gap);
//       white-space: nowrap;
//     }

//     .marquee-content li img {
//       width: 480px;
//       height: 290px;
//       border-radius: 12px;
//       box-shadow: 0 12px 30px rgba(2,6,23,0.06);
//       object-fit: cover;
//       object-position: center;
//       cursor: pointer;
//       transition: transform 0.3s ease;
//     }

//     .marquee-content li:hover img {
//       transform: scale(1.08);
//     }
//         .control-btn:hover {
//           background: linear-gradient(45deg, #9ca3af, #d1d5db);
//           transform: scale(1.05);
//           box-shadow: 0 6px 16px rgba(0,0,0,0.3);
//         }

//         .control-btn:active {
//           transform: scale(0.95);
//         }

//         .close-btn:hover {
//           opacity: 0.9;
//           transform: scale(1.1);
//         }

//         .close-btn:active {
//           transform: scale(0.95);
//         }

//         @media (max-width: 760px) {
//           :root {
//             --marquee-width: 100vw;
//             --marquee-height: 320px;
//             --marquee-elements-displayed: 3;
//             --marquee-gap: 1.5rem;
//           }
//           .header-stack { flex-direction: column; align-items: center; gap: 1rem; }
//           .header-image { width: 86% !important; max-width: 520px; }
//           .header-image.left { max-height: 380px; }
//           .header-image.right { max-height: 320px; }
//           .tech-grid { gap: 1rem; }
//           .description-common-spec-container { flex-direction: column; }
//           .description-common-spec-container > div { width: 100% !important; }
//           .gallery-section { padding: 1.5rem 0; }
//           .marquee-content li img { width: 360px; height: 280px; }
//           .marquee-content li { margin-right: var(--marquee-gap); }
//           .marquee:before, .marquee:after { width: 5rem; }
//           .enquire-btn { font-size: 0.8rem; padding: 8px 16px; }
//         }

//         @media (max-width: 420px) {
//           :root {
//             --marquee-height: 240px;
//             --marquee-elements-displayed: 2;
//             --marquee-gap: 1rem;
//           }
//           .premium-btn { font-size: 0.9rem; padding: 10px 12px; border-radius: 8px; }
//           .control-btn { padding: 8px 12px; font-size: 1.2rem; }
//           .close-btn { width: 32px; height: 32px; font-size: 1.2rem; }
//           .marquee-content li img { width: 240px; height: 200px; }
//           .marquee-content li { margin-right: var(--marquee-gap); }
//           .enquire-btn { font-size: 0.75rem; padding: 6px 12px; }
//         }
//       `}
//       </style>

//       <Navbar />
//       <main ref={rootRef} aria-label={`Details for product ${product.title}`} style={mainStyle}>
//         <div style={{ width: "100%", maxWidth: 1300 }}>
//           <h1 style={titleStyle} className="reveal-on-scroll">
//             {product.title}
//           </h1>
//         </div>

//         <div className="header-stack reveal-on-scroll" style={headerRowStyle}>
//           <img
//             src={product.image}
//             alt={`${product.title} left`}
//             className="img-glow header-image left"
//             style={leftHeaderImageStyle}
//             draggable={false}
//             loading="lazy"
//           />
//           {product.image2 ? (
//             <img
//               src={product.image2}
//               alt={`${product.title} right`}
//               className="img-glow header-image right"
//               style={headerImageStyle}
//               draggable={false}
//               loading="lazy"
//             />
//           ) : (
//             <div style={{ width: headerImageStyle.width, minWidth: headerImageStyle.minWidth }} />
//           )}
//         </div>

//         <div className="description-common-spec-container reveal-on-scroll">
//           <div style={descriptionContainerStyle}>
//             <p style={paragraphStyle}>{product.description.intro}</p>
//           </div>
//           {renderCommonSpec()}
//         </div>

//      <nav id="navbar" aria-label="Product details navigation" style={navStyle} className="reveal-on-scroll">
//   <div style={navButtonWrapperStyle}>
//     <button
//       onClick={() => handleNavClick("product")}
//       aria-current={activeSection === "product" ? "page" : undefined}
//       className="nav-tab"
//       style={{ marginRight: "10px", borderRadius: "6px 6px 0 0", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
//     >
//       PRODUCTS
//     </button>
//     <button
//       onClick={() => handleNavClick("technical")}
//       aria-current={activeSection === "technical" ? "page" : undefined}
//       className="nav-tab"
//       style={{ marginRight: "10px", borderRadius: "6px 6px 0 0", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
//     >
//       TECHNICAL INFORMATION
//     </button>
//     <button
//       onClick={() => handleNavClick("gallery")}
//       aria-current={activeSection === "gallery" ? "page" : undefined}
//       className="nav-tab"
//       style={{ borderRadius: "6px 6px 0 0", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
//     >
//       GALLERY
//     </button>
//   </div>
  
// </nav>

//         <section
//           ref={productSectionRef}
//           id="product"
//           style={{ width: "100%", maxWidth: 1300, scrollMarginTop: "120px" }}
//           className="reveal-on-scroll"
//         >
//           <h2 style={sectionTitleStyle}>PRODUCTS</h2>
//           {renderModelStructureTable()}
//           <div style={enquireContainerStyle} className="enquire reveal-on-scroll">
//             <span style={enquireTextStyle}>Need customized light?</span>
              
//             <button
//               onClick={() => navigate("/enquire", { state: { productName: slug } })}
//               className="enquire-btn"
//               aria-label="Enquire now"
//             >
//               Enquire Now
//             </button>

//           </div>
//         </section>

//         <hr style={hrStyle} />

//         <section
//           ref={techInfoSectionRef}
//           id="technical"
//           style={{ width: "100%", maxWidth: 1200, scrollMarginTop: "160px" }}
//           aria-label="Technical Information"
//           className="reveal-on-scroll"
//         >
//           <h2 style={sectionTitleStyle2} >TECHNICAL INFORMATION</h2>
//           <div style={techGalleryContainerStyle} className="tech-grid">
//             {[info1, info2, info3].map((imgSrc, i) => (
//               <img
//                 key={i}
//                 src={imgSrc}
//                 alt={`Technical info ${i + 1}`}
//                 loading="lazy"
//                 draggable={false}
//                 style={techGalleryImgStyle}
//                 className="img-glow reveal-on-scroll"
//               />
//             ))}
//           </div>
   
//         </section>
//         <hr style={hrStyle} />

//         <section
//           ref={gallerySectionRef}
//           id="gallery"
//           className="gallery-section reveal-on-scroll"
//           style={{ scrollMarginTop: "110px", width:"100%", maxWidth:"1300px" }}
//           aria-label="Gallery"
//         >
//           <h2 style={sectionTitleStyle3}>GALLERY</h2>
//           <div className="marquee">
//             <ul className="marquee-content" ref={marqueeRef}>
//               {galleryImages.map((imgSrc, i) => (
//                 <li key={i}>
//                   <img
//                     src={imgSrc}
//                     alt={`Gallery image ${i + 1}`}
//                     loading="lazy"
//                     draggable={false}
//                     onClick={() => handleImageClick(imgSrc)}
//                   />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </section>

//         {selectedImage && (
//           <div style={modalStyle} onClick={handleCloseModal}>
//             <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
//               <div
//                 ref={zoomContainerRef}
//                 style={zoomContainerStyle}
//                 onMouseDown={handleMouseDown}
//                 onMouseMove={handleMouseMove}
//                 onMouseUp={handleMouseUp}
//                 onMouseLeave={handleMouseUp}
//                 onTouchStart={handleTouchStart}
//                 onTouchMove={handleTouchMove}
//                 onTouchEnd={handleTouchEnd}
//               >
//                 <img
//                   src={selectedImage}
//                   alt="Zoomed image"
//                   style={zoomImageStyle(zoomLevel, position.x, position.y)}
//                   draggable={false}
//                 />
//               </div>
//               <div style={buttonContainerStyle}>
//                 <button
//                   style={controlButtonStyle}
//                   onClick={handleZoomIn}
//                   className="control-btn"
//                   aria-label="Zoom in"
//                 >
//                   +
//                 </button>
//                 <button
//                   style={controlButtonStyle}
//                   onClick={handleZoomOut}
//                   className="control-btn"
//                   aria-label="Zoom out"
//                 >
//                   −
//                 </button>
//                 <button
//                   style={closeButtonStyle}
//                   onClick={handleCloseModal}
//                   className="close-btn"
//                   aria-label="Close modal"
//                 >
//                   <svg
//                     width="20"
//                     height="20"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="#ffffff"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M18 6L6 18" />
//                     <path d="M6 6l12 12" />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}


//         <div style={{ textAlign: "center", width: "100%", maxWidth: 1200 }} className="reveal-on-scroll">
//           <button
//             onClick={() => navigate("/dashboardTwo")}
//             aria-label="Go back to products"
//             className="premium-btn action-btn pulse"
//             style={{ marginTop: 6 }}
//           >
//             Back to Products
//           </button>
//         </div>
//       </main>
//     </>
//   );
// };



import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

// Import assets
import Bar_Light from "../assets/Lights/BarLight.png";
import Ring_Light from "../assets/Lights/RingLight.png";
import Dome_Light from "../assets/Lights/DomeLight.png";
import Flat_Diffused_Light_With_Center_Hole from "../assets/Lights/DirectDiffusedLight.png";
import Flat_Diffused_Light from "../assets/Lights/DiffusedLight.png";
import Indirect_Flat_Light from "../assets/Lights/IndirectFlatLight.png";
import Back_Light from "../assets/Lights/BackLight.png";
import Spot_Light from "../assets/Lights/SpotLight.png";
import Tunnel_Light from "../assets/Lights/TunnelLight.png";

import Bar_Light_info from "../assets/Lights/Bar_Light.png";
import Ring_Light_info from "../assets/Lights/Ring_Light.png";
import Dome_Light_info from "../assets/Lights/Dome_Light.png";
import Flat_Diffused_Light_With_Center_Hole_info from "../assets/Lights/Flat_Direct_Diffused_Light_With_Center_Hole.png";
import Flat_Diffused_Light_info from "../assets/Lights/Flat_DIrect_Diffused_Light.png";
import Indirect_Flat_Light_info from "../assets/Lights/Indirect_Flat_Light.png";
import Back_Light_info from "../assets/Lights/Back_Light.png";
import Spot_Light_info from "../assets/Lights/Spot_Light.png";
import Tunnel_Light_info from "../assets/Lights/Tunnel_Light.png";

import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";


import BarLight1 from "../assets/barLightGallery/BarLightImg(2).webp";
import BarLight2 from "../assets/barLightGallery/BarLightImg(1).webp";
import BarLight3 from "../assets/barLightGallery/BarLightImg(3).webp";
import BarLight4 from "../assets/barLightGallery/BarLightImg(23).webp";
import BarLight5 from "../assets/barLightGallery/BarLightImg(5).webp";
import BarLight6 from "../assets/barLightGallery/BarLightImg(19).webp";
import BarLight7 from "../assets/barLightGallery/BarLightImg(36).webp";
import BarLight8 from "../assets/barLightGallery/BarLightImg(48).webp";

import RingLight1 from "../assets/RingLightGallery/RIngLightImg(21).webp";
import RingLight2 from "../assets/RingLightGallery/RIngLightImg(65).webp";
import RingLight3 from "../assets/RingLightGallery/RIngLightImg(1).webp";
import RingLight4 from "../assets/RingLightGallery/RIngLightImg(39).webp";
import RingLight5 from "../assets/RingLightGallery/RIngLightImg(6).webp";
import RingLight6 from "../assets/RingLightGallery/RIngLightImg(9).webp";
import RingLight7 from "../assets/RingLightGallery/RIngLightImg(83).webp";
import RingLight8 from "../assets/RingLightGallery/RIngLightImg(34).webp";

import DomeLight1 from "../assets/DomeLightGallery/DomeLight(2).webp";
import DomeLight2 from "../assets/DomeLightGallery/DomeLight(6).webp";
import DomeLight3 from "../assets/DomeLightGallery/DomeLight(4).webp";
import DomeLight4 from "../assets/DomeLightGallery/DomeLight(7).webp";
import DomeLight5 from "../assets/DomeLightGallery/DomeLight(3).webp";

import FlatDiffusedLightWithCenterHole1 from "../assets/DiffusedLightWithCenterHoleGallery/diffusedLightWithCenterHoleimg(1).webp";
import FlatDiffusedLightWithCenterHole2 from "../assets/DiffusedLightWithCenterHoleGallery/diffusedLightWithCenterHoleimg(6).webp";
import FlatDiffusedLightWithCenterHole3 from "../assets/DiffusedLightWithCenterHoleGallery/diffusedLightWithCenterHoleimg(5).webp";
import FlatDiffusedLightWithCenterHole4 from "../assets/DiffusedLightWithCenterHoleGallery/diffusedLightWithCenterHoleimg(8).webp";
import FlatDiffusedLightWithCenterHole5 from "../assets/DiffusedLightWithCenterHoleGallery/diffusedLightWithCenterHoleimg(4).webp";


import FlatDiffusedLight1 from "../assets/flatdiffusedGallery/FlatDiffusedImg(1).webp";
import FlatDiffusedLight2 from "../assets/flatdiffusedGallery/FlatDiffusedImg(2).webp";
import FlatDiffusedLight3 from "../assets/flatdiffusedGallery/FlatDiffusedImg(3).webp";
import FlatDiffusedLight4 from "../assets/flatdiffusedGallery/FlatDiffusedImg(4).webp";
import FlatDiffusedLight5 from "../assets/flatdiffusedGallery/FlatDiffusedImg(6).webp";


import IndirectFlatLight1 from "../assets/IndirectLightGallery/IDFL.webp";

import BackLight1 from "../assets/BackLightGallery/BackLight(3).webp";
import BackLight2 from "../assets/BackLightGallery/BackLight(10).webp";
import BackLight3 from "../assets/BackLightGallery/BackLight(16).webp";
import BackLight4 from "../assets/BackLightGallery/BackLight(12).webp";
import BackLight5 from "../assets/BackLightGallery/BackLight(15).webp";
import BackLight6 from "../assets/BackLightGallery/BackLight(6).webp";
import BackLight7 from "../assets/BackLightGallery/BackLight(11).webp";
import BackLight8 from "../assets/BackLightGallery/BackLight(13).webp";
import BackLight9 from "../assets/BackLightGallery/BackLight(8).webp";



import SpotLight1 from "../assets/SpotLightGallery/SpotLightImg(7).webp";
import SpotLight2 from "../assets/SpotLightGallery/SpotLightImg(4).webp";
import SpotLight3 from "../assets/SpotLightGallery/SpotLightImg(6).webp";
import SpotLight4 from "../assets/SpotLightGallery/SpotLightImg(8).webp";
import SpotLight5 from "../assets/SpotLightGallery/SpotLightImg(9).webp";




// import TunnelLight1 from "../assets/TunnelLight(1).png";
// import TunnelLight2 from "../assets/TunnelLight(2).png";
// import TunnelLight3 from "../assets/TunnelLight(3).png";s
// Import dimension images
import bar_light_dimension from "../assets/Dimension/Bar_Light_Dimension.jpg";
import ring_light_dimension from "../assets/Dimension/ring_light_dimension.jpg";
import dome_light_dimension from "../assets/Dimension/Dome_Light_Dimension.png";
import flat_diffused_light_with_center_hole_dimension from "../assets/Dimension/Flat_Diffused_Light_With_Center_Hole_Dimension.png";
import flat_diffused_light_dimension from "../assets/Dimension/Flat_Diffused_Light_Dimension.png";
import indirect_flat_light_dimension from "../assets/Dimension/Indirect_Flat_Light_Dimension.png";
import back_light_dimension from "../assets/Dimension/Back_Light_Dimension.png";
import spot_light_dimension from "../assets/Dimension/Spot_Light_Dimension.png";
import tunnel_light_dimension from "../assets/Dimension/Tunnel_Light_Dimension.png";



const COMMON_SPECIFICATIONS = {
  "Type of Illumination": "LED Illuminator",
  Manufacturer: "CVIT",
  Warranty: "6 Months",
  "Illumination Mode": "Strobed or Constant",
  "Input Voltage (V)": "24V DC",
  "Operating Temperature": "-10°C to 50°C",
  "IP Rating": "IP55",
 
};

const galleryImagesMap = {
  "bar-light": [BarLight1, BarLight2, BarLight3, BarLight4, BarLight5, BarLight6,BarLight7, BarLight8],
  "ring-light": [RingLight1, RingLight2, RingLight3,RingLight4, RingLight5, RingLight6,RingLight7, RingLight8],
  "dome-light": [DomeLight1, DomeLight2, DomeLight3, DomeLight4, DomeLight5],
  "flat-diffused-light-with-center-hole": [FlatDiffusedLightWithCenterHole1, FlatDiffusedLightWithCenterHole2, FlatDiffusedLightWithCenterHole3,FlatDiffusedLightWithCenterHole4, FlatDiffusedLightWithCenterHole5],
  "flat-diffused-light": [FlatDiffusedLight1, FlatDiffusedLight2, FlatDiffusedLight3, FlatDiffusedLight4, FlatDiffusedLight5],
  "indirect-flat-light": [IndirectFlatLight1,g1,g2],
  "back-light": [BackLight1, BackLight2, BackLight3,BackLight4, BackLight5, BackLight6,BackLight7, BackLight8, BackLight9],
  "spot-light": [SpotLight1, SpotLight2, SpotLight3,SpotLight4, SpotLight5],
  "tunnel-light": [g3, g1, g2],
};

const productsData = {
  "bar-light": {
    title: "BAR LIGHT",
    image: Bar_Light,
    image2: Bar_Light_info,
    description: {
      intro: "Machine vision bar lights are elongated, high-output LED lighting modules designed to provide consistent and directional illumination across wide inspection areas. They are well-suited for tasks such as examining large-scale parts or monitoring items moving at high speed on conveyor lines. Depending on their mounting orientation, these lights can function in bright-field mode—positioned perpendicularly to the object surface to improve the visibility of flat, printed, or reflective features—or in dark-field mode, where they are angled shallowly to highlight fine surface structures, edges, and imperfections like scratches, burrs, or dents. Their performance is supported by attributes such as uniform light distribution, adjustable intensity control, and the option to select from multiple spectral outputs (white, red, blue, green, infrared, or ultraviolet). This versatility allows bar lights to be tuned to the optical characteristics of different materials and inspection objectives, while ensuring stable illumination necessary for reliable image processing and advanced vision analysis."
    },
specifications: [
      ["Model", "CMVBRL32632240200", "CMVBRL22632240150", "CMVBRL12632240100", "CMVBRL42060240500"],
      ["Electrical Input", "24 V", "24 V", "24 V", "24 V"],
      ["Input Current", "300 mA", "350 mA", "400 mA", "450 mA"],
      ["Lumens", "1800", "1500", "2000", "2500"],
      ["Colour", "Red", "White", "Cool White", "White"],
      ["Colour Temp", "N/A", "6500K", "5000K", "6000K"],
      ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
      ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
      ["IP Rating", "IP 65", "IP 65", "IP 65", "IP 65"],
      ["Weight", "0.350 KG", "0.274 KG", "0.192 KG", "0.427 KG"],
    ],
    modelTree: [
      {
        name: "Diffused",
        submenu: [
          { 
            name: "CMVBRL7632240150", 
            dimensions: { A: 76, B: 70, C: 22, D: 32, E: 33, F: 60 }, 
            inputVolt: "24V", 
            power: "0.15A", 
            lumens: 1500, 
            color: "Red" 
          },
          { 
            name: "CMVBRL12632240150", 
            dimensions: { A: 126, B: 120, C: 22, D: 32, E: 33, F: 80 }, 
            inputVolt: "24V", 
            power: "0.15A", 
            lumens: 1500, 
            color: "Red" 
          },
          { 
            name: "CMVBRL22632240150", 
            dimensions: { A: 226, B: 220, C: 22, D: 32, E: 33, F: 80 }, 
            inputVolt: "24V", 
            power: "0.15A", 
            lumens: 1500, 
            color: "Red" 
          },
          { 
            name: "CMVBRL32632240150", 
            dimensions: { A: 326, B: 320, C: 22, D: 32, E: 33, F: 80 }, 
            inputVolt: "24V", 
            power: "0.15A", 
            lumens: 1500, 
            color: "Red" 
          },
          { 
            name: "CMVBRL42632240150", 
            dimensions: { A: 426, B: 420, C: 22, D: 32, E: 33, F: 160 }, 
            inputVolt: "24V", 
            power: "0.15A", 
            lumens: 1500, 
            color: "Red" 
          },
          { 
            name: "CMVBRL42660240150", 
            dimensions: { A: 432, B: 406, C: 62, D: 78, E: 38, F: "2*88" }, 
            inputVolt: "24V", 
            power: "0.15A", 
            lumens: 1500, 
            color: "Red" 
          },
        ],
      },
      {
        name: "Non-Diffused",
        submenu: [
          { 
            name: "CMVBRL7632240150", 
            dimensions: { A: 76, B: 70, C: 22, D: 32, E: 33, F: 60 }, 
            inputVolt: "24V", 
            power: "0.15A", 
            lumens: 1500, 
            color: "Red" 
          },
          { 
            name: "CMVBRL12632240150", 
            dimensions: { A: 126, B: 120, C: 22, D: 32, E: 33, F: 80 }, 
            inputVolt: "24V", 
            power: "0.15A", 
            lumens: 1500, 
            color: "Red" 
          },
          { 
            name: "CMVBRL22632240150", 
            dimensions: { A: 226, B: 220, C: 22, D: 32, E: 33, F: 80 }, 
            inputVolt: "24V", 
            power: "0.15A", 
            lumens: 1500, 
            color: "Red" 
          },
          { 
            name: "CMVBRL32632240150", 
            dimensions: { A: 326, B: 320, C: 22, D: 32, E: 33, F: 80 }, 
            inputVolt: "24V", 
            power: "0.15A", 
            lumens: 1500, 
            color: "Red" 
          },
          { 
            name: "CMVBRL42632240150", 
            dimensions: { A: 426, B: 420, C: 22, D: 32, E: 33, F: 160 }, 
            inputVolt: "24V", 
            power: "0.15A", 
            lumens: 1500, 
            color: "Red" 
          },
          { 
            name: "CMVBRL62660240150", 
            dimensions: { A: 432, B: 406, C: 62, D: 78, E: 38, F: "2*88" }, 
            inputVolt: "24V", 
            power: "0.15A", 
            lumens: 1500, 
            color: "Red" 
          },
        ],
      },
      
    ],
  
  },
  "ring-light": {
    title: "RING LIGHT",
    image: Ring_Light,
    image2: Ring_Light_info,
    description: {
      intro: "Machine vision ring lights are circular LED-based illumination units engineered to deliver consistent, shadow-minimized lighting aligned with a camera’s optical axis. Their annular design ensures balanced light distribution across the inspection area, which improves contrast and reduces shading when imaging components with uneven geometries or reflective finishes. By varying the mounting angle and distance, ring lights can be applied in bright-field mode to enhance printed or flat surfaces, or in diffuse mode to suppress glare from polished metals, plastics, or glass.These illuminators are produced in multiple wavelengths—including visible, infrared, and ultraviolet—so that lighting can be tuned to material characteristics and inspection goals. Advanced variants offer adjustable intensity, strobe operation, and optional polarizers for improved control of reflections. Their coaxial placement with the lens makes them highly effective in precision tasks such as defect detection, code recognition, assembly verification, and dimensional inspection, where uniform, stable lighting is essential."
    },
    specifications: [
      ["Model", "CMVRL15090240210", "CMVRL20095240500", "CMVRL20065240500", "CMVRL14069240210"],
      ["Electrical Input", "24 V", "24 V", "24 V", "24 V"],
      ["Input Current", "300 mA", "350 mA", "400 mA", "450 mA"],
      ["Lumens", "1800", "1500", "2000", "2500"],
      ["Colour", "Red", "White", "Cool White", "White"],
      ["Colour Temp", "N/A", "6500K", "5000K", "6000K"],
      ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
      ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
      ["IP Rating", "IP 65", "IP 65", "IP 65", "IP 65"],
      ["Weight", "0.192 KG", "0.274 KG", "0.350 KG", "0.427 KG"],
    ],
    modelTree: [
      {
        name: "Diffused",
        submenu: [
          {
            name: "Flat Ring Light",
            submenu: [
              { name: "CMVRL005425", dimensions: { A: 54, B: 25, C: 20, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVRL007038", dimensions: { A: 70, B: 38, C: 55, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVRL009953", dimensions: { A: 99, B: 53, C: 74, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVRL012290", dimensions: { A: 122, B: 90, C: 106, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVRL014069", dimensions: { A: 140, B: 69, C: 86, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVRL220110", dimensions: { A: 220, B: 110, C: 140, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVRL024050", dimensions: { A: 240, B: 50, C: 160, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
            ],
          },
          {
            name: "High Angle Ring Light",
            submenu: [
              { name: "CMVHARL007038", dimensions: { A: 70, B: 38, C: 55, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL009953", dimensions: { A: 99, B: 53, C: 74, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL012290", dimensions: { A: 122, B: 90, C: 106, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL014069", dimensions: { A: 140, B: 69, C: 86, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL220110", dimensions: { A: 220, B: 110, C: 140, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
            ],
          },
          {
            name: "Low Angle Ring Light",
            submenu: [
              { name: "CMVHARL005225", dimensions: { A: 54, B: 25, C: 20, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL007338", dimensions: { A: 73, B: 38, C: 55, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL009953", dimensions: { A: 99, B: 53, C: 74, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL012290", dimensions: { A: 122, B: 90, C: 106, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL014069", dimensions: { A: 140, B: 69, C: 86, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL220110", dimensions: { A: 220, B: 110, C: 140, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL024050", dimensions: { A: 240, B: 50, C: 160, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
            ],
          },
        ],
      },
      {
        name: "Non-Diffused",
        submenu: [
          {
            name: "Flat Ring Light",
            submenu: [
              { name: "CMVRL005425", dimensions: { A: 54, B: 25, C: 20, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVRL007038", dimensions: { A: 70, B: 38, C: 55, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVRL009953", dimensions: { A: 99, B: 53, C: 74, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVRL012290", dimensions: { A: 122, B: 90, C: 106, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVRL014069", dimensions: { A: 140, B: 69, C: 86, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVRL220110", dimensions: { A: 220, B: 110, C: 140, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVRL024050", dimensions: { A: 240, B: 50, C: 160, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
            ],
          },
          {
            name: "High Angle Ring Light",
            submenu: [
              { name: "CMVHARL007038", dimensions: { A: 52, B: 25, C: 40, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL007038", dimensions: { A: 70, B: 38, C: 55, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL009953", dimensions: { A: 99, B: 53, C: 74, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
            ],
          },
          {
            name: "Low Angle Ring Light",
            submenu: [
              { name: "CMVHARL005225", dimensions: { A: 52, B: 25, C: 40, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL007338", dimensions: { A: 73, B: 38, C: 55, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL009953", dimensions: { A: 99, B: 53, C: 74, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL012290", dimensions: { A: 122, B: 90, C: 106, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL014069", dimensions: { A: 140, B: 69, C: 86, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL220110", dimensions: { A: 220, B: 110, C: 140, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
              { name: "CMVHARL024050", dimensions: { A: 240, B: 50, C: 160, D: "-" }, inputVolt: "24V", power: "0.30A", lumens: 1800, color: "Red" },
            ],
          },
        ],
      },
    ],
  },
  "dome-light": {
    title: "DOME LIGHT",
    image: Dome_Light,
    image2: Dome_Light_info,
    description: {
      intro: "Dome Lights offer diffused lighting from all sides, ideal for reducing glare and reflections on curved surfaces."
    },
    specifications: [
      ["Model", "CMVDL629256240210", "CMVDL120200120240500", "CMVDL7614888240210"],
      ["Electrical Input", "24 V", "24 V", "24 V"],
      ["Input Current", "300 mA", "350 mA", "400 mA"],
      ["Lumens", "1800", "1500", "2000"],
      ["Colour", "Red", "White", "Cool White"],
      ["Colour Temp", "N/A", "6500K", "5000K"],
      ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
      ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
      ["IP Rating", "IP 65", "IP 65", "IP 65"],
      ["Weight", "0.192 KG", "0.274 KG", "0.350 KG"],
    ],
    modelTree: [
      {
        name: "Aluminium Body",
        submenu: [
          { name: "CMVDL629256240210" },
          { name: "CMVDL120200120240500" },
          { name: "CMVDL7614888240210" },
        ],
      },
      {
        name: "Plastic Body",
        submenu: [
          { name: "CMVDL170250135240500" },
          { name: "CMVDL120200120240500" },
          { name: "CMVDL7614888240210" },
          { name: "CMVDL629256240210" },
        ],
      },
    ],
  },
  "flat-diffused-light-with-center-hole": {
    title: "FLAT DIFFUSED LIGHT WITH CENTER HOLE",
    image: Flat_Diffused_Light_With_Center_Hole,
    image2: Flat_Diffused_Light_With_Center_Hole_info,
    description: {
      intro: "Flat Diffused Light With Center Hole provides uniform lighting with an aperture in the middle to accommodate camera lenses or sensors."
    },
    specifications: [
      ["Model", "CMVDFLCH15020025240430", "CMVDFLCH20020025240430", "CMVDFLCH37227225240430", "CMVDFLCH40040025240860"],
      ["Electrical Input", "24 V", "24 V", "24 V", "24 V"],
      ["Input Current", "300 mA", "350 mA", "400 mA", "450 mA"],
      ["Lumens", "1800", "1500", "2000", "2500"],
      ["Colour", "Red", "White", "Cool White", "White"],
      ["Colour Temp", "N/A", "6500K", "5000K", "6000K"],
      ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
      ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
      ["IP Rating", "IP 65", "IP 65", "IP 65", "IP 65"],
      ["Weight", "0.192 KG", "0.274 KG", "0.350 KG", "0.427 KG"],
    ],
    modelTree: [
      {
        name: "Aluminium Body",
        submenu: [
          { name: "CMVDFLCH15020025240430" },
          { name: "CMVDFLCH20020025240430" },
          { name: "CMVDFLCH37227225240430" },
          { name: "CMVDFLCH40040025240860" },
        ],
      },
      {
        name: "MS Body",
        submenu: [
          { name: "CMVDFLCH15020025240430" },
          { name: "CMVDFLCH20020025240430" },
          { name: "CMVDFLCH37227225240430" },
          { name: "CMVDFLCH40040025240860" },
        ],
      },
    ],
  },
  "flat-diffused-light": {
    title: "FLAT DIFFUSED LIGHT",
    image: Flat_Diffused_Light,
    image2: Flat_Diffused_Light_info,
    description: {
      intro: "Flat Diffused Light is ideal for uniform illumination with minimal shadows, used in industrial inspection and machine vision applications."
    },
    specifications: [
      ["Model", "CMVFL-1262240160", "CMVFL-2362240150", "CMVFL-3262240200"],
      ["Electrical Input", "24 V", "24 V", "24 V"],
      ["Input Current", "300 mA", "350 mA", "400 mA"],
      ["Lumens", "1800", "1500", "2000"],
      ["Colour", "Red", "White", "Cool White"],
      ["Colour Temp", "N/A", "6500K", "5000K"],
      ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
      ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
      ["IP Rating", "IP 65", "IP 65", "IP 65"],
      ["Weight", "0.192 KG", "0.274 KG", "0.350 KG"],
    ],
    modelTree: [
      { name: "CMVFL-1262240160" },
      { name: "CMVFL-2362240150" },
      { name: "CMVFL-3262240200" },
      { name: "CMVFL-4262240250" },
    ],
  },
  "indirect-flat-light": {
    title: "INDIRECT FLAT LIGHT",
    image: Indirect_Flat_Light,
    image2: Indirect_Flat_Light_info,
    description: {
      intro: "Indirect Flat Light provides indirect illumination via reflective surfaces, reducing hotspots and enhancing surface defect detection."
    },
    specifications: [
      ["Model", "CMVIDFLCH22014030240600", "CMVIDFLCH42042032241000", "CMVIDFLCH42035030240800", "CMVIDFLCH42032032240800"],
      ["Electrical Input", "24 V", "24 V", "24 V", "24 V"],
      ["Input Current", "300 mA", "350 mA", "400 mA", "450 mA"],
      ["Lumens", "1800", "1500", "2000", "2500"],
      ["Colour", "Red", "White", "Cool White", "White"],
      ["Colour Temp", "N/A", "6500K", "5000K", "6000K"],
      ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
      ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
      ["IP Rating", "IP 65", "IP 65", "IP 65", "IP 65"],
      ["Weight", "0.192 KG", "0.274 KG", "0.350 KG", "0.427 KG"],
    ],
    modelTree: [
      { name: "CMVIDFLCH22014030240600" },
      { name: "CMVIDFLCH42042032241000" },
      { name: "CMVIDFLCH42035030240800" },
      { name: "CMVIDFLCH42032032240800" },
    ],
  },
  "back-light": {
    title: "BACK LIGHT",
    image: Back_Light,
    image2: Back_Light_info,
    description: {
      intro: "Back Lights produce strong background illumination to create silhouettes of the object, useful for shape and outline inspection."
    },
    specifications: [
      ["Model", "CMVBKL12612640240200", "CMVBKL15015045240200", "CMVBKL22014040240200"],
      ["Electrical Input", "24 V", "24 V", "24 V"],
      ["Input Current", "300 mA", "350 mA", "400 mA"],
      ["Lumens", "1800", "1500", "2000"],
      ["Colour", "Red", "White", "Cool White"],
      ["Colour Temp", "N/A", "6500K", "5000K"],
      ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
      ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
      ["IP Rating", "IP 65", "IP 64", "IP 65"],
      ["Weight", "0.192 KG", "0.274 KG", "0.350 KG"],
    ],
    modelTree: [
      {
        name: "Aluminium Body",
        submenu: [
          { name: "CMVBKL12612640240200" },
          { name: "CMVBKL15015045240200" },
          { name: "CMVBKL22014040240200" },
          { name: "CMVBKL32622645240500" },
          { name: "CMVBKL37224445240500" },
          { name: "CMVBKL35035045240600" },
          { name: "CMVBKL45045045240500" },
        ],
      },
      {
        name: "MS Body",
        submenu: [
          { name: "CMVBKL12612640240200" },
          { name: "CMVBKL15015045240200" },
          { name: "CMVBKL22014040240200" },
          { name: "CMVBKL32622645240500" },
          { name: "CMVBKL37224445240500" },
          { name: "CMVBKL35035045240600" },
          { name: "CMVBKL45045045240500" },
          { name: "CMVBKL70060050241000" },
        ],
      },
    ],
  },
  "spot-light": {
    title: "SPOT LIGHT",
    image: Spot_Light,
    image2: Spot_Light_info,
    description: {
      intro: "Spot Lights produce focused, intense beams of light to highlight specific areas on an object for precision inspection."
    },
    specifications: [
      ["Model", "CMVSPTL8660ADF240100", "CMVSPTL6452ADF240100"],
      ["Electrical Input", "24 V", "24 V"],
      ["Input Current", "300 mA", "350 mA"],
      ["Lumens", "1800", "1500"],
      ["Colour", "Red", "White"],
      ["Colour Temp", "N/A", "6500K"],
      ["Operating Temp", "0°C - 50°C", "0°C - 50°C"],
      ["Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
      ["IP Rating", "IP 65", "IP 65"],
      ["Weight", "0.192 KG", "0.274 KG"],
    ],
    modelTree: [{ name: "CMVSPTL8660ADF240100" }, { name: "CMVSPTL6452ADF240100" }],
  },
  "tunnel-light": {
    title: "TUNNEL LIGHT",
    image: Tunnel_Light,
    image2: Tunnel_Light_info,
    description: {
      intro: "Tunnel Lights provide bright, uniform lighting inside conveyor tunnels for capturing defect-free product images in production lines."
    },
    specifications: [
      ["Model", "CMVITL280320240400", "CMVITL262256240400", "CMVITL152156240200"],
      ["Electrical Input", "24 V", "24 V", "24 V"],
      ["Input Current", "300 mA", "350 mA", "400 mA"],
      ["Lumens", "1800", "1500", "2000"],
      ["Colour", "Red", "White", "Cool White"],
      ["Colour Temp", "N/A", "6500K", "5000K"],
      ["Operating Temp", "0°C - 50°C", "0°C - 50°C", "0°C - 50°C"],
      ["Connector", "M12 - 2P Connector", "M12 - 2P Connector", "M12 - 2P Connector"],
      ["IP Rating", "IP 65", "IP 65", "IP 65"],
      ["Weight", "0.192 KG", "0.274 KG", "0.350 KG"],
    ],
    modelTree: [
      { name: "CMVITL280320240400" },
      { name: "CMVITL262256240400" },
      { name: "CMVITL152156240200" },
    ],
  },
};

// Dimension images map
const dimensionImages = {
  "bar-light": bar_light_dimension,
  "ring-light": ring_light_dimension,
  "dome-light": dome_light_dimension,
  "flat-diffused-light-with-center-hole": flat_diffused_light_with_center_hole_dimension,
  "flat-diffused-light": flat_diffused_light_dimension,
  "indirect-flat-light": indirect_flat_light_dimension,
  "back-light": back_light_dimension,
  "spot-light": spot_light_dimension,
  "tunnel-light": tunnel_light_dimension,
};

const ProductDetail2 = () => {
  const { productName } = useParams();
  const navigate = useNavigate();

  const slug = productName
    ? productName.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")
    : "";
  const product = productsData[slug];
  const galleryImages = galleryImagesMap[slug] || [g1, g2, g3];

  const [activeSection, setActiveSection] = useState("product");
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [loadGallery, setLoadGallery] = useState(false);
  const zoomContainerRef = useRef(null);
  const productSectionRef = useRef(null);
  const techInfoSectionRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const rootRef = useRef(null);
  const marqueeRef = useRef(null);


  
useEffect(() => {
  const handleScroll = () => {
    const gotop = document.getElementById("gotop");
    if (!gotop) return;

    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const middlePoint = documentHeight / 2;

    if (scrollTop + windowHeight / 2 >= middlePoint) {
      gotop.style.opacity = "1";
      gotop.style.transform = "translateY(0)";
      gotop.style.visibility = "visible";
      gotop.style.transition = "opacity 0.4s ease-in-out, transform 0.4s ease-in-out";
    } else {
      gotop.style.opacity = "0";
      gotop.style.transform = "translateY(20px)";
      gotop.style.transition = "opacity 0.4s ease-in-out, transform 0.4s ease-in-out";
      setTimeout(() => {
        if (gotop.style.opacity === "0") gotop.style.visibility = "hidden";
      }, 400);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  useEffect(() => {
    setActiveSection("product");
    setSelectedImage(null);
  }, [slug]);

  useEffect(() => {
    const node = rootRef.current || document;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      const els = node.querySelectorAll(".reveal-on-scroll");
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );

    const els = node.querySelectorAll(".reveal-on-scroll");
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.location.hash === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [slug]);
// Preload images
useEffect(() => {
  const preloadImages = async () => {
    const imagePromises = galleryImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
      });
    });

    try {
      await Promise.all(imagePromises);
      setLoadGallery(true); // Set to true only after all images are loaded
    } catch (error) {
      console.error("Image preloading failed:", error);
      setLoadGallery(true); // Fallback to show gallery even if some images fail
    }
  };

  preloadImages();
}, [galleryImages]);

// Observe gallery section
useEffect(() => {
  const galleryObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && loadGallery) {
        // Only trigger animation if images are preloaded
        galleryObserver.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  if (gallerySectionRef.current) {
    galleryObserver.observe(gallerySectionRef.current);
  }

  return () => galleryObserver.disconnect();
}, [loadGallery]);
 useEffect(() => {
  const galleryObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && loadGallery) {
        // Only trigger animation if images are preloaded
        galleryObserver.disconnect();
      }
    },
    { threshold: 0.1 }
  );

  if (gallerySectionRef.current) {
    galleryObserver.observe(gallerySectionRef.current);
  }

  return () => galleryObserver.disconnect();
}, [loadGallery]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  useEffect(() => {
    const marqueeContent = marqueeRef.current;
    if (marqueeContent) {
      const root = document.documentElement;
      const marqueeElementsDisplayed = parseInt(getComputedStyle(root).getPropertyValue("--marquee-elements-displayed"));
      const children = Array.from(marqueeContent.children);
      const totalElements = children.length;
      root.style.setProperty("--marquee-elements", totalElements);

      while (marqueeContent.children.length > totalElements) {
        marqueeContent.removeChild(marqueeContent.lastChild);
      }

      for (let i = 0; i < marqueeElementsDisplayed; i++) {
        const clone = children[i % totalElements].cloneNode(true);
        marqueeContent.appendChild(clone);
      }

      const images = marqueeContent.querySelectorAll("img");
      images.forEach((img, index) => {
        img.onclick = () => handleImageClick(galleryImages[index % galleryImages.length]);
      });
    }
  }, [loadGallery]);

  if (!product) {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          padding: "2rem",
          color: "#EF3A3A",
          textAlign: "center",
          background: "linear-gradient(180deg,#f8fafb,#ffffff)",
          boxSizing: "border-box",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          border: "1px solid black",
        }}
      >
        <Navbar />
        <h2>Product not found</h2>
        <button
          onClick={() => navigate("/dashboardTwo")}
          aria-label="Go back to products"
          className="premium-btn action-btn"
          style={{ marginTop: "2rem" }}
        >
          Go Back to Products
        </button>
      </div>
    );
  }

  const handleNavClick = (section) => {
    setActiveSection(section);
    let targetRef = null;
    switch (section) {
      case "product":
        targetRef = productSectionRef;
        break;
      case "technical":
        targetRef = techInfoSectionRef;
        break;
      case "gallery":
        targetRef = gallerySectionRef;
        break;
      default:
        targetRef = productSectionRef;
    }
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsDragging(false);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
  };

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartPos({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
      e.preventDefault();
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoomLevel > 1) {
      const newX = e.clientX - startPos.x;
      const newY = e.clientY - startPos.y;

      const container = zoomContainerRef.current;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const imgWidth = containerRect.width * zoomLevel;
        const imgHeight = containerRect.height * zoomLevel;
        const maxX = (imgWidth - containerRect.width) / 2;
        const maxY = (imgHeight - containerRect.height) / 2;

        setPosition({
          x: Math.max(-maxX, Math.min(maxX, newX)),
          y: Math.max(-maxY, Math.min(maxY, newY)),
        });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (zoomLevel > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setStartPos({
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      });
      e.preventDefault();
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && zoomLevel > 1 && e.touches.length === 1) {
      const newX = e.touches[0].clientX - startPos.x;
      const newY = e.touches[0].clientY - startPos.y;

      const container = zoomContainerRef.current;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const imgWidth = containerRect.width * zoomLevel;
        const imgHeight = containerRect.height * zoomLevel;
        const maxX = (imgWidth - containerRect.width) / 2;
        const maxY = (imgHeight - containerRect.height) / 2;

        setPosition({
          x: Math.max(-maxX, Math.min(maxX, newX)),
          y: Math.max(-maxY, Math.min(maxY, newY)),
        });
      }
      e.preventDefault();
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const makeDummySpec = (index) => {
    const colors = ["Red", "White", "Cool White", "Green"];
    return {
      dimensions: {
        A: 76 + (index % 5 * 50),
        B: 70 + (index % 4 * 20),
        C: 22 + (index % 3),
        D: 32 + (index % 6 * 5),
        E: 33 + (index % 7),
        F: (index % 2 ? 80 : 160),
      },
      inputVolt: "24V",
      power: `${(0.15 + (index % 5 * 0.05)).toFixed(2)}A`,
      lumens: 1500 + (index % 5 * 300),
      color: colors[index % 4],
    };
  };


const getNestedSpecs = (product, slug) => {
  const nested = {};
  let globalIdx = 0;
  const seenKeys = new Set();

  const traverse = (nodes, currentType = null, currentSubtype = "") => {
    nodes.forEach((node) => {
      if (Array.isArray(node.submenu) && node.submenu.length > 0) {
        if (!currentType) {
          traverse(node.submenu, node.name, "");
        } else {
          traverse(node.submenu, currentType, node.name);
        }
      } else {
        let useType = currentType || "Standard";
        if (!nested[useType]) nested[useType] = {};
        let useSubtype = currentSubtype || "";
        if (!nested[useType][useSubtype]) nested[useType][useSubtype] = [];
        const modelData = node.dimensions
          ? { model: node.name, ...node }
          : { model: node.name, ...makeDummySpec(globalIdx++) };
        
        // Generate a unique key using model name and dimensions
        const dimensionString = node.dimensions
          ? Object.values(node.dimensions).join("-")
          : globalIdx;
        const key = `${useType}-${useSubtype}-${modelData.model}-${dimensionString}`;
        if (seenKeys.has(key)) {
          console.warn(`Duplicate key detected: ${key}. Using unique identifier.`);
          modelData.uniqueKey = `${key}-${globalIdx++}`;
        } else {
          seenKeys.add(key);
          modelData.uniqueKey = key;
        }
        nested[useType][useSubtype].push(modelData);
      }
    });
  };

  traverse(product.modelTree);
  return nested;
};



const renderModelStructureTable = () => {
  const nestedSpecs = getNestedSpecs(product, slug);
  if (Object.keys(nestedSpecs).length === 0) {
    return (
      <div style={{ padding: "1rem", color: "#666" }}>
        No models available for this product.
      </div>
    );
  }

  const hasSubtypes = Object.values(nestedSpecs).some((subtypes) =>
    Object.keys(subtypes).some((subtype) => subtype !== "")
  );

  const dimensionMap = {
    "ring-light": ["A", "B", "C", "D"],
    "bar-light": ["A", "B", "C", "D", "E", "F"],
    "dome-light": ["A", "B", "C", "D", "E"],
    "flat-diffused-light-with-center-hole": ["A", "B", "C", "D"],
    "flat-diffused-light": ["A", "B", "C", "D"],
    "indirect-flat-light": ["A", "B", "C", "D"],
    "back-light": ["A", "B", "C", "D"],
    "spot-light": ["A", "B", "C"],
    "tunnel-light": ["A", "B", "C", "D"],
  };

  const dimensionColumns = dimensionMap[slug] || ["A", "B", "C", "D", "E", "F"];

  const tableWrapStyle = {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto 1.5rem",
    boxShadow: "0 8px 24px rgba(4, 12, 30, 0.08)",
    background: "linear-gradient(180deg, #ffffff, #f9fafb)",
    padding: "0.5rem",
    border: "1px solid rgba(15, 23, 42, 0.05)",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    fontSize: "0.95rem",
    fontFamily: "'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    tableLayout: "fixed",
    backgroundColor: "#d9d2e9",
  };

  const thBaseStyle = {
    padding: "12px 10px",
    background: "#d3d3d3",
    color: "#000000",
    borderBottom: "3px solid #c9c9c9",
    borderRight: "3px solid rgba(255, 255, 255, 0.05)",
    verticalAlign: "middle",
    textAlign: "left",
    fontWeight: 600,
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    boxSizing: "border-box",
    whiteSpace: "normal",
    wordBreak: "break-word",
    lineHeight: 1,
  };

  const tdBaseStyle = {
    padding: "8px 10px",
    borderBottom: "3px solid rgba(15, 23, 42, 0.05)",
    borderRight: "3px solid rgba(15, 23, 42, 0.05)",
    verticalAlign: "middle",
    textAlign: "left",
    overflow: "hidden",
    whiteSpace: "normal",
    fontSize: "0.85rem",
    wordBreak: "break-word",
    boxSizing: "border-box",
    lineHeight: 1,
    color: "#1a2a44",
    fontWeight: 400,
    background: "#ffffff",
    transition: "background 200ms ease",
  };

  const getCellStyle = (base, colIndex) => {
    const style = { ...base };
    style.borderRight = "3px solid rgba(15, 23, 42, 0.05)";

    if (colIndex === 0) {
      style.width = hasSubtypes ? "15%" : "20%";
      style.paddingLeft = 20;
      style.fontWeight = 500;
      style.textAlign = "center";
    } else if (hasSubtypes && colIndex === 1) {
      style.width = "15%";
      style.paddingLeft = 20;
      style.fontWeight = 500;
      style.textAlign = "center";
    } else if (colIndex === (hasSubtypes ? 2 : 1)) {
      style.width = hasSubtypes ? "15%" : "20%";
      style.paddingLeft = 20;
      style.fontWeight = 500;
      style.textAlign = "center";
    } else if (colIndex < (hasSubtypes ? 3 + dimensionColumns.length : 2 + dimensionColumns.length)) {
      style.width = hasSubtypes ? "7%" : "8%";
      style.textAlign = "center";
    } else if (colIndex === (hasSubtypes ? 6 + dimensionColumns.length : 5 + dimensionColumns.length)) {
      style.width = "12%";
      style.textAlign = "center";
    } else {
      style.width = hasSubtypes ? "7%" : "8%";
      style.textAlign = "center";
    }

    return style;
  };

  return (
    <div style={tableWrapStyle} className="reveal-on-scroll">
      <table style={tableStyle} aria-label={`${product.title} structured models and specs`}>
        <colgroup>
          {[
            { width: hasSubtypes ? "15%" : "20%" },
            ...(hasSubtypes ? [{ width: "15%" }] : []),
            { width: hasSubtypes ? "15%" : "20%" },
            ...dimensionColumns.map(() => ({ width: hasSubtypes ? "7%" : "8%" })),
            { width: hasSubtypes ? "7%" : "8%" },
            { width: hasSubtypes ? "7%" : "8%" },
            { width: "12%" },
            { width: hasSubtypes ? "7%" : "8%" },
          ].map((col, idx) => (
            <col key={idx} style={{ width: col.width }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            <th rowSpan="2" style={getCellStyle(thBaseStyle, 0)}>
              {product.title}
            </th>
            {hasSubtypes && (
              <th rowSpan="2" style={getCellStyle(thBaseStyle, 1)}>
                Subtype
              </th>
            )}
            <th rowSpan="2" style={getCellStyle(thBaseStyle, hasSubtypes ? 2 : 1)}>
              Model
            </th>
            <th
              colSpan={dimensionColumns.length}
              style={getCellStyle(
                { ...thBaseStyle, textAlign: "center" },
                hasSubtypes ? 3 : 2
              )}
            >
              Dimensions
            </th>
            <th rowSpan="2" style={getCellStyle(thBaseStyle, hasSubtypes ? 3 + dimensionColumns.length : 2 + dimensionColumns.length)}>
              Input Volt
            </th>
            <th rowSpan="2" style={getCellStyle(thBaseStyle, hasSubtypes ? 4 + dimensionColumns.length : 3 + dimensionColumns.length)}>
              Power (Amp)
            </th>
            <th rowSpan="2" style={getCellStyle(thBaseStyle, hasSubtypes ? 5 + dimensionColumns.length : 4 + dimensionColumns.length)}>
              Lumens
            </th>
            <th rowSpan="2" style={getCellStyle(thBaseStyle, hasSubtypes ? 6 + dimensionColumns.length : 5 + dimensionColumns.length)}>
              Color
            </th>
            <th rowSpan="2" style={getCellStyle(thBaseStyle, hasSubtypes ? 7 + dimensionColumns.length : 6 + dimensionColumns.length)}>
              Buy Now
            </th>
          </tr>
          <tr>
            {dimensionColumns.map((dim, idx) => (
              <th
                key={dim}
                style={getCellStyle(thBaseStyle, (hasSubtypes ? 3 : 2) + idx)}
              >
                {dim}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(nestedSpecs).map(([type, subtypes]) => {
            let typeSpan = 0;
            Object.values(subtypes).forEach((models) => (typeSpan += models.length));
            return Object.entries(subtypes).map(([subtype, models], subIdx) => {
              const subSpan = models.length;
              return models.map((model, idx) => (
                <tr key={model.uniqueKey}>
                  {subIdx === 0 && idx === 0 && (
                    <td
                      rowSpan={typeSpan}
                      style={getCellStyle(tdBaseStyle, 0)}
                      title={type.replace(` ${product.title.toUpperCase()}`, "") || (type === "Standard" ? "-" : type)}
                    >
                      {type.replace(` ${product.title.toUpperCase()}`, "") || (type === "Standard" ? "-" : type)}
                    </td>
                  )}
                  {hasSubtypes && idx === 0 && (
                    <td
                      rowSpan={subSpan}
                      style={getCellStyle(tdBaseStyle, 1)}
                      title={subtype || "-"}
                    >
                      {subtype || "-"}
                    </td>
                  )}
                  <td
                    style={getCellStyle(tdBaseStyle, hasSubtypes ? 2 : 1)}
                    title={model.model}
                  >
                    {model.model}
                  </td>
                  {dimensionColumns.map((dim, dimIdx) => (
                    <td
                      key={dim}
                      style={getCellStyle(
                        tdBaseStyle,
                        (hasSubtypes ? 3 : 2) + dimIdx
                      )}
                      title={model.dimensions[dim] || "-"}
                    >
                      {model.dimensions[dim] || "-"}
                    </td>
                  ))}
                  <td
                    style={getCellStyle(
                      tdBaseStyle,
                      hasSubtypes ? 3 + dimensionColumns.length : 2 + dimensionColumns.length
                    )}
                    title={model.inputVolt}
                  >
                    {model.inputVolt}
                  </td>
                  <td
                    style={getCellStyle(
                      tdBaseStyle,
                      hasSubtypes ? 4 + dimensionColumns.length : 3 + dimensionColumns.length
                    )}
                    title={model.power}
                  >
                    {model.power}
                  </td>
                  <td
                    style={getCellStyle(
                      tdBaseStyle,
                      hasSubtypes ? 5 + dimensionColumns.length : 4 + dimensionColumns.length
                    )}
                    title={model.lumens}
                  >
                    {model.lumens}
                  </td>
                  <td
                    style={getCellStyle(
                      tdBaseStyle,
                      hasSubtypes ? 6 + dimensionColumns.length : 5 + dimensionColumns.length
                    )}
                    title="Available Colors"
                  >
                    <div
                      style={{
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <span
                        style={{
                          width: "17px",
                          height: "17px",
                          borderRadius: "50%",
                          backgroundColor: "#ffffff",
                          border: "1px solid #ccc",
                          display: "inline-block",
                        }}
                      ></span>
                      <span
                        style={{
                          width: "17px",
                          height: "17px",
                          borderRadius: "50%",
                          backgroundColor: "#ef3a3a",
                          border: "1px solid #ccc",
                          display: "inline-block",
                        }}
                      ></span>
                      <span
                        style={{
                          width: "17px",
                          height: "17px",
                          borderRadius: "50%",
                          backgroundColor: "#4cb050",
                          border: "1px solid #ccc",
                          display: "inline-block",
                        }}
                      ></span>
                      <span
                        style={{
                          width: "17px",
                          height: "17px",
                          borderRadius: "50%",
                          backgroundColor: "#2196f3",
                          border: "1px solid #ccc",
                          display: "inline-block",
                        }}
                      ></span>
                    </div>
                  </td>
                  <td
                    style={getCellStyle(
                      tdBaseStyle,
                      hasSubtypes ? 7 + dimensionColumns.length : 6 + dimensionColumns.length
                    )}
                  >
                    <button
                      key={`buy-${idx}`}
                      style={{
                        color: "white",
                        border: "none",
                        padding: "5px 7px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontSize: "1.8rem",
                      }}
                      onClick={() => navigate(`/buy/${model.model}`, { state: { productName: slug } })}
                    >
                      🛒
                    </button>
                  </td>
                </tr>
              ));
            });
          })}
        </tbody>
      </table>
    </div>
  );
};

 const renderCommonSpec = () => {
  const commonSpecs = { ...COMMON_SPECIFICATIONS, Geometry: product.title };
  const entries = Object.entries(commonSpecs);

  const pairedRows = [];
  for (let i = 0; i < entries.length; i += 2) {
    const left = entries[i];
    const right = entries[i + 1] || null;
    pairedRows.push({ left, right });
  }

  const containerStyle = {
    minHeight: "280px",
    marginTop: "1.6rem",
    maxWidth: "670px",
    padding: "0",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#334155",
    userSelect: "none",
    boxSizing: "border-box",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    display: "flex",
    flexDirection: "column",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.92rem",
    tableLayout: "fixed",
    border: "1px solid #d1d5db",
  };

  const headerStyle = {
    padding: "8px 10px",
    fontWeight: 700,
    fontSize: "1.3rem",
    color: "#1e293b",
    textAlign: "center",
    verticalAlign: "middle",
    boxSizing: "border-box",
    textTransform: "uppercase",
    letterSpacing: "0.7px",
    lineHeight: 1.4,
    userSelect: "none",
    borderBottom: "2px solid #cbd5e1",
    backgroundColor: "#d3d3d3",
  };

  const labelCellStyle = {
    padding: "11px 11px",
    fontWeight: 600,
    color: "#475569",
    borderBottom: "1px solid #d1d5db",
    width: "25%",
    whiteSpace: "normal",
    wordBreak: "break-word",
    verticalAlign: "middle",
    textAlign: "left",
    lineHeight: 1.4,
    userSelect: "text",
  };

  const valueCellStyle = {
    padding: "8px 12px",
    color: "#a0a0a0",
    fontWeight: 500,
    borderBottom: "1px solid #d1d5db",
    width: "25%",
    verticalAlign: "middle",
    textAlign: "left",
    lineHeight: 1.6,
    userSelect: "text",
    borderRight: "1px solid #d1d5db",
  };

  const emptyCellStyle = {
    padding: "12px 16px",
    borderBottom: "1px solid #d1d5db",
    width: "25%",
    verticalAlign: "middle",
    lineHeight: 1.6,
    userSelect: "none",
  };

  return (
    <div style={containerStyle} className="reveal-on-scroll" role="region" aria-labelledby="common-spec-title">
      <div id="common-spec-title" style={headerStyle} aria-hidden="true">
        Common Specifications
      </div>
      <table style={tableStyle} aria-label="Common Specifications Table" role="table">
        <tbody>
          {pairedRows.map((pair, idx) => {
            const [lKey, lVal] = pair.left;
            const rightExists = !!pair.right;
            const [rKey, rVal] = pair.right || ["", ""];
            return (
              <tr key={`cs-row-${idx}`} className="table-row" role="row">
                <td style={labelCellStyle} aria-label={lKey} role="rowheader">
                  {lKey}:
                </td>
                <td style={valueCellStyle} aria-label={`${lKey} value`} role="cell">
                  {lVal}
                </td>
                {rightExists ? (
                  <>
                    <td style={labelCellStyle} aria-label={rKey} role="rowheader">
                      {rKey}:
                    </td>
                    <td style={valueCellStyle} aria-label={`${rKey} value`} role="cell">
                      {rVal}
                    </td>
                  </>
                ) : (
                  <>
                    <td style={emptyCellStyle} />
                    <td style={emptyCellStyle} />
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};



  const mainStyle = {
    width: "100%",
    color: "#0f172a",
    minHeight: "100vh",
    padding: "1.3rem 0rem",
    background: "linear-gradient(180deg,#ffffff,#ffffff)",
    boxSizing: "border-box",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.2rem",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const titleStyle = {
    fontSize: "clamp(1.6rem, 3.6vw, 2.6rem)",
    color: "#0f172a",
    margin: 0,
    textAlign: "center",
    fontWeight: 800,
    letterSpacing: "0.6px",
    lineHeight: 1,
    textTransform: "uppercase",
    background: "linear-gradient(90deg,#0f172a,#1f3a8a)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    colorRendering: "optimizeLegibility",
  };

  const headerRowStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1200px",
    gap: "22rem",
    padding: "0rem",
    boxSizing: "border-box",
    background: "transparent",
  };

  const headerImageStyle = {
    width: "70%",
    maxWidth: 265,
    minWidth: 60,
    maxHeight: 265,
    height: "auto",
    objectFit: "contain",
    borderRadius: 12,
    transition: "transform 400ms ease, box-shadow 400ms ease",
  };

  const leftHeaderImageStyle = {
    width: "100%",
    maxWidth: 450,
    minWidth: 100,
    maxHeight: 450,
    height: "auto",
    objectFit: "contain",
    borderRadius: 12,
    transition: "transform 400ms ease, box-shadow 400ms ease",
  };

  const descriptionContainerStyle = {
    minHeight: "400px",
    padding: "1rem",
    boxSizing: "border-box",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  };

  const descriptionCommonSpecContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 1300,
    gap: "2rem",
    alignItems: "flex-start",
    flexWrap: "wrap",
  };

  const paragraphStyle = {
    fontSize: "clamp(1rem,2.4vw,1rem)",
    lineHeight: 1.7,
    margin: 0,
    textAlign: "justify",
    color: "#666666",
    fontWeight: 500,
    width: "100%",
  };

  const navStyle = {
    width: "100%",
    maxWidth: "2000px",
    height: "60px",
    background: "#ffffff",
    borderBottom: "3.5px solid transparent",
    borderImage: "linear-gradient(to right, transparent 0%, #ef3a3a 0%, #ef3a3a 70%, transparent 100%) 1",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: "60px",
    zIndex: 998,
    boxShadow: "none",
  };

  const navButtonWrapperStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "auto",
    marginLeft: "10rem",
    marginTop: "1.6rem",
    zIndex: 998,
    position: "sticky",
  };

  const sectionTitleStyle = {
    fontSize: "clamp(1.15rem, 2.6vw, 1.5rem)",
    marginTop: "2rem",
    marginBottom: "2rem",
    color: "#06102b",
    textAlign: "center",
    fontWeight: 700,
    textDecoration: "none",
    backgroundImage: "linear-gradient(to left, #ef3a3a 100%, transparent 70%)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "12% 2.5px",
  };

  const sectionTitleStyle2 = {
    fontSize: "clamp(1.15rem, 2.6vw, 1.5rem)",
    marginBottom: "3rem",
    color: "#06102b",
    textAlign: "center",
    fontWeight: 700,
    textDecoration: "none",
    backgroundImage: "linear-gradient(to left, #ef3a3a 100%, transparent 70%)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "26% 2.5px",
  };

  const sectionTitleStyle3 = {
    fontSize: "clamp(1.15rem, 2.6vw, 1.5rem)",
    color: "#06102b",
    textAlign: "center",
    fontWeight: 700,
    textDecoration: "none",
    backgroundImage: "linear-gradient(to left, #ef3a3a 100%, transparent 70%)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    backgroundSize: "11% 2.5px",
  };

  const enquireContainerStyle = {
    width: "100%",
    maxWidth: "1300px",
    borderRadius: 12,
    boxShadow: "0 8px 24px rgba(4, 12, 30, 0.08)",
    background: "linear-gradient(180deg, #ffffff, #f9fafb)",
    padding: "0.9rem",
    border: "1px solid rgba(15, 23, 42, 0.05)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    fontSize: "1.3rem",
    color: "#334155",
    fontWeight: 500,
  };

  const enquireTextStyle = {
    margin: 0,
    textAlign: "center",
    marginLeft: "10rem",
    flexGrow: 1,
  };

  const techGalleryContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "6rem",
    flexWrap: "wrap",
    marginBottom: "2rem",
    padding: "0 1rem",
    alignItems: "stretch",
  };

  const hrStyle = {
    border: "none",
    borderTop: "1px solid rgba(15,23,42,0.06)",
    margin: "2rem auto",
    width: "90%",
    opacity: 0.9,
  };

  const modalStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
  };

  const modalContentStyle = {
    position: "relative",
    width: "100%",
    maxWidth: "95vw",
    height: "100%",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
    gap: "1rem",
  };

  const zoomContainerStyle = {
    width: "740px",
    maxWidth: "80vw",
    height: "600px",
    maxHeight: "80vh",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 12px 30px rgba(2,6,23,0.3)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    cursor: zoomLevel > 1 ? "move" : "default",
  };

  const zoomImageStyle = (zoom, posX, posY) => ({
    width: "100%",
    height: "100%",
    minWidth: `${100 * zoom}%`,
    minHeight: `${100 * zoom}%`,
    objectFit: "cover",
    objectPosition: "center",
    transform: zoom > 1 ? `translate(${posX}px, ${posY}px)` : "none",
    transition: isDragging ? "none" : "transform 0.2s ease-in-out",
  });

  const controlButtonStyle = {
    background: "linear-gradient(45deg, #6b7280, #9ca3af)",
    color: "#ffffff",
    border: "none",
    fontSize: "1.5rem",
    fontWeight: 600,
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "transform 0.2s, background 0.2s, box-shadow 0.2s",
    zIndex: 2100,
  };

  const closeButtonStyle = {
    background: "#ef4444",
    color: "#ffffff",
    border: "none",
    fontSize: "1.5rem",
    fontWeight: 700,
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "transform 0.2s, opacity 0.2s",
    zIndex: 2100,
  };

  const buttonContainerStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
  };

  const dimensionImage = dimensionImages[slug];

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css?family=Montserrat');

          :root {
            --accent: #ef3a3a;
            --deep: #06102b;
            --muted: rgba(2,6,23,0.06);
            --glow: rgba(239,58,58,0.24);
            --marquee-width: 90vw;
            --marquee-height: 500px;
            --marquee-elements-displayed: 4;
            --marquee-element-width: calc(var(--marquee-width) / var(--marquee-elements-displayed));
            --marquee-gap: 2rem;
            --marquee-animation-duration: calc(var(--marquee-elements) * 4s);
          }

          @media (prefers-reduced-motion: reduce) {
            .premium-btn, .action-btn, .reveal-on-scroll, .table-row, .marquee-content, .control-btn, .close-btn, .enquire-btn { 
              transition: none !important; 
              animation: none !important; 
            }
          }

          .premium-btn {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 10px 18px;
            font-weight: 700;
            border-radius: 10px;
            border: none;
            color: white;
            cursor: pointer;
            background: linear-gradient(90deg, rgba(20,64,160,0.95), rgba(12,34,86,0.98));
            box-shadow: 0 6px 20px rgba(3,7,18,0.14), 0 0 20px rgba(12,34,86,0.06);
            overflow: visible;
            transform: translateZ(0);
            transition: transform 260ms cubic-bezier(.2,.9,.3,1), box-shadow 260ms, color 200ms;
          }

          .premium-btn::before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: -6px;
            bottom: -6px;
            borderRadius: 12px;
            background: radial-gradient(120px 40px at 10% 0%, rgba(255,255,255,0.02), transparent),
                        radial-gradient(120px 40px at 90% 100%, rgba(255,255,255,0.02), transparent);
            filter: blur(10px);
            opacity: 0.9;
            pointer-events: none;
            transition: opacity 300ms;
          }

          .premium-btn::after {
            content: "";
            position: absolute;
            inset: 0;
            borderRadius: 10px;
            box-shadow: 0 8px 28px rgba(14,45,120,0.12), 0 0 36px rgba(14,45,120,0.06);
            mix-blend-mode: screen;
            opacity: 0.65;
            transition: opacity 260ms, transform 260ms;
          }

          .premium-btn:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 14px 40px rgba(2,6,23,0.12), 0 0 40px rgba(14,45,120,0.08);
          }

          .premium-btn:active {
            transform: translateY(-1px) scale(0.995);
          }

          .action-btn {
            background: linear-gradient(90deg, var(--accent), #b02a2a);
            box-shadow: 0 8px 40px rgba(239,58,58,0.18), 0 0 24px rgba(239,58,58,0.09);
          }

          .action-btn::after {
            box-shadow: 0 12px 60px rgba(239,58,58,0.12), 0 0 40px rgba(239,58,58,0.08);
          }

          .enquire-btn {
            background: #ef3a3a;
            color: #ffffff;
            font-weight: 700;
            font-size: 0.9rem;
            padding: 8px 20px;
            border-radius: 8px;
            border: none;
            margin-right:1.5rem;
            text-transform: uppercase;
            letterSpacing: 0.5px;
            cursor: pointer;         
            transition: transform 200ms ease, box-shadow 200ms ease, background 200ms ease;
            zIndex: 999;
          }

          .enquire-btn:hover {
            transform: translateY(-2px) scale(1.03);
          }

          .enquire-btn:active {
            transform: translateY(0) scale(0.98);
            box-shadow: 0 4px 15px rgba(239,58,58,0.25), 0 0 15px rgba(239,58,58,0.1);
          }

          @keyframes pulseGlow {
            0% { box-shadow: 0 6px 16px rgba(239,58,58,0.12), 0 0 0 rgba(239,58,58,0.06); }
            50% { box-shadow: 0 10px 30px rgba(239,58,58,0.16), 0 0 30px rgba(239,58,58,0.12); }
            100% { box-shadow: 0 6px 16px rgba(239,58,58,0.12), 0 0 0 rgba(239,58,58,0.06); }
          }

          @keyframes scrolling {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-1 * (var(--marquee-element-width) + var(--marquee-gap)) * var(--marquee-elements))); }
          }

          .action-btn.pulse {
            animation: pulseGlow 3.6s ease-in-out infinite;
          }

          .nav-tab {
            flex: 1 1 0;
            background: #e3e3e3;
            border: 2px solid #d3d3d3;
            padding: 1px 3px;
            font-weight: 700;
            font-size: 0.65rem;
            color: #444444;
            transition: color 220ms ease, background 260ms ease, transform 220ms ease;
            borderBottom: 1px solid #d3d3d3;
            textAlign: center;
            width: 145px;
            height: 30px;
            zIndex: 998;
           
          }

          .nav-tab:hover {
            color: #000000;
            transform: translateY(-2px);
            
            background: #e0e0e0;
          }

          .nav-tab[aria-current="page"] {
            color: #ffffff;
            position: relative;
            background: #ef3a3a;
            border: 1.5px solid #ef3a3a;
            borderBottom: 1px solid #ef3a3a;
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3), inset 0 0 10px rgba(255, 255, 255, 0.1);
            zIndex: 998;
           
            height: 32px;
           transform: translateY(-0px);
          }

          .reveal-on-scroll {
            opacity: 0;
            transform: translateY(18px) scale(0.995);
            transition: opacity 620ms cubic-bezier(.15,.9,.27,1), transform 620ms cubic-bezier(.15,.9,.27,1);
            will-change: opacity, transform;
          }

          .reveal-on-scroll.in-view {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          .table-row:hover td {
            background: #efefef;
          }

          .header-stack {
            gap: 2.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .header-image {
            width: 45%;
            max-width: 520px;
            min-width: 160px;
            height: auto;
            object-fit: contain;
            border-radius: 12px;
          }

          .header-image.left {
            max-height: 450px !important;
          }

          .header-image.right {
            max-height: 320px;
          }

          .description-common-spec-container {
            display: flex;
            justify-content: space-between;
            width: 100%;
            max-width: 1300px;
            gap: 2rem;
            align-items: flex-start;
            flex-wrap: wrap;
          }

          .gallery-section {
            padding: 0rem 0;
            overflow: hidden;
            width: 100%;
            max-width: 1200px;
          }

          .marquee {
            width: var(--marquee-width);
            height: var(--marquee-height);
            background-color: transparent;
            overflow: hidden;
            position: relative;
            margin: 0 auto;
          }

          .marquee:before, .marquee:after {
            position: absolute;
            top: 0;
            width: 15rem;
            height: 100%;
            content: "";
            z-index: 20;
          }

          .marquee:before {
            left: 0;
          }

          .marquee:after {
            right: 0;
          }

          .marquee-content {
            list-style: none;
            height: 100%;
            display: flex;
            animation: scrolling var(--marquee-animation-duration) linear infinite;
            padding: 0;
            margin: 0;
          }

          .marquee-content:hover {
            animation-play-state: paused;
          }

          .marquee-content li {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            width: var(--marquee-element-width);
            max-height: 100%;
            margin-right: var(--marquee-gap);
            white-space: nowrap;
          }

          .marquee-content li img {
            width: 470px;
            height: 310px;
            border-radius: 12px;
            box-shadow: 0 12px 30px rgba(2,6,23,0.06);
            object-fit: cover;
            object-position: center;
            cursor: pointer;
            transition: transform 0.3s ease;
          }

          .marquee-content li:hover img {
            transform: scale(1.08);
          }

          .control-btn:hover {
            background: linear-gradient(45deg, #9ca3af, #d1d5db);
            transform: scale(1.05);
            box-shadow: 0 6px 16px rgba(0,0,0,0.3);
          }

          .control-btn:active {
            transform: scale(0.95);
          }

          .close-btn:hover {
            opacity: 0.9;
            transform: scale(1.1);
          }

          .close-btn:active {
            transform: scale(0.95);
          }
 .huake-side-bar {
        position: fixed;
        right: 10px;
        top: 25%;
        display: flex;
        flex-direction: column;
        gap: 4px;
        z-index: 1000;
        padding: 0px 0;
      }
      .huake-side-bar a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #ef3a3a;
        border: 1px solid #ef3a3a;
         border-radius:6px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        text-decoration: none;
        color: #ffffff;
        font-size: 0.7rem;
        font-weight: 600;
        transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
        width: 70px;
        height: 70px;
      }
      .huake-side-bar a:hover {
        transform: translateY(-2px);
        border: 1px solid #ffffff;
        background: #C62828;
        color: #ffffff;
        box-shadow: 0 4px 12px rgba(239, 58, 58, 0.2);
      }
      .huake-side-bar a img {
        width: 30px;
        height: 30px;
        filter: brightness(0) invert(1);
        transition: filter 0.2s ease;
      }
      .huake-side-bar a:hover img {
        filter: brightness(0);
      }
      .huake-side-bar a#gotop {
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out, visibility 0.4s ease-in-out;
      }
      @media (max-width: 760px) {
        .huake-side-bar {
          right: 10px;
          top: 15%;
          padding: 8px 0;
          width: 150px;
        }
        .huake-side-bar a {
          padding: 8px;
          font-size: 0.8rem;
          width: 140px;
          height: 140px;
        }
        .huake-side-bar a img {
          width: 36px;
          height: 36px;
        }
      }
      @media (max-width: 420px) {
        .huake-side-bar {
          right: 10px;
          top: 15%;
          padding: 8px 0;
          width: 150px;
        }
        .huake-side-bar a {
          padding: 8px 12px;
          font-size: 0.8rem;
          width: 140px;
        }
        .huake-side-bar a img {
          width: 18px;
          height: 18px;
        }
      }
    @media (max-width: 760px) {
      :root {
        --marquee-width: 100vw;
        --marquee-height: 320px;
        --marquee-elements-displayed: 3;
        --marquee-gap: 1.5rem;
      }
      .header-stack { flex-direction: column; align-items: center; gap: 1rem; }
      .header-image { width: 86% !important; max-width: 520px; }
      .header-image.left { max-height: 450px !important; }
      .header-image.right { max-height: 320px; }
      .tech-grid { gap: 1rem; }
      .description-common-spec-container { flex-direction: column; align-items: center; }
      .description-common-spec-container > div { width: 100% !important; }
      .gallery-section { padding: 1.5rem 0; }
      .marquee-content li img { width: 360px; height: 300px; }
      .marquee-content li { margin-right: var(--marquee-gap); }
      .marquee:before, .marquee:after { width: 5rem; }
      .enquire-btn { font-size: 0.8rem; padding: 8px 16px; }
    }

    @media (max-width: 420px) {
      :root {
        --marquee-height: 300px;
        --marquee-elements-displayed: 2;
        --marquee-gap: 1rem;
      }
      .premium-btn { font-size: 0.9rem; padding: 10px 12px; border-radius: 8px; }
      .control-btn { padding: 8px 12px; font-size: 1.2rem; }
      .close-btn { width: 32px; height: 32px; font-size: 1.2rem; }
      .marquee-content li img { width: 240px; height: 220px; }
      .marquee-content li { margin-right: var(--marquee-gap); }
      .enquire-btn { font-size: 0.75rem; padding: 6px 12px; }
    }
  `}
</style>

      <Navbar />
      <main ref={rootRef} aria-label={`Details for product ${product.title}`} style={mainStyle}>
        <div style={{ width: "100%", maxWidth: 1300 }}>
          <h1 style={titleStyle} className="reveal-on-scroll">
            {product.title}
          </h1>
        </div>

        <div className="header-stack reveal-on-scroll" style={headerRowStyle}>
          <img
            src={product.image}
            alt={`${product.title} left`}
            className="img-glow header-image left"
            style={leftHeaderImageStyle}
            draggable={false}
            loading="eager"
          />
          {product.image2 ? (
            <img
              src={product.image2}
              alt={`${product.title} right`}
              className="img-glow header-image right"
              style={headerImageStyle}
              draggable={false}
              loading="lazy"
            />
          ) : (
            <div style={{ width: headerImageStyle.width, minWidth: headerImageStyle.minWidth }} />
          )}
        </div>
<div className="description-common-spec-container reveal-on-scroll" style={descriptionCommonSpecContainerStyle}>
    <div style={{ ...descriptionContainerStyle, flex: "1 1 60%", minHeight: "400px", display: "flex", flexDirection: "column" }}>
      <p style={paragraphStyle}>{product.description.intro}</p>
    </div>
    <div style={{ flex: "1 1 35%", minHeight: "400px" }}>
      {renderCommonSpec()}
    </div>
  </div>
        <nav id="navbar" aria-label="Product details navigation" style={navStyle} className="reveal-on-scroll">
          <div style={navButtonWrapperStyle}>
            <button
              onClick={() => handleNavClick("product")}
              aria-current={activeSection === "product" ? "page" : undefined}
              className="nav-tab"
              style={{ marginRight: "10px", borderRadius: "6px 6px 0 0", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            >
              PRODUCTS
            </button>
            <button
              onClick={() => handleNavClick("technical")}
              aria-current={activeSection === "technical" ? "page" : undefined}
              className="nav-tab"
              style={{ marginRight: "10px", borderRadius: "6px 6px 0 0", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            >
              TECHNICAL INFORMATION
            </button>
            <button
              onClick={() => handleNavClick("gallery")}
              aria-current={activeSection === "gallery" ? "page" : undefined}
              className="nav-tab"
              style={{ borderRadius: "6px 6px 0 0", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
            >
              GALLERY
            </button>
          </div>
        </nav>

    <section
    ref={productSectionRef}
    id="product"
    style={{ width: "100%", maxWidth: 1300, scrollMarginTop: "120px" }}
    className="reveal-on-scroll"
  >
    <h2 style={sectionTitleStyle}>PRODUCTS</h2>
    {renderModelStructureTable()}
    <div style={enquireContainerStyle} className="enquire reveal-on-scroll">
      <span style={enquireTextStyle}>Need customized light?</span>
      <button
        onClick={() => navigate("/enquire", { state: { productName: slug } })}
        className="enquire-btn"
        aria-label="Enquire now"
      >
        Enquire Now
      </button>
    </div>
    <div >
      <h3 style={{
        fontSize: "1.3rem",
        color: "#555555",
        textAlign: "center",
        fontWeight: 600,
        marginTop:"4rem",
        marginRight:"0.5rem",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textTransform: "uppercase"
      }}>
       Dimensional Overview
      </h3>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem", marginBottom: "2rem" }} className="reveal-on-scroll">
        <img
        src={dimensionImage}
        alt={`${product.title} dimension`}
        style={{
          maxWidth: "800px",
          width: "100%",
          height: "auto",
          objectFit: "contain",
          marginTop: "1rem",
        }}
        loading="lazy"
        draggable={false}
      />
      </div>
      
    </div>
  </section>
        <hr style={hrStyle} />
<section
  ref={techInfoSectionRef}
  id="technical"
  style={{ width: "100%", maxWidth: 1300, scrollMarginTop: "160px" }}
  aria-label="Technical Information"
  className="reveal-on-scroll"
>
  <h2 style={sectionTitleStyle2}>TECHNICAL INFORMATION</h2>
  <div style={techGalleryContainerStyle}>
    <div style={{
      width: "100%",
      maxWidth: "1400px",
      margin: "0 auto 1.5rem",
      boxShadow: "0 8px 24px rgba(4, 12, 30, 0.08)",
      background: "linear-gradient(180deg, #ffffff, #f9fafb)",
      padding: "0rem",
      border: "1px solid rgba(15, 23, 42, 0.05)",
    }} className="reveal-on-scroll">
      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: 0,
          fontSize: "0.95rem",
          fontFamily: "'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          tableLayout: "fixed",
          backgroundColor: "#d9d2e9",
        }}
        aria-label="Technical Specifications Table"
      >
        <colgroup>
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
          <col style={{ width: "20%" }} />
        </colgroup>
        <thead>
          <tr>
            {/* Removed the Technical Specification heading */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 600,
                background: "#d3d3d3",
                transition: "background 200ms ease",
              }}
            >
              Category
            </td>
            <td
              colSpan="4"
              style={{
                padding: "14px 16px",
                borderTop: "1px solid rgba(15, 23, 42, 0.05)",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              {product.title}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 600,
                background: "#d3d3d3",
                transition: "background 200ms ease",
              }}
            >
              Color
            </td>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              Red
            </td>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              White
            </td>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              Blue
            </td>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              Green
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 600,
                background: "#d3d3d3",
                transition: "background 200ms ease",
              }}
            >
              Lumen's (at 100mm working distance)
            </td>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              -
            </td>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              -
            </td>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              -
            </td>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              -
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 600,
                background: "#d3d3d3",
                transition: "background 200ms ease",
              }}
            >
              Color Temperature
            </td>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              -
            </td>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              6000K-6500K
            </td>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              -
            </td>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              -
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 600,
                background: "#d3d3d3",
                transition: "background 200ms ease",
              }}
            >
              Cable length
            </td>
            <td
              colSpan="4"
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              1m
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 600,
                background: "#d3d3d3",
                transition: "background 200ms ease",
              }}
            >
              Connector Definition
            </td>
            <td
              colSpan="4"
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              Positive (+) - Red &amp; Negative (-) - Black.
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 600,
                background: "#d3d3d3",
                transition: "background 200ms ease",
              }}
            >
              Shell Material
            </td>
            <td
              colSpan="4"
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              Anodized Aluminum
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 600,
                background: "#d3d3d3",
                transition: "background 200ms ease",
              }}
            >
              Cooling
            </td>
            <td
              colSpan="4"
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              Natural air cooling
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 600,
                background: "#d3d3d3",
                transition: "background 200ms ease",
              }}
            >
              Operating Temperature and Humidity
            </td>
            <td
              colSpan="4"
              style={{
                padding: "14px 16px",
                borderBottom: "2px solid rgba(15, 23, 42, 0.05)",
                borderRight: "2px solid rgba(15, 23, 42, 0.05)",
                verticalAlign: "middle",
                textAlign: "left",
                overflow: "hidden",
                whiteSpace: "normal",
                fontSize: "0.85rem",
                wordBreak: "break-word",
                boxSizing: "border-box",
                lineHeight: 1.5,
                color: "#1a2a44",
                fontWeight: 400,
                background: "#ffffff",
                transition: "background 200ms ease",
              }}
            >
              Temperature: 0 to 50ºC, Humidity: 20% to 85%RH (non-condensing)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
        <hr style={hrStyle} />

       <section
  ref={gallerySectionRef}
  id="gallery"
  className="gallery-section reveal-on-scroll"
  style={{ scrollMarginTop: "160px", width: "100%", maxWidth: "1300px" }}
  aria-label="Gallery"
>
  <h2 style={sectionTitleStyle3}>GALLERY</h2>
  {!loadGallery ? (
    <div style={{ height: 'var(--marquee-height)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0' }}>
      Loading Gallery...
    </div>
  ) : (
    <div className="marquee">
      <ul className="marquee-content" ref={marqueeRef}>
        {galleryImages.map((imgSrc, i) => (
          <li key={i}>
            <img
              src={imgSrc}
              alt={`Gallery image ${i + 1}`}
              loading="lazy"
              draggable={false}
              onClick={() => handleImageClick(imgSrc)}
            />
          </li>
        ))}
      </ul>
    </div>
  )}
</section>
        {selectedImage && (
          <div style={modalStyle} onClick={handleCloseModal}>
            <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
              <div
                ref={zoomContainerRef}
                style={zoomContainerStyle}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={selectedImage}
                  alt="Zoomed image"
                  style={zoomImageStyle(zoomLevel, position.x, position.y)}
                  draggable={false}
                />
              </div>
              <div style={buttonContainerStyle}>
                <button
                  style={controlButtonStyle}
                  onClick={handleZoomIn}
                  className="control-btn"
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  style={controlButtonStyle}
                  onClick={handleZoomOut}
                  className="control-btn"
                  aria-label="Zoom out"
                >
                  −
                </button>
                <button
                  style={closeButtonStyle}
                  onClick={handleCloseModal}
                  className="close-btn"
                  aria-label="Close modal"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}

        <div style={{ textAlign: "center", width: "100%", maxWidth: 1200 }} className="reveal-on-scroll">
          <button
            onClick={() => navigate("/dashboardTwo")}
            aria-label="Go back to products"
            className="premium-btn action-btn pulse"
            style={{ marginTop: 6 }}
          >
            Back to Products
          </button>
        </div>



<div id="huake-side-bar" className="huake-side-bar" aria-label="Quick contact options">
            <a
              href="/contact-us"
              onClick={(e) => {
                e.preventDefault();
                navigate("/contact-us");
              }}
              rel="nofollow"
              aria-label="Contact"
              className="text"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <span>Contact</span>
            </a>
            <a
              href="mailto:sales@cvit.in"
              rel="nofollow"
              target="_blank"
              aria-label="Email"
              className="text"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Email</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=7507149084"
              rel="nofollow"
              target="_blank"
              aria-label="WhatsApp"
              className="text"
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11.991 21.781a9.9 9.9 0 0 1-5.034-1.38l-.36-.216-3.741.981.999-3.649-.234-.376a9.84 9.84 0 0 1-1.511-5.258c0-5.439 4.436-9.876 9.887-9.876a9.84 9.84 0 0 1 6.99 2.897 9.84 9.84 0 0 1 2.892 6.99c-.006 5.459-4.442 9.888-9.888 9.888m5.423-7.401c-.296-.149-1.755-.867-2.03-.969-.273-.098-.473-.149-.667.149-.2.296-.77.969-.941 1.163-.171.199-.348.222-.645.075-.296-.15-1.254-.462-2.388-1.478-.885-.787-1.478-1.763-1.655-2.058-.171-.297-.016-.456.132-.604.131-.132.296-.348.444-.519.15-.171.199-.297.297-.495.098-.201.051-.372-.022-.52-.075-.149-.667-1.614-.918-2.205-.24-.583-.484-.502-.667-.51-.171-.01-.37-.01-.57-.01a1.095 1.095 0 0 0-.794.37c-.273.297-1.037 1.016-1.037 2.482s1.065 2.874 1.215 3.074c.147.199 2.091 3.198 5.075 4.488.705.307 1.26.489 1.694.627.713.228 1.356.193 1.869.12.57-.087 1.757-.72 2.007-1.414.246-.696.246-1.29.171-1.414-.073-.126-.273-.199-.57-.348"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <a
              href="#"
              rel="nofollow"
              aria-label="Top"
              id="gotop"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
              <span>Top</span>
            </a>
          </div>

      </main>
    </>
  );
};

export default ProductDetail2;