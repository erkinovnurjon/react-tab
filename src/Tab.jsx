import { useState } from 'react';
import { Link } from 'react-router-dom';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('position');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleGoToPage = () => {
    if (inputValue === '1') {
      setActiveTab('position');
    } else if (inputValue === '2') {
      setActiveTab('negative');
    } else if (inputValue === '3') {
      setActiveTab('neutral');
    } else if (parseInt(inputValue) > 3) {
      alert('This page says');
    }
  };

  return (
    <div className='container'>
      <div className="form">
        <input
          type="number"
          placeholder='Enter Tab index'
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleGoToPage}>Change Tab</button>
        {activeTab === 'position' && <h1>Welcome to Positive Page</h1>}
        {activeTab === 'neutral' && <h1>Welcome to Neytral Page</h1>}
        {activeTab === 'negative' && <h1>Welcome to Negative Page</h1>}
        <ul>
          <li>
            <Link to="/position" onClick={() => setActiveTab('position')} className={activeTab === 'position' ? "active" : ""}>
              Positive
            </Link>
          </li>
          <li>
            <Link to="/negative" onClick={() => setActiveTab('negative')} className={activeTab === 'negative' ? "active" : ""}>
              Negative
            </Link>
          </li>
          <li>
            <Link to="/neutral" onClick={() => setActiveTab('neutral')} className={activeTab === 'neutral' ? "active" : ""}>
              Neytral
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;



