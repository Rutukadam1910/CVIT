import React, { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import "../Styles/Sidebar.css";

const SideBar = ({ showAtTop = null }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const gotop = document.getElementById("gotop");
    if (!gotop) return;
    
    if (showAtTop !== null) {
      // Use the prop value if provided (Dashboard component)
      if (showAtTop) {
        gotop.classList.add("visible");
      } else {
        gotop.classList.remove("visible");
      }
    } else {
      // Fall back to original behavior for other pages
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const middlePoint = documentHeight / 2;
        
        if (scrollTop + windowHeight / 2 >= middlePoint) {
          gotop.classList.add("visible");
        } else {
          gotop.classList.remove("visible");
        }
      };
      
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [showAtTop]);

  return (
    <div id="huake-side-bar" className="huake-side-bar" aria-label={t('QuickContactAriaLabel')}>
      <a
        href="#"
        rel="nofollow"
        aria-label={t('Top')}
        id="gotop"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
        <span>{t('Top')}</span>
      </a>
      <a
        href="/contact-us"
        onClick={(e) => {
          e.preventDefault();
          navigate("/contact-us");
        }}
        rel="nofollow"
        aria-label={t('Contact')}
        className="text"
      >
        <svg width="30" height="30" viewBox="0 0 512 512" fill="#ffffff" stroke="#ffffff" strokeWidth="70.2" strokeLinecap="round" strokeLinejoin="round">
          <g transform="translate(0, 512) scale(0.1, -0.1)">
            <path d="M1143 4651 c-55 -14 -230 -119 -316 -190 -231 -191 -398 -469 -462 -772 -38 -175 -35 -451 5 -648 41 -202 99 -369 195 -561 75 -150 585 -1027 663 -1139 337 -485 797 -780 1263 -809 295 -19 554 40 789 180 87 52 110 71 135 112 29 48 30 54 29 160 0 96 -4 121 -28 186 -41 108 -93 207 -186 355 -139 220 -217 311 -330 384 -87 57 -153 74 -254 69 -93 -5 -141 -24 -306 -121 -100 -59 -108 -62 -170 -62 -81 0 -157 35 -223 104 -29 30 -125 185 -284 461 -132 228 -249 431 -259 450 -26 51 -32 197 -9 255 22 58 51 84 171 155 l98 58 17 -27 c26 -43 1073 -861 1153 -901 64 -32 77 -35 155 -34 70 0 96 5 141 26 35 16 324 236 780 594 399 314 731 573 738 578 9 6 12 -183 12 -929 l0 -936 -25 -24 -24 -25 -518 0 c-333 0 -532 -4 -556 -11 -75 -21 -101 -112 -48 -171 l29 -33 564 0 c556 0 564 0 610 22 66 30 132 95 157 153 l21 50 -2 1057 -3 1058 -27 47 c-34 56 -92 104 -158 129 -48 18 -101 19 -1453 19 l-1403 0 -88 173 c-108 211 -178 318 -275 420 -107 112 -222 162 -318 138z
            m113 -239 c79 -57 165 -179 277 -392 88 -168 128 -285 130 -375 2 -117 -8 -127 -242 -261 -150 -86 -212 -164 -247 -311 -20 -85 -14 -225 14 -303 18 -50 487 -870 553 -967 63 -91 190 -178 304 -208 77 -20 192 -19 252 1 26 9 107 50 178 92 153 88 202 99 275 62 94 -48 196 -168 328 -387 91 -151 140 -261 156 -352 12 -74 13 -74 -108 -140 -286 -158 -674 -173 -987 -37 -282 121 -548 353 -748 650 -65 97 -577 979 -633 1091 -238 475 -272 969 -93 1340 58 120 114 196 229 310 82 82 134 124 201 162 50 29 97 53 106 53 9 0 34 -13 55 -28z
            m3278 -711 c-13 -12 -1366 -1074 -1432 -1124 -63 -48 -129 -60 -180 -33 -17 9 -266 200 -552 425 -286 225 -529 415 -540 422 -19 14 -19 15 11 76 26 51 32 78 37 153 l5 90 1330 0 c776 0 1327 -4 1321 -9z"/>
          </g>
        </svg>
        <span>{t('Contact')}</span>
      </a>
    </div>
  );
};

export default SideBar;