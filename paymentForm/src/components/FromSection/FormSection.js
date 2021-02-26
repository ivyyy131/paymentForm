import React, { useState } from 'react';
import Gift from '../Gift/Gift';
import Info from '../Info/Info';
import Payment from '../Payment/Payment';

function FormSection({ info, payment, nextPage }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    donation: '',
    organization: '',
    phone: '',
    street: '',
    city: '',
    country: '',
    state: '',
    zip: '',
    email: '',
    amount: '',
    isInternational: '',
    subscription: false,
    supporting: '',
    honor: '',
    honoreeName: '',
    notificationName: '',
    notificationEmail: '',
    notificationFrom: '',
    message: '',
    date: '',
    transactionType: '',
    cardType: '',
    expCardMonth: '',
    expCardYear: '',
    securityCode: '',
  });
  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === 'subscription') {
      if (value === 'false') {
        value = true;
        setFormData({ ...formData, [name]: value });
      } else {
        value = false;
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const formSubmit = async () => {
    if (formData.firstName) {
      console.log('Submitted!');
      postData('http://localhost:5000/payment-form-api', formData).then(
        (data) => {
          console.log(data);
        }
      );
    } else {
      console.error('Please fill first name!');
    }
  };
  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  }
  if (info) {
    return (
      <div className="container">
        <Info
          nextPage={nextPage}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
    );
  }
  if (payment) {
    return (
      <div className="container">
        <Payment
          formSubmit={formSubmit}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
    );
  } else {
    return (
      <div className="container">
        <Gift
          nextPage={nextPage}
          handleChange={handleChange}
          formData={formData}
        />
      </div>
    );
  }
}

export default FormSection;
