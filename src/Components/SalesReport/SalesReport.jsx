import React, { useState } from 'react'
import './sales.css';
import {VscChevronRight} from 'react-icons/vsc'
import {TfiStatsUp} from 'react-icons/tfi'
import {RiBarChart2Line} from 'react-icons/ri'
import {TfiCrown} from 'react-icons/tfi'
import { CartesianGrid, Legend, Scatter, Tooltip, XAxis, YAxis, ZAxis,ScatterChart } from 'recharts';
import Design from '../Design/Design';
import ChartHeader from '../chartheader';

const SalesReport = () => {
  const [isPopup, setIspopup] = useState(false)
  const [isPopup2, setIspopup2] = useState(false)
  const data = [
    { x: "Jan ", y: 200, z: 100, fill: "#8884d8" },
    { x: "Feb ", y: 400, z: 400, fill: "#82ca9d" },
    { x: "Mar ", y: 300, z: 800, fill: "#FAE634" },
    { x: "Apr ", y: 800, z: 700, fill: "#0088FE" },
    { x: "May", y: 420, z: 1500, fill: "#FF505Dcc" },
    { x: "Jun", y: 750, z: 4500, fill: "#695DFBcc" },
    { x: "Jul ", y: 480, z: 500, fill: "#F9E001aa" },
    { x: "Aug ", y: 1100, z: 500, fill: "#FFA07A" },
    { x: "Sep ", y: 600, z: 100, fill: "#00CED1" },
    { x: "Oct ", y: 300, z: 400, fill: "#10FFFFcb" },
    { x: "Nov ", y: 450, z: 1800, fill: "#FAE634ba" },
    { x: "Dec ", y: 620, z: 450, fill: "#795DFBba" },
  ];
  
  
  return (
    <>
    
    <div className="app">
      <p>WSTFFRONT-END HACKATHON</p>
      <div>
        <div className='users-container'>

        
      <h3>All users</h3>
      <h6 style={{marginLeft:'20px', marginTop: '11px'}}>DETAIL</h6>
      <VscChevronRight className='arrow-icon' />
      
      </div>
      <h1>2,431,340</h1>
      </div>
     <div >
      <div className='icon-container'>
      <div className='icons1 color-1'><TfiStatsUp color='white' size='1.2rem'/></div>
      <div  onClick={()=> setIspopup2(!isPopup2)}><p>Total earning</p>
      <p className='number'>450,549</p>
      </div>
      </div>
      <div className='icon-container'>
      <div className='icons1 color-2'><TfiCrown color='white' size='1.2rem'/></div>
      <div onClick={()=> setIspopup(!isPopup)}><p>Sales</p>
      <p className='number'>1,205,677</p>
      </div>
      </div>
      <div className='icon-container'>
      <div className='icons1 color-3'><RiBarChart2Line color='white' size='1.2rem'/></div>
      <div><p>Purchase</p>
      <p className='number'>48,430,039</p>
      </div>
     </div>
     <div className='icon-wrapper'>

    <div style={{display:'flex'}}>
     <div className='no-progress-bar'>
      <span>27%</span>
     </div>
     <div style={{marginLeft:'10px'}}>
      <p>98,987</p>
      <p>Active users</p>
     </div>
     </div>
     <div style={{display:'flex'}}>
     <div className='no-progress-bar2'>
      <span>67%</span>
     </div>
     <div style={{marginLeft:'10px'}}>
      <p>22,1387</p>
      <p>New users</p>
     </div>
     </div>
     </div>
     </div>
    </div>
    {isPopup && (
      <div className='popup-wrapper'>
        
        <div>
        <ScatterChart
  width={753}
  height={400}
  style={{ background: "#FFFFFF" }}
  margin={{
    top: 20,
    right: 0,
    bottom: 0,
    left: 0,
  }}
>
<Legend content={<ChartHeader />} verticalAlign="top" />
      <CartesianGrid strokeDasharray="0" horizontal={false} stroke="#eee" />
      <XAxis dataKey="x" axisLine={false} tickLine={false} />
      <YAxis dataKey="y" tickCount="7" axisLine={false} tickLine={false} />
      <ZAxis dataKey="z" type="number" range={[100, 25044]} name="score" />
      <Tooltip cursor={{ strokeDasharray: "2 2" }} />

      <Scatter name="Scatter Chart" data={data} />
  
</ScatterChart>
        </div>
      </div>
    )}
{isPopup2 && (
  <Design isPopup2={isPopup2} setIspopup2={setIspopup2}  />
)}
    </>
  )
}

export default SalesReport