import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items }) => {
  // console.log("All item show", items);
  return (
    <main className="grocery-list">
      {items.map((list) => {
        const { id, title } = list;
        return (
          <div key={id} className="grocery-item">
            <p className="tit">{title}</p>;
            <div className="btn-container">
              <button type="button" className="edit-btn">
                <FaEdit />
              </button>
              <button type="button" className="delete-btn">
                <FaTrash />
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default List;
