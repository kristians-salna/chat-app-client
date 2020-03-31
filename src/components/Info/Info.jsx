import React from 'react';
import './_Info.scss';

export default ({ message: { message } }) => (
    <div className="info-container">
        <span className="info-container__message">{message}</span>
    </div>
);