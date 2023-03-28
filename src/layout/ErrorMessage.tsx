import React from 'react';

interface IProps{
    message : string;
}

const ErrorMessage:React.FC<IProps> = (props) => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <small className="fw-bold text-danger">{props.message}</small>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ErrorMessage;
