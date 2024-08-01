import React from 'react';
import '../css/buttonBox.css'

const ButtonBox = ({children}) => {
    return (
        <div className="button-box">
            {children}
        </div>
    )
}

export default ButtonBox