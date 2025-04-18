import React, { useState } from 'react';
import './AddTripForm.css';

const AddTripForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    startDate: '',
    endDate: '',
    source: '',
    destination: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Trip submitted:\n' + JSON.stringify(formData, null, 2));
    // Here you can send data to backend
  };

  return (
    <div className="form-container">
      <h2>Add New Trip</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Trip Title:
          <input type="text" name="title" required onChange={handleChange} />
        </label>
        <label>
          Start Date:
          <input type="date" name="startDate" required onChange={handleChange} />
        </label>
        <label>
          End Date:
          <input type="date" name="endDate" required onChange={handleChange} />
        </label>
        <label>
          Source:
          <input type="text" name="source" required onChange={handleChange} />
        </label>
        <label>
          Destination:
          <input type="text" name="destination" required onChange={handleChange} />
        </label>
        <button type="submit">Submit Trip</button>
      </form>
    </div>
  );
};

export default AddTripForm;
