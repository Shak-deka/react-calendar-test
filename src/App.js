import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import About from './components/about/about';
import MyCalendar from './components/calendar/calendar';
import Event from './components/event';
import NavbarMenu from './components/navbar/Navbar';

import "react-big-calendar/lib/css/react-big-calendar.css";


const App = (props) => {
  return (
    <BrowserRouter>
      <div>
        <NavbarMenu/>
        <div>
          <Route path='/about' component={About}/>
          <Route path='/calendar' component={MyCalendar}/>
          <Route path='/event' component={Event}/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
