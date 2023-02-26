import React, { useState, useEffect } from 'react';
import './Sec1.css'
import Paper from '@mui/material/Paper';
import poster1 from '../images/poster1.jpg';
import angular from '../images/angular.png';
import swift from '../images/swift.png';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Section2() {


    const [fav1, setfav1] = useState(
        JSON.parse(localStorage.getItem('fav1')) || false
    );
    const [fav2, setfav2] = useState(
        JSON.parse(localStorage.getItem('fav2')) || false
    );

    // const [count, setCount] = useState(() => {
    //     const storedValue = localStorage.getItem('count');
    //     return storedValue !== null ? parseInt(storedValue) : 0;
    // });

    // useEffect(() => {
    //     console.log("useff urinng");
    //     setfav1(localStorage.getItem('fav1'))
    //     setfav2(localStorage.getItem('fav2'))
    // });


    const updatefav1=()=>{
        const newValue = !fav1
        setfav1(newValue)
        localStorage.setItem('fav1', newValue);
    }
    const updatefav2=()=>{
        const newValue = !fav2
        setfav2(newValue)
        localStorage.setItem('fav2', newValue);
    }

      
  return (
    <div className='sec1' style={{marginTop:"0"}}>
        <div className='bestScore' style={{justifyContent:"start", paddingTop:"0"}}>
            <div className='bestScoreHead'>
                <div className='bestScoreHeadSec1' style={{display:"flex", flexDirection:"row", justifyContent:"space-between", width:"100%"}}>
                    <p style={{fontSize:"19px", fontWeight:"500", fontFamily: "'Oswald', sans-serif"}}>Learning Paths</p>
                    <a href="3" style={{color:"grey"}}>My Learning paths</a>    
                </div>
            </div>
            <div className='learningPathCardWrapper'>
                <Paper className='learningPathCard'>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                        <img className='learningPathCardImage' src={poster1} alt="Logo" />
                        <div style={{display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"center", marginLeft:"10px"}}>
                            <p style={{fontWeight:"500"}}>Angular</p>
                            <p style={{color:"gray"}}>24 courses</p>
                        </div>
                    </div>
                    <button className='editAct' style={{color:"gray", border:"none"}}>Resume</button>
                </Paper>
                <Paper className='learningPathCard'>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                        <img className='learningPathCardImage' src={poster1} alt="Logo" />
                        <div style={{display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"center", marginLeft:"10px"}}>
                            <p style={{fontWeight:"500"}}>Angular</p>
                            <p style={{color:"gray"}}>24 courses</p>
                        </div>
                    </div>
                    <button className='editAct' style={{color:"gray"}}>Resume</button>
                </Paper>
                <Paper className='learningPathCard'>
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}}>
                        <img className='learningPathCardImage' src={poster1} alt="Logo" />
                        <div style={{display:"flex", flexDirection:"column", alignItems:"start", justifyContent:"center", marginLeft:"10px"}}>
                            <p style={{fontWeight:"500"}}>Angular</p>
                            <p style={{color:"gray"}}>24 courses</p>
                        </div>
                    </div>
                    <button className='editAct' style={{color:"gray", border:"none"}}>Resume</button>
                </Paper>
            </div>
        </div>
        <div className='sec1div2'>
            <div className='bestScoreHead'>
                <div className='bestScoreHeadSec1' style={{padding:"0 17px",display:"flex", flexDirection:"row", justifyContent:"space-between", width:"98%"}}>
                    <p style={{fontSize:"19px", fontWeight:"500", fontFamily: "'Oswald', sans-serif"}}>Courses</p>
                    <a href="3" style={{color:"grey"}}>My courses</a>    
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"start", width:"98%", marginTop:"10px"}}>
                <Paper className='courseCard'>
                    <img src={angular} alt="Logo" />
                    <div className='courseCardCaption'>
                        <p style={{fontWeight:"500"}}>Learn Angular</p>
                        {fav1 ? <FavoriteIcon className='f' onClick={updatefav1} style={{cursor:"pointer", color:"red"}}/> : <FavoriteIcon className='f' onClick={updatefav1} style={{cursor:"pointer"}}/>}
                    </div>
                </Paper>
                <Paper className='courseCard' style={{marginLeft:"13px"}}>
                    <img src={swift} alt="Logo" />
                    <div className='courseCardCaption'>
                        <p style={{fontWeight:"500"}}>Learn Swift</p>
                        {fav2 ? <FavoriteIcon className='f' onClick={updatefav2} style={{cursor:"pointer", color:"red"}}/> : <FavoriteIcon className='f' onClick={updatefav2} style={{cursor:"pointer"}}/>}
                    </div>
                </Paper>
            </div>
        </div>
    </div>
  )
}

export default Section2