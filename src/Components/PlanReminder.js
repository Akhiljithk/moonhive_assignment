import React from 'react'
import './PlanReminder.css'
import Paper from '@mui/material/Paper';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function PlanReminder() {
  return (
    <Paper className='planReminder'>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", color:"grey"}}>
         <AccessTimeIcon />
         <p style={{marginLeft:"8px"}}>Your subscription ends on <span style={{fontWeight:"500"}}>25 February 2015</span></p>
        </div>
        <p style={{cursor:"pointer", color:"gray"}}>Upgrade</p>
    </Paper>
  )
}

export default PlanReminder