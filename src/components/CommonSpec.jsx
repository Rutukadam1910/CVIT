// CommonSpec.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const CommonSpec = ({ commonSpecs }) => {
  const { t } = useTranslation();

  // We expect commonSpecs to contain raw values
  // Labels/keys will come from translation files

  const commonSpecKeys = [
    "typeOfIllumination",
    "manufacturer",
    "warranty",
    "illuminationMode",
    "inputVoltage",
    "operatingTemperature",
    "ipRating",
    // "geometry" is special — added dynamically below
  ];

  // Prepare entries with translated labels
  const translatedEntries = commonSpecKeys.map((key) => [
    t(`CommonSpec.${key}`),
    commonSpecs[key] || "—",
  ]);

  // Add Geometry/Product Name at the end (or wherever you want)
  translatedEntries.push([
    t("CommonSpec.geometryLabel"),
    commonSpecs.geometry || commonSpecs.productName || "—",
  ]);

  // Create paired rows (2 columns layout)
  const pairedRows = [];
  for (let i = 0; i < translatedEntries.length; i += 2) {
    const left = translatedEntries[i];
    const right = translatedEntries[i + 1] || null;
    pairedRows.push({ left, right });
  }

  return (
    <div
      className="common-spec-container reveal-on-scroll"
      role="region"
      aria-labelledby="common-spec-title"
    >
      <div id="common-spec-title" className="common-spec-header" aria-hidden="true">
        {t("CommonSpec.title")} {/* ← You can also translate the section title */}
      </div>

      <table className="common-spec-table" aria-label={t("CommonSpec.ariaLabel")} role="table">
        <tbody>
          {pairedRows.map((pair, idx) => {
            const [lKey, lVal] = pair.left;
            const rightExists = !!pair.right;
            const [rKey, rVal] = pair.right || ["", ""];

            return (
              <tr key={`cs-row-${idx}`} className="table-row" role="row">
                <td className="label-cell" aria-label={lKey} role="rowheader">
                  {lKey}:
                </td>
                <td className="value-cell" aria-label={`${lKey} value`} role="cell">
                  {lVal}
                </td>

                {rightExists ? (
                  <>
                    <td className="label-cell" aria-label={rKey} role="rowheader">
                      {rKey}:
                    </td>
                    <td className="value-cell" aria-label={`${rKey} value`} role="cell">
                      {rVal}
                    </td>
                  </>
                ) : (
                  <>
                    <td className="empty-cell" />
                    <td className="empty-cell" />
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

export default CommonSpec;