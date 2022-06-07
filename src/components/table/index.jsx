import React from "react";
import "./table.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

const Table = ({ headers, data, setData, searchTerm }) => {
  const notifySuccess = (msg) =>
    toast.success(msg, {
      position: toast.POSITION.TOP_CENTER,
      closeButton: false,
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
    });
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
                        notifySuccess("Item has been deleted.");
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
      <ToastContainer
        closeButton={false}
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
      />
    </div>
  );
};

export default Table;
