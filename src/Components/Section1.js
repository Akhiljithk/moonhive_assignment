import React from 'react'
import './Sec1.css'
import Paper from '@mui/material/Paper';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RadarChart from './RadarChart';
import chart2 from '../images/chart2.jpg';
import poster1 from '../images/poster1.jpg';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Section1() {
  return (
    <div className='sec1'>
        <Paper className='bestScore'>
            <div className='bestScoreHead'>
                <div className='bestScoreHeadSec1'>
                    <p className='count'>116</p>
                    <div style={{marginLeft:"20px"}}>
                        <p style={{fontWeight:"500"}}>Angular</p>
                        <p style={{color:"grey"}}>Best score</p>
                    </div>
                </div>
                <div className='dropDownPopular' style={{display:"flex", flexDirection:"row"}}>
                    <p className='popularTopics'>Popular Topics</p>
                    <ArrowDropDownIcon/>
                </div>
            </div>
            <div className='canvaWrapper'>
                <RadarChart />
            </div>
        </Paper>
        <div className='sec1div2'>
            <Paper className='experience'>
                <div className='bestScoreHead'>
                    <div className='bestScoreHeadSec1'>
                        <p className='count'>432</p>
                        <div style={{marginLeft:"20px"}}>
                            <p style={{fontWeight:"500"}}>Experience IQ</p>
                            <p style={{color:"grey"}}>4 Days streak this week</p>
                        </div>
                    </div>
                    <div className='dropDownPopular' style={{display:"flex", flexDirection:"row"}}>
                        <TrendingUpIcon style={{color:"grey"}}/>
                    </div>
                </div>
                <img className='chart2Img' src={chart2} alt="Logo" />
            </Paper>
            <Paper className='achievement'>
                <img className='chart2Img' src={poster1} alt="Logo" />
                <Paper className="nextBtn"> 
                    <NavigateNextIcon style={{color:"rgb(36, 36, 36)"}}/>
                </Paper>
            </Paper>
        </div>
    </div>
  )
}

export default Section1