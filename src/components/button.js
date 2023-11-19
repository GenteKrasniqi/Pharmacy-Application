import React from 'react';
import '../../src/index.css';

function Button({ title }) {
    return (
        <button type="button" class="btn btn-outline-success">{title}</button>
    );
}

export default Button;
