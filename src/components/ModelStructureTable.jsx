import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getNestedSpecs } from "../data/productsData";
import buyIcon from "../assets/icons/buy-icon.png";

const ModelStructureTable = ({ product, slug }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const nestedSpecs = getNestedSpecs(product, slug);

  // Force English language for table headers
  const getHeaderText = (key) => {
    // Check if current language is English variants
    if (i18n.language.startsWith('en')) {
      const englishTexts = {
        noModels: "No models available",
        lumensNA: "N/A",
        lumensUnit: "lm",
        tableAriaLabel: "Product specifications table for {{product}}",
        subtype: "Sub Type",
        model: "Model",
        dimensions: "Dimensions (mm)",
        inputVolt: "Input Voltage",
        power: "Power",
        lumens: "Lumens",
        lumensSubtitle: "LUX at 500mm",
        color: "Color",
        buyNow: "Buy Now",
        availableColors: "Available Colors",
        buyAriaLabel: "Buy {{model}}",
        buyAlt: "Buy"
      };
      return englishTexts[key] || t(`ModelStructure.${key}`);
    }
    return t(`ModelStructure.${key}`);
  };

  if (Object.keys(nestedSpecs).length === 0) {
    return <div className="no-models">{getHeaderText("noModels")}</div>;
  }

  const hasSubtypes = Object.values(nestedSpecs).some((subtypes) =>
    Object.keys(subtypes).some((subtype) => subtype !== "")
  );

  // Define which dimensions to show for each product (unchanged)
  const dimensionMap = {
    "ring-light": ["A", "B", "C", "D"],
    "bar-light": ["A", "B", "C", "D", "E", "F"],
    "dome-light": ["A", "B", "C", "D", "E"],
    "flat-diffused-light-with-center-hole": ["A", "B", "C", "D", "E"],
    "flat-diffused-light": ["A", "B", "C", "D"],
    "indirect-flat-light": ["A", "B", "C", "D", "E"],
    "back-light": ["A", "B", "C", "D"],
    "spot-light": ["A", "B", "C"],
    "tunnel-light": ["A", "B", "C", "D"],
  };

  const dimensionColumns = dimensionMap[slug] || ["A", "B", "C", "D", "E", "F"];

  const formatLumens = (lumens) => {
    if (!lumens || lumens === "N/A" || lumens === "" || lumens === " ") {
      return getHeaderText("lumensNA");
    }
    return `${lumens} ${getHeaderText("lumensUnit")}`;
  };

  // Get translated product title (already handled in parent usually)
  const productDisplayName = t(`Products.${slug}.title`, {
    defaultValue: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
  });

  return (
    <div className="model-structure-table-container reveal-on-scroll">
      <div className="table-wrapper">
        <table
          className="model-structure-table"
          aria-label={getHeaderText("tableAriaLabel").replace("{{product}}", productDisplayName)}
        >
          <colgroup>
            <col style={{ width: hasSubtypes ? "13%" : "16%" }} />
            {hasSubtypes && <col style={{ width: "11%" }} />}
            <col style={{ width: hasSubtypes ? "22%" : "26%" }} />
            {dimensionColumns.map((_, i) => (
              <col key={`dim-${i}`} style={{ width: "4.9%" }} />
            ))}
            <col style={{ width: "8%" }} />
            <col style={{ width: "9%" }} />
            <col style={{ width: "10%" }} />
            <col style={{ width: "9%" }} />
            <col style={{ width: hasSubtypes ? "7.2%" : "4.2%" }} />
          </colgroup>

          <thead>
            <tr>
              <th rowSpan="2" className="header-cell product-title-header">
                {productDisplayName}
              </th>

              {hasSubtypes && (
                <th rowSpan="2" className="header-cell subtype-header">
                  {getHeaderText("subtype")}
                </th>
              )}

              <th rowSpan="2" className="header-cell model-header">
                {getHeaderText("model")}
              </th>

              <th colSpan={dimensionColumns.length} className="header-cell dimensions-header">
                {getHeaderText("dimensions")}
              </th>

              <th rowSpan="2" className="header-cell input-voltage-header">
                {getHeaderText("inputVolt")}
              </th>

              <th rowSpan="2" className="header-cell power-header">
                {getHeaderText("power")}
              </th>

              <th rowSpan="2" className="header-cell lumens-header">
                <div className="lumens-header-wrapper">
                  <span className="lumens-main">{getHeaderText("lumens")}</span>
                  <span className="lumens-subtitle">
                    ({getHeaderText("lumensSubtitle")})
                  </span>
                </div>
              </th>

              <th rowSpan="2" className="header-cell color-header">
                {getHeaderText("color")}
              </th>

              <th rowSpan="2" className="header-cell buy-header">
                {getHeaderText("buyNow")}
              </th>
            </tr>

            <tr>
              {dimensionColumns.map((dim) => (
                <th key={dim} className="header-cell dimension-subheader">
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
                  <tr key={model.uniqueKey} className="model-row">
                    {subIdx === 0 && idx === 0 && (
                      <td
                        rowSpan={typeSpan}
                        className="type-cell"
                        title={type === "Standard" ? "-" : type}
                      >
                        {type === "Standard" ? "-" : type}
                      </td>
                    )}

                    {hasSubtypes && idx === 0 && (
                      <td rowSpan={subSpan} className="subtype-cell" title={subtype || "-"}>
                        {subtype || "-"}
                      </td>
                    )}

                    <td className="model-cell" title={model.model}>
                      {model.model}
                    </td>

                    {dimensionColumns.map((dim) => (
                      <td key={dim} className="dimension-cell" title={model.dimensions?.[dim] || "-"}>
                        {model.dimensions?.[dim] ?? "-"}
                      </td>
                    ))}

                    <td className="input-volt-cell" title={model.inputVolt}>
                      {model.inputVolt}
                    </td>

                    <td className="power-cell" title={model.power}>
                      {model.power}
                    </td>

                    <td className="lumens-cell" title={model.lumens}>
                      {formatLumens(model.lumens)}
                    </td>

                    <td className="color-cell" title={getHeaderText("availableColors")}>
                      <div className="color-indicators">
                        <span className="color-white" />
                        <span className="color-red" />
                        <span className="color-green" />
                        <span className="color-blue" />
                      </div>
                    </td>

                    <td className="buy-cell">
                      <button
                        className="buy-button"
                        onClick={() =>
                          navigate(`/buy/${model.model}`, {
                            state: { productName: slug, from: location.pathname },
                          })
                        }
                        aria-label={getHeaderText("buyAriaLabel").replace("{{model}}", model.model)}
                      >
                        <img src={buyIcon} alt={getHeaderText("buyAlt")} className="buy-icon" />
                      </button>
                    </td>
                  </tr>
                ));
              });
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ModelStructureTable;