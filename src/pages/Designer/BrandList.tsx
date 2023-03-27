import React from "react";

type dataType = {
  id: number;
  url?: string;
  engName: string;
  korName: string;
  category: string;
};

type DesignProps = {
  datalist: dataType[];
  // category: string;
};

const BrandList: React.FC<DesignProps> = (data) => {
  return (
    <ul className="brand-list">
      {data.datalist.map((list) => (
        <li key={list.id}>
          {list.id}
          <li className="brand-name__eng">{list.engName}</li>
          <li className="brand-name__kor">{list.korName}</li>
        </li>
      ))}
    </ul>
  );
};

export default BrandList;
