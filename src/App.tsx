import React, { useEffect } from 'react';
// import './App.css';

function App() {

  useEffect(() => {
    const url = "https://cdn.skyq.sky.com/recruitment/tvguide/services.json";

    fetch(url)
      .then((res) => res.json())
      .then(jsonRes => console.log({ jsonRes }));
  }, [])

  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
