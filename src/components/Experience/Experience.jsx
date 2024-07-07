import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
   <>
   
   <h1 style={{textAlign:"center",fontSize:"30px"}}>Helping a local</h1>
      <h2 style={{color:"green",textAlign:"center",fontSize:"30px"}}>Buisness reinvent itself</h2>
      <p style={{color:"gray",textAlign:"center"}}>We reached here with our hard work and dedication</p>
    <div className="experience" id='experience'>
      
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2,245,341+</div>
        <span  style={{color: darkMode?'white':''}}>Members </span>
        
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>46,328+</div>
        <span  style={{color: darkMode?'white':''}}>clubs </span>
       
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>828,828+</div>
        <span  style={{color: darkMode?'white':''}}>Event Booking </span>
       
      </div>
    </div>
    </>
  );
};

export default Experience;
