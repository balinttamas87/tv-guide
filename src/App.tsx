import React, { useEffect, useState } from 'react';
import TVGuide from './features/TVGuide/TVGuide';
// import './App.css';

function App() {

  // const initialState: InitialState = {};
  const [services, setServices] = useState([])

  useEffect(() => {
    const servicesUrl = "https://cdn.skyq.sky.com/recruitment/tvguide/services.json";
    const scheduleUrl = "https://cdn.skyq.sky.com/recruitment/tvguide/schedule/20200129/2002.json";

    fetch(servicesUrl)
      .then((res) => res.json())
      .then(services => {
        console.log({ services });
        setServices(services)
      });

    fetch(scheduleUrl)
      .then((res) => res.json())
      .then(schedule => console.log({ schedule }));
  }, [])

  return (
    <div className="App">
      <TVGuide services={services} />
    </div>
  );
}

export default App;
