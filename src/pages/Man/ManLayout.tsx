import React, {useState} from "react";
import FilteredList from "./FilteredList";


const ManLayout: React.FC = () => {
    const [items, setItems] = useState<Item[]>([
        { id: 1, name: "item1", category: "cat1" },
        { id: 2, name: "item2", category: "cat2" },
        { id: 3, name: "item3", category: "cat1" },
      ]);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

        const filteredItems = items.filter((item) =>
        selectedCategory ? item.category === selectedCategory : true
    );
    return (
        <div>
            <CategoryTabs onClick={handleCategoryClick} />
            <FilteredList filteredItems={filteredItems} />
        </div>
    );
};
export default ManLayout;