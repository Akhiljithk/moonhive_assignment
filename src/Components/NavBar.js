import React, { useState } from "react";
import './NavBar.css'
import logo from '../images/logo.jpg';

function NavBar(props) {

    const [isActiveTab1, setIsActiveTab1] = useState(true);
    const [isActiveTab2, setIsActiveTab2] = useState(false);
    const [isActiveTab3, setIsActiveTab3] = useState(false);

    const activeTab1 = () => {
        setIsActiveTab1(true);
        setIsActiveTab2(false);
        setIsActiveTab3(false);
        props.activeTab(1)
    };
    const activeTab2 = () => {
        setIsActiveTab1(false);
        setIsActiveTab2(true);
        setIsActiveTab3(false);
        props.activeTab(2)
    };
    const activeTab3 = () => {
        setIsActiveTab1(false);
        setIsActiveTab2(false);
        setIsActiveTab3(true);
    };

  return (
    <div className='NavBar'>
        <div className='content'>
            <div className='s1'>
                <img className='logo' src={logo} alt="Logo" />
                <div className='textInLogo'>
                    <p className="s1head">Alexander Watson</p>
                    <p className="s1subtext">Student  2,300IQ</p>
                </div>
            </div>
            <button className='editAct'>Edit account</button>
        </div>
        <div className='line'></div>
        <div className='tabWapper'>
            <div className='tabs'>
                <div className='tabsSec1'>
                    <p  onClick={activeTab1} className={isActiveTab1 ? "underline" : ""} >Dashboard</p>
                    <p onClick={activeTab2} className={isActiveTab2 ? "underline" : ""}>Courses</p>
                    <p onClick={activeTab3} className={isActiveTab3 ? "underline" : ""}>Discussions  </p>
                </div>
                <div>
                    <p href="">Profile  </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar