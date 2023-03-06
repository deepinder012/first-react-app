import React from 'react';
import Logo from './Logo'

const Header = () => {
    return (
        <div id='Header'>
            <div id="header-bar">
                <i className="fa-solid fa-house icons"></i>
                <i className="fa-regular fa-circle-question icons"></i>
                <i className="fa-regular fa-envelope icons"></i>
                <i className="fa-regular fa-address-card icons"></i>
                <i className="fa-solid fa-wheelchair-move icons"></i>
            </div>
            <div id="sticky">
                <div id="header-center">
                    <Logo />
                    <div>
                        <h1 id="heading">PANJAB UNIVERSITY</h1>
                        <p className='sub-head'>Established under the Panjab University Act VII of 1947</p>
                        <p className='sub-head'>- enacted by the Government of India</p>
                    </div>
                </div>

                <div id="header-below">
                    <h5>ABOUT PU</h5>
                    <h5>OUR ADMINISTRATION</h5>
                    <h5>ACADEMICS</h5>
                    <h5>RESEARCH</h5>
                    <h5>STUDENTS</h5>
                    <h5>EXAMINATION</h5>
                    <h5>COLLABORATIONS</h5>
                    <h5>IQAC</h5>
                    <h5>NISP</h5>
                </div>
            </div>

        </div>
    )
}

export default Header;