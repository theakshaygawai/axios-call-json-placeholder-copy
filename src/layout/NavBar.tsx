import React from 'react';

interface IProps{
    heading : string;
    color? : string;
}

const NavBar:React.FC<IProps> = (props) => {
    return(
        <>
            <nav className="navbar navbar-dark bg-success">
                <div className="container">
                    <a href="" className="navbar-brand">{props.heading}</a>
                </div>
            </nav>
        </>
    )
};
export default NavBar;