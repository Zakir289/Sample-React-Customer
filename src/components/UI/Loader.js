import React from 'react';
import './Loader.css';
import loadingGif from "./../../images/loading-arrow.gif";

const Loader = () => {
    return (
        <div className="loading">
            <img src={loadingGif} alt="Loading ..." />
        </div>
    );
}
export default Loader;
