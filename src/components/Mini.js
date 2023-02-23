import React, { useState } from "react";

function Mini() {
  const [location, setLocation] = useState("");
  const [locationAccepted, setLocationAccepted] = useState(false);

  const requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`${latitude},${longitude}`);
        setLocationAccepted(true);
      });
    }
  };

  const handleButtonClick = () => {
    if (!locationAccepted) {
      requestLocation();
    }
  };

  return (
    <div id="mini">
      <div id="merge">
        <input
          type="text"
          placeholder="Adresini Belirle veya Seç"
          id="adress"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button id="location" onClick={requestLocation}>
          <span className="material-symbols-outlined">my_location</span>
        </button>
      </div>
      <div id="other">
        <button className="biggie" onClick={handleButtonClick}>
          Restoran
        </button>
        <span>veya</span>
        <button className="biggie" onClick={handleButtonClick}>
          Gel Al
        </button>
      </div>
    </div>
  );
}

export default Mini;
