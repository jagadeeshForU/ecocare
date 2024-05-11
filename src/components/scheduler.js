import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { postBookSchedule } from './api';
import Navigation from './Navigation/Navigation';
import "../index.css";
const BookSchedule = () => {
  const {  handleSubmit, errors } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      await postBookSchedule(data);
      setSuccessMessage('Booking schedule submitted successfully!');
    } catch (error) {
      setErrorMessage('Failed to submit booking schedule. Please try again later.');
    }
  };

  return (
    <>
    <Navigation></Navigation>
    <h2>Garbage Collection Schedule</h2>
    <div className="container-login">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" class="input-field" />
          {/* {errors.date && <span>Date is required</span>} */}
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" class="input-field"  />
          {/* {errors.time && <span>Time is required</span>} */}
        </div>
        <button class="input-submit" type="submit">Book Schedule</button>
      </form>
      {/* {successMessage && <div>{successMessage}</div>}
      {errorMessage && <div>{errorMessage}</div>} */}
    </div>
    </>
  );
};

export default BookSchedule;
