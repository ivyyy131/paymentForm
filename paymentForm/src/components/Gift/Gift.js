import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function Gift({ nextPage, handleChange, formData }) {
  return (
    <div>
      <p className="required">
        <span>*</span>Required field
      </p>
      <p>
        Amount<span>*</span>
      </p>
      <div className="button-container">
        <button name="amount" value="50" onClick={handleChange}>
          $50
        </button>
        <button name="amount" value="100" onClick={handleChange}>
          $100
        </button>
        <button name="amount" value="250" onClick={handleChange}>
          $250
        </button>
        <button name="amount" value="500" onClick={handleChange}>
          $500
        </button>
        <input
          name="amount"
          type="number"
          placeholder="Other Amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <AiOutlineInfoCircle title="Please use '.' at your decimal place separator." />
      </div>
      <p>
        CHOOSE YOUR COUNTRY(International donor? Please choose Canada)
        <span>*</span>
      </p>
      <input
        type="radio"
        name="isInternational"
        id="Canada"
        value="Canada"
        onClick={handleChange}
      />
      <label htmlFor="Canada">Canada</label>
      <p>
        <input
          type="radio"
          name="isInternational"
          id="USA"
          value="USA"
          onClick={handleChange}
        />
        <label htmlFor="USA">United States</label>
      </p>
      <p>MAKE THIS A MONTHLY GIFT</p>
      <input
        type="checkbox"
        id="monthly-gift"
        name="subscription"
        value={formData.subscription}
        onClick={handleChange}
      />
      <label htmlFor="monthly-gift">
        My sustaining gift will automatically repeat each month until I cancel
        it.
      </label>
      <p>
        I'M SUPPORTING<span>*</span>
      </p>
      <div className="button-container">
        <input
          type="radio"
          name="supporting"
          id="1"
          value="Educational Outreach"
          onClick={handleChange}
        />
        <label htmlFor="1">Educational Outreach</label>
        <input
          type="radio"
          name="supporting"
          id="2"
          value="Research"
          onClick={handleChange}
        />
        <label htmlFor="2">Research</label>
        <input
          type="radio"
          name="supporting"
          id="3"
          value="Women is Physics"
          onClick={handleChange}
        />
        <label htmlFor="3">Women is Physics</label>
        <input
          type="radio"
          name="supporting"
          id="4"
          value="The Next Generation"
          onClick={handleChange}
        />
        <label htmlFor="4">The Next Generation</label>
      </div>
      <div className="next-btn-holder">
        <button onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}

export default Gift;
