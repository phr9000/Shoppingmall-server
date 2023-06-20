import React, { useState } from "react";

interface Item {
  id: number;
  value: string;
}

const TestLayout: React.FC = () => {
  const [leftdata, setLeftdata] = useState<Item[]>([
    {
      id: 1,
      value: "value1"
    },
    {
      id: 2,
      value: "value2"
    },
    {
      id: 3,
      value: "value3"
    }
  ]);

  const [newValue, setNewValue] = useState("");
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [rightData, setRightData] = useState<Item[]>([]);

  const textAddClick = () => {
    const newItem: Item = {
      id: leftdata.length + 1,
      value: newValue
    };
    setLeftdata([...leftdata, newItem]);
    setNewValue("");
  };

  const addClick = (itemId: number) => {
    console.log(itemId);
    setSelectedItemId(itemId);
    const selectedItem = leftdata.find((item) => item.id === itemId);
    if (selectedItem) {
      setSelectedItemId(null);
      setLeftdata(leftdata.filter((item) => item.id !== itemId));
      setRightData([...rightData, selectedItem]);
    }
  };

  const handleRightInputChange = (e: React.ChangeEvent<HTMLInputElement>, itemId: number) => {
    const updatedData = rightData.map((item) =>
      item.id === itemId ? { ...item, value: e.target.value } : item
    );
    setRightData(updatedData);
  };

  return (
    <div className="test-container">
      {/* left */}
      <div className="item left">
        <div className="flex items-center m-b10">
          <input
            type="text"
            value={newValue}
            onChange={(e) => setNewValue(e.target.value)}
          />
          <button onClick={textAddClick}>text 추가</button>
        </div>
        <div>
          {leftdata.map((todo) => (
            <div className="flex items-center" key={todo.id}>
              {selectedItemId === todo.id ? (
                <input
                  type="text"
                  value={todo.value}
                  onChange={(e) => {
                    const updatedData = leftdata.map((item) =>
                      item.id === todo.id ? { ...item, value: e.target.value } : item
                    );
                    setLeftdata(updatedData);
                  }}
                />
              ) : (
                <input type="text" readOnly value={todo.value} />
              )}
              {selectedItemId === todo.id ? (
                <button onClick={() => addClick(todo.id)}>+</button>
              ) : (
                <button onClick={() => addClick(todo.id)}>+</button>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* right */}
      <div className="item right">
        {rightData.map((item) => (
          <div className="flex items-center" key={item.id}>
            <input
              type="text"
              value={item.value}
              onChange={(e) => handleRightInputChange(e, item.id)}
            />
            <button>-</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestLayout;