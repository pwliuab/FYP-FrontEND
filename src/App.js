import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

function App() {
    return (
        <div style={{backgroundColor:'#E8F3EF'}}>
            {renderRoutes(routes)}
        </div>
    );
}

export default App;
