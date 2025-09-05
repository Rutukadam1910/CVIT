import FMCGIMG from "../assets/fmcg.jpeg";
import wireImg from "../assets/wire.png";
import metalandminingImg from "../assets/Metals-Mining.jpg";
import oilandgasImg from "../assets/oil-and-gas.jpeg";
import aerospaceImg from "../assets/aerospace.jpg";

const automobileVideo = "https://res.cloudinary.com/dpsdxf2bc/video/upload/q_auto/Expo_uxojqx.mp4";

const IndustryData = {
  automobile: {
    id: "automobile",
    title: "Machine Vision Applications for Automobile Industry",
    mediaType: "video",
    mediaSrc: automobileVideo,
    description:
      "The automobile industry focuses on vehicle design, manufacturing, inspection, and automation. Machine vision plays a vital role in quality assurance and safety.",
    applications: [
      "Part Inspection presence/absence",
      "Assembly Verification",
      "Robotic Guidance",
      "Paint Quality Inspection",
      "VIN (Vehicle Identification Number) Reading",
      "Tire Inspection",
      "Welding Inspection",
      "Dimension Measurement",
      "Pre-Dispatch Engine Inspection",
      "OCR (Optical Character Recognition) punch numbers",
      "Human action recognition",
      "Restricted area person detection",
      "Customise vision solution",
    ],
  },
  "metal-mining-cement": {
    id: "metal-mining-cement",
    title: "Machine Vision Applications for Metal, Mining and Cement Industry",
    mediaType: "image",
    mediaSrc: metalandminingImg,
    description:
      "Machine vision in metal, mining and cement industry ensures safe, efficient, and quality-driven processes through real-time inspection, analysis and monitoring.",
    applications: [
      "Surface Defect Detection",
      "Ore size classification",
      "Blast fragmentation analysis",
      "Belt misalignment detection",
      "Rock volume estimation",
      "Kiln and raw material monitoring",
      "Crack and void detection in cement structures",
      "Dust and emissions monitoring",
      "Safety & environment monitoring",
      "Customised vision solution",
    ],
  },
  "pharma-fmcg": {
    id: "pharma-fmcg",
    title: "Machine Vision Applications for Pharma and FMCG Industry",
    mediaType: "image",
    mediaSrc: FMCGIMG,
    description:
      "Pharma and FMCG industries rely on machine vision for fast, consistent quality control in high-speed production lines, ensuring brand integrity and compliance.",
    applications: [
      "Packaging Inspection",
      "Label Verification",
      "Product Counting",
      "Surface Defect Detection",
      "Code Reading and Verification",
      "Fill Level Inspection",
      "Colour Inspection",
      "Shape and Size Inspection",
      "Barcode and QR Code Reading",
      "Seal Integrity Verification",
      "Production Line Monitoring",
      "Customised vision solution",
    ],
  },
  "plastic-rubber": {
    id: "plastic-rubber",
    title: "Machine Vision Applications for Plastic and Rubber Industry",
    mediaType: "image",
    mediaSrc: FMCGIMG, // Placeholder image
    description:
      "In plastic and rubber manufacturing, machine vision improves inspection speed, detects inconsistencies, and supports automation in molding and extrusion lines.",
    applications: [
      "Mold defect detection",
      "Edge and flash inspection",
      "Surface finish validation",
      "Color consistency monitoring",
      "Part geometry verification",
      "Burr and sink mark detection",
      "Shape and size classification",
      "Barcode and label validation",
      "Seal and joint verification",
      "Customised vision solution",
    ],
  },
  "warehouse-distribution": {
    id: "warehouse-distribution",
    title: "Machine Vision Applications for Warehouse and Distribution",
    mediaType: "image",
    mediaSrc: oilandgasImg,
    description:
      "Warehouse and distribution systems use machine vision for automation, inventory accuracy, package inspection, and workflow optimization.",
    applications: [
      "Barcode & QR code scanning",
      "Parcel dimensioning and sorting",
      "Damaged package detection",
      "Label verification",
      "Stacking & unstacking validation",
      "Inventory counting",
      "Dock safety monitoring",
      "Automated vehicle guidance",
      "Conveyor inspection",
      "Customised vision solution",
    ],
  },
  wire: {
    id: "wire",
    title: "Machine Vision Applications for Wire Industry",
    mediaType: "image",
    mediaSrc: wireImg,
    description:
      "The wire industry uses machine vision for real-time monitoring, accurate measurements, and defect detection to maintain high production standards.",
    applications: [
      "Quality inspection",
      "Surface defect detection",
      "Wire alignment and positioning",
      "Dimension Inspection",
      "Wire counting/sorting",
      "Character Recognition",
      "Fault detection in wire drawing process",
    ],
  },
  aerospace: {
    id: "aerospace",
    title: "Machine Vision Applications for Aerospace Manufacturing Industry",
    mediaType: "image",
    mediaSrc: aerospaceImg,
    description:
      "Machine vision in aerospace manufacturing ensures precision, safety, and compliance through automated visual inspection and tracking systems.",
    applications: [
      "Surface Defect Detection",
      "Manhour’s calculation",
      "Surface finishing inspection",
      "Part sequencing inspection",
      "Part orientation/pre-Fit check",
      "Dimension accuracy inspection",
      "Human action recognition",
      "Optical character",
      "Foreign Particles / Object Detection",
      "Safety & Security Checking",
      "Pre-Dispatch inspection",
      "Fire detection",
      "BIW inspection",
      "Customised vision solution",
    ],
  },
};

export default IndustryData;