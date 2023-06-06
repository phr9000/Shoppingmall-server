import React, {useState} from "react";
const TestLayout: React.FC = () => {
    const tabs = [
        {label: 'tab1'},
        {label: 'tab2'},
        {label: 'tab3'}
    ];

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tabIndex:any) => {
        setActiveTab(tabIndex);
    };

    return(
        <div className="tab-container">
            {/* tab list */}
            <ul className="tab-list">
                {tabs.map((tab, index)=>(
                    <li 
                        key={index}
                        className={`tab ${index === activeTab ? 'active' : ''}`}
                        onClick={()=> handleTabClick(index)}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>
            {/* tab panel */}
            <ul className="tab-panel-list">
            {activeTab === 0 && (
                <li className="tab-panel">
                    <h2>Tab Content 1</h2>
                    <p>This is the content for Tab 1.</p>
                </li>
                )}
                {activeTab === 1 && (
                <li className="tab-panel">
                    <h2>Tab Content 2</h2>
                    <p>This is the content for Tab 2.</p>
                </li>
                )}
                {activeTab === 2 && (
                <li className="tab-panel">
                    <h2>Tab Content 3</h2>
                    <p>This is the content for Tab 3.</p>
                </li>
                )}
            </ul>
        </div>
    )
};
export default TestLayout;