import React from 'react';
import '../../src/index.css';

function Button({type, title}) {
    return (
        <button type={type} class="btn btn-outline-success">{title}</button>
    );
}

export default Button;
