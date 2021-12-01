import React from 'react';
import './CreateButtonStyle.css'

const CreateButton = ({children, ...props}) => {
    return (
        <button {...props} className='btn'>
            {children}
        </button>
    );
};

export default CreateButton;
