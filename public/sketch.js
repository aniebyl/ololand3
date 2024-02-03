// Geo Locate
let lat, lon;
if ('geolocation' in navigator) {
  console.log('geolocation available');
  navigator.geolocation.getCurrentPosition(async (position) => {
    let lat, lon, weather, air;
    try {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      document.getElementById('latitude').textContent = lat.toFixed(2);
      document.getElementById('longitude').textContent = lon.toFixed(2);
      const api_url = `weather/${lat},${lon}`;
      console.log(api_url);
      console.log('sketch.js line 14');
      const response = await fetch(api_url);
      const json = await response.json();
      weather = json.weather.current;
      console.log(json);
      console.log('sketch.js line 18');

      document.getElementById('temp').textContent = json.weather.current.temp_c;
      document.getElementById('summary').textContent = json.weather.current.condition.text;
    } catch (error) {
      console.error(error);
      air = { value: -1 };
      document.getElementById('aq_value').textContent = 'NO READING';
    }

    const data = { lat, lon, weather, air };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const db_response = await fetch('/api', options);
    const db_json = await db_response.json();
    console.log(db_json);
    console.log('sketch.js line 41');
  });
} else {
  console.log('geolocation not available');
}
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
