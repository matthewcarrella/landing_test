import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Partners } from "./components/partners";
import { Events } from "./components/Events";
import { Talent } from "./components/Talent";
import { LiveStream } from "./components/LiveStream";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Events data={landingPageData.Gallery} />
      <Talent data={landingPageData.Talent} />
     

      {/*<Gallery data={landingPageData.Gallery} />*/}
     {/* <Testimonials data={landingPageData.Testimonials} />
      <Partners data={landingPageData.Partners} />
      <Team data={landingPageData.Team} />*/}
      <Contact data={landingPageData.Contact} />
      <LiveStream/>



    </div>
  );
};

export default App;
