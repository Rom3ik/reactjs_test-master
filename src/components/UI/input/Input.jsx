import React from 'react';
import '../input/InputStyle.css'
const Input = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} type="text" className='input' {...props}/>
    );
});

export default Input;
