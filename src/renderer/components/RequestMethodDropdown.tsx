import * as React from 'react';

const RequestMethodDropdown = () => (
    <select className="request-method">
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="COPY">COPY</option>
        <option value="HEAD">HEAD</option>
        <option value="OPTIONS">OPTIONS</option>
        <option value="LINK">LINK</option>
        <option value="UNLINK">UNLINK</option>
        <option value="PURGE">PURGE</option>
        <option value="LOCK">LOCK</option>
        <option value="UNLOCK">UNLOCK</option>
        <option value="PROPFIND">PROPFIND</option>
        <option value="VIEW">VIEW</option>
    </select>
);

export default RequestMethodDropdown;
