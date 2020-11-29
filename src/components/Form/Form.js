import React from "react";

const Form = () => {
  return (
    <div className="search-box">
      <div className="search-icon">
        <input type="search" placeholder="Tìm kiếm . . ." />
        <label className="icon mb-0">
          <span className="fas fa-search" />
        </label>
      </div>
    </div>
  );
};

export default Form;
