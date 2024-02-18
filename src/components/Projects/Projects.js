import React from 'react';
import News from './News/News'
import Calculator from './Calculator/Calculator'

export default function Projects() {
    return (
      <>
        <h1>Projects</h1>

        <h2>
          Projects to come:
        </h2>

        <p>
          calculator
        </p>
        <h2>Calculator</h2>
        <Calculator />
        <h2>Headlines from News API</h2>
        <div className='background'><News /></div>
        
      </>
    );
}