import React, { useState } from 'react';
import './AddTripForm.css';

const AddTripForm = () => {
  const [tripDetails, setTripDetails] = useState({
    startDate: '',
    endDate: '',
    source: '',
    destination: '',
    description: '',
  });

  const [savedTrips, setSavedTrips] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTripDetails({
      ...tripDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedTrips([...savedTrips, tripDetails]); // Save the trip
    setTripDetails({
      startDate: '',
      endDate: '',
      source: '',
      destination: '',
      description: '',
    }); // Reset form
  };

  return (
    <div className="add-trip-wrapper">
      {/* Left side: Saved trips */}
      <div className="saved-trips">
        <h3>Saved Trips</h3>
        {savedTrips.length === 0 ? (
          <p>No trips added yet.</p>
        ) : (
          <ul>
            {savedTrips.map((trip, index) => (
              <li key={index} className="trip-card">
                <strong>{trip.source} → {trip.destination}</strong>
                <p>{trip.startDate} to {trip.endDate}</p>
                {trip.description && <p>{trip.description}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right side: Add new trip form */}
      <div className="trip-form-box">
        <h2 className="form-heading">Add New Trip</h2>
        <form className="trip-form" onSubmit={handleSubmit}>
          <label htmlFor="startDate">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={tripDetails.startDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="endDate">End Date:</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={tripDetails.endDate}
            onChange={handleChange}
            required
          />

          <label htmlFor="source">Source:</label>
          <input
            type="text"
            id="source"
            name="source"
            value={tripDetails.source}
            onChange={handleChange}
            required
          />

          <label htmlFor="destination">Destination:</label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={tripDetails.destination}
            onChange={handleChange}
            required
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            rows="4"
            value={tripDetails.description}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Save Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTripForm;
