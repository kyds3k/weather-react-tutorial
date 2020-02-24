import React from "react";
import { Helmet } from "react-helmet";

import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

const TITLE = "Fuckin' Weather Shit";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <WeatherEngine location="nairobi" />
      <WeatherEngine location="antarctica" />
      <WeatherEngine location="seattle" />
    </div>
  );
}

export default App;
