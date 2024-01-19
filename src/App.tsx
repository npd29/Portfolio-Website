import './App.css';
import React, { Component } from 'react';
import P5Wrapper from 'react-p5-wrapper';
import flowfield from './flowfield';

function App() {
    return (
        <div className="App">
            <P5Wrapper sketch={flowfield} color={[255, 255, 255]}></P5Wrapper>
        </div>
    );
}

export default App;
