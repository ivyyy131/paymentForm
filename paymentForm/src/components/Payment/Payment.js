import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';

function Payment({ formSubmit, formData, handleChange }) {
  return (
    <div>
      <p>
        Type<span>*</span>
      </p>
      <p>
        <input
          type="radio"
          name="transactionType"
          id="1"
          value="Credit Card"
          onClick={handleChange}
        />
        <label htmlFor="1">Credit Card</label>
      </p>
      <p>
        <input
          type="radio"
          name="transactionType"
          id="2"
          value="Automatic Bank Withdrawal"
          onClick={handleChange}
        />
        <label htmlFor="2">Automatic Bank Withdrawal</label>
      </p>
      <p>
        Card Type<span>*</span>
      </p>
      <select name="cardType" id="card-type" onChange={handleChange}>
        <option value="">--Select--</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard">MasterCard</option>
        <option value="Amex">Amex</option>
        <option value="Discover">Discover</option>
      </select>
      <p>
        <label htmlFor="card">Card number</label>
        <span>*</span>
      </p>
      <input type="number" name="number" id="card" placeholder="Card number" />
      <p>
        Expiration date<span>*</span>
      </p>
      <select name="expCardMonth" onChange={handleChange}>
        <option value="">--Month--</option>
        <option value="01">Jan</option>
        <option value="02">Feb</option>
        <option value="03">Mar</option>
        <option value="04">Apr</option>
        <option value="05">May</option>
        <option value="06">Jun</option>
        <option value="07">Jul</option>
        <option value="08">Aug</option>
        <option value="09">Sep</option>
        <option value="10">Oct</option>
        <option value="11">Nov</option>
        <option value="12">Dec</option>
      </select>
      <select id="year" name="expCardYear" onChange={handleChange}>
        <option value="0">--Year--</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
        <option value="2025">2025</option>
        <option value="2026">2026</option>
        <option value="2027">2027</option>
        <option value="2028">2028</option>
        <option value="2029">2029</option>
        <option value="2030">2030</option>
      </select>
      <p>
        <label htmlFor="code">
          Security Code<span>*</span>
        </label>
      </p>
      <div className="button-container">
        <input
          type="number"
          name="securityCode"
          id="code"
          placeholder="Security Code"
          value={formData.securityCode}
          onChange={handleChange}
        />
        <AiOutlineInfoCircle title="Please look at the back of your card there is a box with 3 numbers in it!" />
      </div>
      <p>Not a robot verification(info in the source code)</p>
      {/* Verification best done with  "react-google-recaptcha" however it needs registration for an API in order to work*/}
      <button onClick={formSubmit}>Give Now</button>
      <p>
        Note: Please click the “Give Now” button once and wait for the
        authorization to come up. If you click the button twice, or stop the
        process, you run the risk of having your credit card charged twice. You
        should see an authorization receipt on your screen within 60 seconds. If
        any problem occurs, please e-mail us immediately.
      </p>
    </div>
  );
}

export default Payment;
