import React from 'react';

export default function Input(props) {
    return (
        <div>
            <label htmlFor="fname">First name:</label>
            <input type="text" id="fname" name="fname" />
        </div>
    );
}
