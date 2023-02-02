import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
        <header className='header'>
            <img src='https://www.edigitalagency.com.au/wp-content/uploads/Twitter-logo-png.png'/>
        </header>
        <nav className='nav'>
            <div>Profile</div>
            <div>Message</div>
        </nav>
        <div className='content'>Main content</div>
    </div>
  );
}

export default App;
