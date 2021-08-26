import React from 'react';
import './resources/styles.css'
import { Element } from 'react-scroll';
import Featured from './components/featured';




import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Mau5VenueInfo from './components/mau5VenueInfo';
import Hightlights from './components/highlights';
import Pricing from './components/pricing';
import Location from './components/location';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Element name="featured">
        <Featured />
      </Element>
      
      <Element name="venueinfo">
      <Mau5VenueInfo />
    </Element>

      <Element name="highlights">
      <Hightlights />
      </Element>

      <Element name="pricing">
      <Pricing />
      </Element>

      <Element name="location">
      <Location />
      </Element>
      

      <Footer />
    </div>

  );
}

export default App;
