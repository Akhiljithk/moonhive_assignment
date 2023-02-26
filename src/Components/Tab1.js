import React from 'react'
import Section1 from './Section1';
import Section2 from './Section2';
import PlanReminder from './PlanReminder';

function Tab1() {
  return (
    <div style={{width:"70%", margin: "0 auto", maxWidth:"1076px"}}>
        <PlanReminder/>
        <Section1/>
        <Section2/>
    </div>
  )
}

export default Tab1

