import React from "react";
import { useTranslation } from "react-i18next";

const TechnicalInfoModal = ({ product }) => {
  const { t } = useTranslation();

  // Safely determine if this is a dome light (you can improve this logic later if needed)
  const isDomeLight = product?.title?.toLowerCase().includes("dome") || false;

  // Determine shell material dynamically (still based on product type)
  const shellMaterial = isDomeLight
    ? t("TechnicalInfo.shellMaterialDome") // "Anodized Aluminum / ABS"
    : t("TechnicalInfo.shellMaterialStandard"); // "Anodized Aluminum"

  // Get translated product title with fallback
  const productTitle = t(`Products.${product?.slug || "unknown"}.title`, {
    defaultValue: product?.title || t("TechnicalInfo.unknownProduct"),
  });

  return (
    <div className="technical-info-container reveal-on-scroll">
      <div className="table-wrapper">
        <table className="technical-info-table" aria-label={t("TechnicalInfo.tableAriaLabel")}>
          <colgroup>
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
            <col style={{ width: "20%" }} />
          </colgroup>

          <tbody>
            <tr>
              <td className="tech-header-cell">{t("TechnicalInfo.category")}</td>
              <td colSpan="4" className="tech-data-cell">{productTitle}</td>
            </tr>

            <tr>
              <td className="tech-header-cell">{t("TechnicalInfo.color")}</td>
              <td className="tech-data-cell">{t("TechnicalInfo.colorRed")}</td>
              <td className="tech-data-cell">{t("TechnicalInfo.colorWhite")}</td>
              <td className="tech-data-cell">{t("TechnicalInfo.colorBlue")}</td>
              <td className="tech-data-cell">{t("TechnicalInfo.colorGreen")}</td>
            </tr>

            <tr>
              <td className="tech-header-cell">{t("TechnicalInfo.colorTemperature")}</td>
              <td className="tech-data-cell">-</td>
              <td className="tech-data-cell">{t("TechnicalInfo.colorTempWhite")}</td>
              <td className="tech-data-cell">-</td>
              <td className="tech-data-cell">-</td>
            </tr>

            <tr>
              <td className="tech-header-cell">{t("TechnicalInfo.cableLength")}</td>
              <td colSpan="4" className="tech-data-cell">{t("TechnicalInfo.cableLengthValue")}</td>
            </tr>

            <tr>
              <td className="tech-header-cell">{t("TechnicalInfo.connectorDefinition")}</td>
              <td colSpan="4" className="tech-data-cell">
                {t("TechnicalInfo.connectorDescription")}
              </td>
            </tr>

            <tr>
              <td className="tech-header-cell">{t("TechnicalInfo.shellMaterial")}</td>
              <td colSpan="4" className="tech-data-cell">{shellMaterial}</td>
            </tr>

            <tr>
              <td className="tech-header-cell">{t("TechnicalInfo.cooling")}</td>
              <td colSpan="4" className="tech-data-cell">
                {t("TechnicalInfo.coolingValue")}
              </td>
            </tr>

            <tr>
              <td className="tech-header-cell">
                {t("TechnicalInfo.operatingTempHumidity")}
              </td>
              <td colSpan="4" className="tech-data-cell">
                {t("TechnicalInfo.operatingTempHumidityValue")}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TechnicalInfoModal;