import React from "react";
import "./table.css";
const Table = ({ headers, data }) => {
  return (
    <div className="table-container">
      <table className="table">
        <tr className="headers">
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key} className="data">
              <td className="data-item">
                <img src={val.Image} />
              </td>
              <td className="data-item">{val.Name}</td>
              <td className="data-item">{val.Brand}</td>
              <td className="data-item">{val.Price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
