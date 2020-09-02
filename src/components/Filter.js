import React from "react";

const Filter = ({ input, handleInput, sleeps, handleSelectSs }) => {
  return (
    <div className="filtrer-components">
      <div className="header-div">
        Filter By Brand
        <input
          placeholder="enter brand name"
          className="input"
          type="text"
          name="input"
          value={input}
          onChange={handleInput}
        />
        <button type="GO" className="btn-go">
          GO
        </button>
      </div>
      <div className="filter-by-sleep">
        Sleep Size
        <select className="select-ss" value={sleeps} onChange={handleSelectSs}>
          <option value="">All</option>
          <option value="1">ss-1</option>
          <option value="2">ss-2</option>
          <option value="3">ss-3</option>
          <option value="4">ss-4</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
