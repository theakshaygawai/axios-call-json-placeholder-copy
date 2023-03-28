import React from 'react';
import spinnerImg from "../assets/img/spinner.gif";

const Spinner:React.FC = () => {
    return (
        <>
            <div className="loading-spinner">
                <img src={spinnerImg} alt=""/>
            </div>
        </>
    );
}
export default Spinner;
