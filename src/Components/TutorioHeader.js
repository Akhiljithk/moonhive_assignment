import React from 'react'
import Tutorio from '../images/Tutorio.jpg';
import User from '../images/user.jpg';
import './Sec1.css'
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';

function TutorioHeader() {
  return (
    <div className='Tutorio'>
         <div className='TutorioSec1'>
            <img src={Tutorio} className='TutorioLogo' alt="Logo" />
                <div className='searchCourses'><p>Courses</p> <ArrowDropDownIcon/></div> 
            <div className='input-container'>
                <input id='search' type="text" placeholder='What would you like to learn?' />
                <SearchIcon className="search-icon"/>
            </div>
         </div>
         <div style={{cursor:"pointer"}} className='userChnage'>
            <img src={User} className='userImg' alt="Logo" />
            <ArrowDropDownIcon className='selectUser'/>
            <NotificationsIcon className='noti'/> 
            <div className='ct'>2</div>
         </div>
    </div>
  )
}

export default TutorioHeader