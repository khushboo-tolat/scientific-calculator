import React from 'react';
import '../css/wrapper.css';

const Wrapper = ({ children }) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
} 

export default Wrapper
