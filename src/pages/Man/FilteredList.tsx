import React from "react";
type Item = {
    id: number;
    name: string; 
};

type Props = {
    filteredItems: Item[];
};
const FilteredList: React.FC<Props> = ({ filteredItems }) => {
    

    return (
        <div>

        </div>
    );
};
export default FilteredList;