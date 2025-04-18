import React from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Explore & Plan Your Trip</h1>
      <p className="dashboard-subheading">Discover exciting places and organize your travel with ease</p>

      <div className="places-grid">
        <div className="place-card">
          <img src="https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg=" alt="Goa" />
          <h3>Goa</h3>
        </div>
        <div className="place-card">
          <img src="https://i.ytimg.com/vi/7NKk41YVWyA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDNPJFJDXtCyVjPDtzARd1lcUe_4Q" alt="Manali" />
          <h3>Manali</h3>
        </div>
        <div className="place-card">
          <img src="https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.jpg?s=612x612&w=0&k=20&c=r5or5KmtrZE5P93cDPG2FzxWQxhZA0qeTInoXJ7qXxA=" alt="Leh-Ladakh" />
          <h3>Leh-Ladakh</h3>
        </div>
        <div className="place-card">
          <img src="https://t4.ftcdn.net/jpg/05/84/76/73/360_F_584767353_EXYOkE8NcX37UwV4WfBw7AjBaEtU6mMy.jpg" alt="Jaipur" />
          <h3>Jaipur</h3>
        </div>
      </div>

      <button
  className="add-trip-button"
  onClick={() => window.open('/add-trip', '_blank')}
>
  + Add New Trip
</button>
    </div>
  );
};

export default DashboardPage;
