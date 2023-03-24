import React from "react";

// import { useState } from "react";

type dataType = {
  id: number;
  url: string;
};

type SideProps = {
  datalist: dataType[];
  id: number;
};

const SideComponent: React.FC<SideProps> = (data) => {
  return (
    <div className="side-banner">
      {data.datalist
        .filter((list) => list.id === data.id)
        .map((list) => (
          <li key={list.id}>
            <img src={list.url} alt="test" />
          </li>
        ))}
    </div>
  );
};

export default SideComponent;
