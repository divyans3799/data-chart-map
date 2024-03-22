import React from 'react'
import { CartesianGrid, Legend, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import CircleProgressBar from '../CircleProgressBar';
import "./design.css"
import {AiOutlineEye} from "react-icons/ai"
import {FcBarChart} from "react-icons/fc"
import {RiCopperDiamondLine} from "react-icons/ri"


const Design = ({isPopup2, setIspopup2}) => {
  const data = [
    { x: " ", y: 1000, z: 100, fill: "#030092" },
    { x: " ", y: 400, z: 400, fill: "#82ca9d" },
    { x: " ", y: 300, z: 800, fill: "#C500F6" },
    { x: " ", y: 800, z: 700, fill: "#0088FE" },
    { x: "", y: 420, z: 1500, fill: "#FF505Dcc" },
    { x: "", y: 750, z: 4500, fill: "#695DFBcc" },
    { x: "", y: 480, z: 500, fill: "#F9E001aa" },
    { x: "", y: 1100, z: 500, fill: "#FFA07A" },
    { x: "", y: 600, z: 100, fill: "#00CED1" },
    { x: " ", y: 300, z: 400, fill: "#10FFFFcb" },
    { x: " ", y: 450, z: 1800, fill: "#FAE634ba" },
    { x: " ", y: 620, z: 450, fill: "#795DFBba" },
    { x: " ", y: 620, z: 450, fill: "#795DFBba" },
  ];
  return (
    <div className='side-bar'>

    <div className='designcontainer'>
        <h4 className='close' onClick={()=> setIspopup2(false)}>X</h4>
      <h2 className='text-center'>Design faster</h2>
      <div className='container-section-one'>
      <div className="outter">
        <div className="inner1">
          <CircleProgressBar
            progress="62"
            strokeWidth="3"
            radius="40"
            color={"#FF708B"}
          />
        </div>
        <div className="inner2">
          <CircleProgressBar
            progress="85"
            strokeWidth="3"
            radius="25"
            color={"#FFBA69"}
          />
        </div>
        <div className="inner3"></div>

      </div>
      <div className='text-design'>
        <p>total earning</p>
        <h6>$12,875  2%</h6>
        <p>Compared to $21,504 last year</p>
      
        <div>
          <span>Presntation</span>
          <span style={{marginLeft:'10px'}}>862</span>
        </div>
        <div>
          <span>Development</span>
          <span style={{marginLeft:'10px'}}>753</span>
        </div>
        <div>
          <span>Research</span>
          <span style={{marginLeft:'10px'}}>553</span>
        </div>

      
      </div>
      
    </div>
    <div className='container2'>
      <p>total earning <h4>$12,875</h4><p>Compared to $21,490 last year</p></p>
    <p>Sales<h4>$43,123</h4><p>Compared to $21,490 last year</p></p>
    </div>
    <div className='container3'>
      <div>
        <span>Travel</span><span className='m-3'>567</span>
      </div>
      <div>
        <span>Presentation</span><span className='m-3'>567</span>
      </div>
      <div>
        <span>Business</span><span className='m-3'>567</span>
      </div>

    </div>
    </div>
    
    <div className='mapContainer'>
      <div className='button'>
        <div className='time-container'>
            <span>1W</span>
            <span>1M</span>
            <span className='month'>3M</span>
            <span>1Y</span>
            <span>ALL</span>
        </div>
      </div>
      <div className='map-numbers-section' >
        <div className='number-one'>
          <span>
            <RiCopperDiamondLine />
          </span>
          <span>TREN GOODS</span>
          <h3>204</h3>
        </div>
        <div className='number-one'>
          <span><AiOutlineEye /></span>
          <span>SHOPPING VIEWS</span>
          <h3>65,540</h3>
        </div>
        <div className='number-one'>
          <span><FcBarChart /></span>
          <span>RiCopperDiamondLine</span>
          <h3>324</h3>
        </div>
      </div>
    <ScatterChart
  width={953}
  height={700}
  style={{ background: "#b9c0e3" }}
  margin={{
    top:10,
    right: 0,
    bottom: 0,
    left: 0,
  }}
>
<Legend verticalAlign="top" />
      <CartesianGrid strokeDasharray="1" horizontal={false} />
      <XAxis dataKey="x" axisLine={false} tickLine={false} />
      <YAxis dataKey="y"  axisLine={false} tickLine={false} hide={true} />
      <ZAxis dataKey="z" type="number" range={[4000, 25044]} name="score" />
      <Tooltip cursor={{ strokeDasharray: "2 2" }} />

      <Scatter name="Scatter Chart" data={data} />
  
</ScatterChart>
    </div>
    </div>
  )
}

export default Design