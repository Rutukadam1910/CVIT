// // BordCameraHousing.js
// import React, { useEffect, useState, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import Navbar from "./Navbar";
// import Gallery from "./Gallery";
// import ImageZoomModal from "./ImageZoomModal";
// import SideBar from "./Sidebar";
// import "../Styles/BordCameraHousing.css";
// import cameraHousingimage1 from "../assets/BrodCameraHousing/camera-housing(1).jpg";
// import cameraHousingimage2 from "../assets/BrodCameraHousing/camera-housing(2).jpg";
// import cameraHousingimage3 from "../assets/BrodCameraHousing/camera-housing(3).jpg";
// import cameraHousingimage4 from "../assets/BrodCameraHousing/camera-housing(4).jpg";
// import cameraHousingimage5 from "../assets/BrodCameraHousing/camera-housing(5).jpg";
// import cameravisionenclosureImage from "../assets/BrodCameraHousing/camera-housing(6).jpg";

// const BordCameraHousing = () => {
//   const { t } = useTranslation();
//   const navigate = useNavigate();
//   const location = useLocation();

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [zoomLevel, setZoomLevel] = useState(1);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [startPos, setStartPos] = useState({ x: 0, y: 0 });
//   const [loadGallery, setLoadGallery] = useState(false);

//   const zoomContainerRef = useRef(null);
//   const enquireButtonRef = useRef(null);
//   const hasScrolledToEnquire = useRef(false);

//   // Translated title and description
//   const title = t("BordCameraHousing.title");
//   const description = t("BordCameraHousing.description");

//   const galleryImages = [
//     cameraHousingimage1,
//     cameraHousingimage2,
//     cameraHousingimage3,
//     cameraHousingimage4,
//     cameraHousingimage5,
//   ];

//   // Preload gallery images
//   useEffect(() => {
//     const preload = async () => {
//       await Promise.all(
//         galleryImages.map((src) => {
//           return new Promise((resolve) => {
//             const img = new Image();
//             img.src = src;
//             img.onload = img.onerror = resolve;
//           });
//         })
//       );
//       setLoadGallery(true);
//     };
//     preload();
//   }, []);

//   // Scroll to top on first mount
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   // Handle return from Enquire form → scroll to enquire button
//   useEffect(() => {
//     const shouldScroll =
//       (location.state?.scrollToEnquire || location.hash === "#enquire") &&
//       enquireButtonRef.current &&
//       !hasScrolledToEnquire.current;

//     if (shouldScroll) {
//       hasScrolledToEnquire.current = true;

//       setTimeout(() => {
//         if (enquireButtonRef.current) {
//           const navbarHeight =
//             document.querySelector(".navbar")?.offsetHeight || 80;
//           const extraSpace = 40;

//           const elementPosition = enquireButtonRef.current.getBoundingClientRect().top;
//           const offsetPosition =
//             window.pageYOffset + elementPosition - navbarHeight - extraSpace;

//           window.scrollTo({
//             top: offsetPosition,
//             behavior: "smooth",
//           });

//           // Clean URL
//           navigate(location.pathname, { replace: true, state: {} });
//         }
//       }, 450); // Increased timeout for better reliability
//     }
//   }, [location, navigate]);

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

//   const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3));
//   const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));

//   const handleMouseDown = (e) => {
//     if (zoomLevel > 1) {
//       setIsDragging(true);
//       setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
//       e.preventDefault();
//     }
//   };

//   const handleMouseMove = (e) => {
//     if (!isDragging || zoomLevel <= 1) return;
//     const newX = e.clientX - startPos.x;
//     const newY = e.clientY - startPos.y;
//     const container = zoomContainerRef.current;
//     if (container) {
//       const rect = container.getBoundingClientRect();
//       const maxX = (rect.width * zoomLevel - rect.width) / 2;
//       const maxY = (rect.height * zoomLevel - rect.height) / 2;
//       setPosition({
//         x: Math.max(-maxX, Math.min(maxX, newX)),
//         y: Math.max(-maxY, Math.min(maxY, newY)),
//       });
//     }
//   };

//   const handleMouseUp = () => setIsDragging(false);

//   const handleTouchStart = (e) => {
//     if (zoomLevel > 1 && e.touches.length === 1) {
//       setIsDragging(true);
//       setStartPos({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
//       e.preventDefault();
//     }
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging || zoomLevel <= 1 || e.touches.length !== 1) return;
//     const newX = e.touches[0].clientX - startPos.x;
//     const newY = e.touches[0].clientY - startPos.y;
//     const container = zoomContainerRef.current;
//     if (container) {
//       const rect = container.getBoundingClientRect();
//       const maxX = (rect.width * zoomLevel - rect.width) / 2;
//       const maxY = (rect.height * zoomLevel - rect.height) / 2;
//       setPosition({
//         x: Math.max(-maxX, Math.min(maxX, newX)),
//         y: Math.max(-maxY, Math.min(maxY, newY)),
//       });
//     }
//     e.preventDefault();
//   };

//   const handleTouchEnd = () => setIsDragging(false);

//   const handleEnquireClick = () => {
//     navigate("/enquire", {
//       state: {
//         productName: "board-camera-housing",
//         from: location.pathname,
//         scrollToEnquire: true,
//       },
//     });
//   };

//   const handleBackToProducts = () => {
//     navigate("/product/without-cooling-jacket", {
//       state: { scrollTo: "product" },
//     });
//   };

//   return (
//     <>
//       <Navbar />

//       <main className="bord-camera-enclosure-main">
//         <h1 className="bord-camera-enclosure-title">{title}</h1>

//         <div className="bord-image-container">
//           <img
//             src={cameravisionenclosureImage}
//             alt={t("BordCameraHousing.mainImageAlt")}
//             className="bord-main-image"
//             draggable={false}
//             loading="eager"
//             onClick={() => handleImageClick(cameravisionenclosureImage)}
//           />
//         </div>

//         <div className="bord-information-container">
//           <p className="bord-information-text">{description}</p>
//         </div>

//         {/* Gallery Section */}
//         <div className="bord-gallery-section">
//           <div className={`bord-gallery-container ${loadGallery ? "loaded" : ""}`}>
//             <Gallery
//               galleryImages={galleryImages}
//               loadGallery={loadGallery}
//               onImageClick={handleImageClick}
//             />
//           </div>
//         </div>

//         <div className="bord-enquire-container">
//           <span>{t("BordCameraHousing.enquireText")}</span>
//           <button
//             ref={enquireButtonRef}
//             onClick={handleEnquireClick}
//             className="bord-enquire-btn"
//             id="enquire"
//           >
//             {t("BordCameraHousing.enquireButton")}
//           </button>
//         </div>

//         <div className="bord-back-to-products-container">
//           <button
//             onClick={handleBackToProducts}
//             className="bord-premium-btn bord-action-btn bord-pulse"
//           >
//             {t("BordCameraHousing.backToProducts")}
//           </button>
//         </div>
//       </main>

//       <SideBar navigate={navigate} />

//       {selectedImage && (
//         <ImageZoomModal
//           selectedImage={selectedImage}
//           zoomLevel={zoomLevel}
//           position={position}
//           isDragging={isDragging}
//           zoomContainerRef={zoomContainerRef}
//           onClose={handleCloseModal}
//           onZoomIn={handleZoomIn}
//           onZoomOut={handleZoomOut}
//           onMouseDown={handleMouseDown}
//           onMouseMove={handleMouseMove}
//           onMouseUp={handleMouseUp}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}
//         />
//       )}
//     </>
//   );
// };

// export default BordCameraHousing;


// BordCameraHousing.js
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Gallery from "./Gallery";
import ImageZoomModal from "./ImageZoomModal";
import SideBar from "./Sidebar";
import "../Styles/BordCameraHousing.css";
import cameraHousingimage1 from "../assets/BrodCameraHousing/camera-housing(1).jpg";
import cameraHousingimage2 from "../assets/BrodCameraHousing/camera-housing(2).jpg";
import cameraHousingimage3 from "../assets/BrodCameraHousing/camera-housing(3).jpg";
import cameraHousingimage4 from "../assets/BrodCameraHousing/camera-housing(4).jpg";
import cameraHousingimage5 from "../assets/BrodCameraHousing/camera-housing(5).jpg";
import cameravisionenclosureImage from "../assets/BrodCameraHousing/camera-housing(6).jpg";

const BordCameraHousing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [loadGallery, setLoadGallery] = useState(false);

  const zoomContainerRef = useRef(null);
  const enquireButtonRef = useRef(null);
  const hasScrolledToEnquire = useRef(false);

  // Translated title and description
  const title = t("BordCameraHousing.title");
  const description = t("BordCameraHousing.description");

  const galleryImages = [
    cameraHousingimage1,
    cameraHousingimage2,
    cameraHousingimage3,
    cameraHousingimage4,
    cameraHousingimage5,
  ];

  // Preload gallery images
  useEffect(() => {
    const preload = async () => {
      await Promise.all(
        galleryImages.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = img.onerror = resolve;
          });
        })
      );
      setLoadGallery(true);
    };
    preload();
  }, []);

  // Scroll to top on first mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle return from Enquire form → scroll to enquire button
  useEffect(() => {
    const shouldScroll =
      (location.state?.scrollToEnquire || location.hash === "#enquire") &&
      enquireButtonRef.current &&
      !hasScrolledToEnquire.current;

    if (shouldScroll) {
      hasScrolledToEnquire.current = true;

      setTimeout(() => {
        if (enquireButtonRef.current) {
          const navbarHeight =
            document.querySelector(".navbar")?.offsetHeight || 80;
          const extraSpace = 40;

          const elementPosition = enquireButtonRef.current.getBoundingClientRect().top;
          const offsetPosition =
            window.pageYOffset + elementPosition - navbarHeight - extraSpace;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });

          // Clean URL
          navigate(location.pathname, { replace: true, state: {} });
        }
      }, 450); // Increased timeout for better reliability
    }
  }, [location, navigate]);

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

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));

  const handleMouseDown = (e) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      setStartPos({ x: e.clientX - position.x, y: e.clientY - position.y });
      e.preventDefault();
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging || zoomLevel <= 1) return;
    const newX = e.clientX - startPos.x;
    const newY = e.clientY - startPos.y;
    const container = zoomContainerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const maxX = (rect.width * zoomLevel - rect.width) / 2;
      const maxY = (rect.height * zoomLevel - rect.height) / 2;
      setPosition({
        x: Math.max(-maxX, Math.min(maxX, newX)),
        y: Math.max(-maxY, Math.min(maxY, newY)),
      });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    if (zoomLevel > 1 && e.touches.length === 1) {
      setIsDragging(true);
      setStartPos({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
      e.preventDefault();
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || zoomLevel <= 1 || e.touches.length !== 1) return;
    const newX = e.touches[0].clientX - startPos.x;
    const newY = e.touches[0].clientY - startPos.y;
    const container = zoomContainerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      const maxX = (rect.width * zoomLevel - rect.width) / 2;
      const maxY = (rect.height * zoomLevel - rect.height) / 2;
      setPosition({
        x: Math.max(-maxX, Math.min(maxX, newX)),
        y: Math.max(-maxY, Math.min(maxY, newY)),
      });
    }
    e.preventDefault();
  };

  const handleTouchEnd = () => setIsDragging(false);

  const handleEnquireClick = () => {
    navigate("/enquire", {
      state: {
        productName: "board-camera-housing",
        from: location.pathname,
        scrollToEnquire: true,
      },
    });
  };

  const handleBackToProducts = () => {
    navigate("/product/without-cooling-jacket", {
      state: { scrollTo: "product" },
    });
  };

  return (
    <>
      <Navbar />

      <main className="bord-camera-enclosure-main">
        <h1 className="bord-camera-enclosure-title">{title}</h1>

        <div className="bord-image-container">
          <img
            src={cameravisionenclosureImage}
            alt={t("BordCameraHousing.mainImageAlt")}
            className="bord-main-image"
            draggable={false}
            loading="eager"
            onClick={() => handleImageClick(cameravisionenclosureImage)}
          />
        </div>

        <div className="bord-information-container">
          <p className="bord-information-text">{description}</p>
        </div>

        {/* Gallery Section */}
        <div className="bord-gallery-section">
          <div className={`bord-gallery-container ${loadGallery ? "loaded" : ""}`}>
            <Gallery
              galleryImages={galleryImages}
              loadGallery={loadGallery}
              onImageClick={handleImageClick}
            />
          </div>
        </div>

        <div className="bord-back-to-products-container">
          <button
            onClick={handleBackToProducts}
            className="bord-premium-btn bord-action-btn bord-pulse"
          >
            {t("BordCameraHousing.backToProducts")}
          </button>
        </div>
      </main>

      <SideBar navigate={navigate} />

      {selectedImage && (
        <ImageZoomModal
          selectedImage={selectedImage}
          zoomLevel={zoomLevel}
          position={position}
          isDragging={isDragging}
          zoomContainerRef={zoomContainerRef}
          onClose={handleCloseModal}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
      )}
    </>
  );
};

export default BordCameraHousing;