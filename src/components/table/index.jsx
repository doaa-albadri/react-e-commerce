import React from "react";
import "./table.css";
const Table = ({ headers, data, setData, searchTerm }) => {
  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          <tr className="headers">
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
          {data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              } else if (
                val.Name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((val, key) => {
              return (
                <tr key={key} className="data">
                  <td className="data-item">
                    <img src={val.Image} />
                  </td>
                  <td className="data-item">{val.Name}</td>
                  <td className="data-item">{val.Brand}</td>
                  <td className="data-item">{val.Price}</td>
                  <td className="data-item">
                    <span
                      className="delete-item"
                      onClick={() => {
                        data.splice(key, 1);
                        setData([...data]);
                      }}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
