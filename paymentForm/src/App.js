import React, { useState } from 'react';
import FormSection from './components/FromSection/FormSection';
import './App.css';

function App() {
  const [info, setInfo] = useState(false);
  const [payment, setPayment] = useState(false);
  const nextPage = () => {
    if (!info && !payment) {
      setInfo(true);
      setPayment(false);
    } else {
      setInfo(false);
      setPayment(true);
    }
  };
  return (
    <div className="App">
      <nav>
        <ul>
          <li
            className={`${!info && !payment ? 'active' : ''}`}
            onClick={() => (setInfo(false), setPayment(false))}
          >
            <label className="nav-items" htmlFor="your-gift">
              Your gift
            </label>
            <div id="your-gift">1</div>
          </li>
          <li
            className={`${info && !payment ? 'active' : ''}`}
            onClick={() => (setInfo(true), setPayment(false))}
          >
            <label className="nav-items" htmlFor="your-info">
              Your info
            </label>
            <div id="your-info">2</div>
          </li>
          <li
            className={`${!info && payment ? 'active' : ''}`}
            onClick={() => (setInfo(false), setPayment(true))}
          >
            <label className="nav-items" htmlFor="payment">
              Payment
            </label>
            <div id="payment">3</div>
          </li>
        </ul>
      </nav>
      <FormSection info={info} payment={payment} nextPage={nextPage} />
    </div>
  );
}

export default App;
