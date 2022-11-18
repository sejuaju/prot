import React, { useState } from "react";
import Layout from "../components/layout";
import Illustration from "../assets/illustration.png";
import Binance from "../assets/binance.png";


//Icons
import Chain from "../assets/icons/chain.svg";
import Coding from "../assets/icons/coding.svg";
import Decentralized from "../assets/icons/decentralized.svg";
import LowPrice from "../assets/icons/low-price.svg";
import Planet from "../assets/icons/planet-earth.svg";
import Scale from "../assets/icons/scale.svg";
import Shield from "../assets/icons/shield.svg";
import Sketch from "../assets/icons/sketch.svg";

// Icons
import Icon1 from "../assets/landingpage/icon1.png";
import Icon2 from "../assets/landingpage/icon2.png";
import Icon3 from "../assets/landingpage/icon3.png";
import Icon4 from "../assets/landingpage/icon4.png";
import Icon5 from "../assets/landingpage/icon5.png";
import Icon6 from "../assets/landingpage/icon6.png";

// Social Media
import discord from "../assets/landingpage/discord.svg";
import reddit from "../assets/landingpage/reddit.svg";
import telegram from "../assets/landingpage/telegram.svg";
import twitter from "../assets/landingpage/twitter.svg";
import medium from "../assets/landingpage/medium.svg";
import github from "../assets/landingpage/github.svg";

import { useNavigate } from "react-router-dom";

import SayHi from "../assets/sayhi.png";
function Landing() {
  const [rangeValue, setRangeValue] = useState(0);
  const navigate = useNavigate();

  const rangeHandler = (e) => {
    setRangeValue(e.target.value);
  };

  return (
    <Layout>     
      <div>
        <div className="container">
        <div class="col-6 col-md-4">
      <div className="landing-bg text-white"> 
      <div class="landing-bg-no-repeat bg-center">
     
      
       
      
                          
        {/* Section 1  */}  
        <div className="container mx-auto px-4 lg:px-0 flex flex-col max-w-screen-md justify-between items-center">
        <div className="container mx-auto px-4 lg:px-0 flex flex-col items-center">
            <div className="text-green text-[1.5rem]">
              <span className="text-gradient"> </span> <br />             
             
            </div>
            <div className="text-[1.2rem] mt-6">
            <p></p> 
             <div><p></p></div>
             <p>  </p>            
             </div>
            </div>
          </div>
       

                            
           {/* Section 2  */}   
        <div className="container mx-auto px-4 lg:px-0 flex flex-col max-w-screen-md justify-between items-center">
        <div className="container mx-auto px-4 lg:px-0 flex flex-col items-center">
            <div className="text-green text-[1.5rem]">
              <span className="text-gradient"> MORE WAYS TO BET.</span> <br />             
              MORE WAYS TO WIN.
            </div>
            <div className="text-[1.2rem] mt-6">
            <p>Qbett exchange is different because you bet against</p> 
             <div><p>fellow bettors so you can get better odds, set your own,</p></div>
             <p> trade world cup countries and even place bets </p>            
             </div>
            </div>
          </div>
        </div>

        {/* Section 3  */}
        
       
        {/* Section 4  */}                                    
                                         
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="text-center md:text-left p-5 rounded-md flex flex-col items-center md:items-start">
                <img className="Icon-1" src={Icon1} alt="" />               
             
              <div className="text-center md:text-left p-5 rounded-md flex flex-col items-center md:items-start">
                <img className="Icon-2" src={Icon2} alt="" />                
              </div>
              <div className="text-center md:text-left p-5 rounded-md flex flex-col items-center md:items-start">
                <img className="Icon-3" src={Icon3} alt="" />                
              </div> 
              <div className="text-center md:text-left p-5  rounded-md flex flex-col items-center md:items-start">
              <img className="Icon-4" src={Icon4} alt="" />               
              </div>             
              <div className="text-center md:text-left p-5  rounded-md flex flex-col items-center md:items-start">
              <img className="Icon-5" src={Icon5} alt="" />             
              </div>
              <div className="text-center md:text-left p-5  rounded-md flex flex-col items-center md:items-start">
              <img className="Icon-6" src={Icon6} alt="" />
              </div>
              </div>
              </div>
          </div>
          </div>
         
          <div class="col-6 col-md-4">       
         <div className="landing-bg2 text-white"> 



                  
  {/* Section 1  */}  
                      
     {/* Section 2  */}   
  <div className="container mx-auto px-4 lg:px-0 flex flex-col max-w-screen-md justify-between items-center">
  <div className="container mx-auto px-4 lg:px-0 flex flex-col items-center">
      <div className="text-green text-[1.5rem]">
        <span className="text-gradient"> </span> <br />             
       
      </div>
      <div className="text-[1.2rem] mt-6">
      <p></p> 
       <div><p></p></div>
       <p> </p>            
       </div>
      </div>
   
  </div>

  {/* Section 3  */}
 
  {/* Section 4  */}
  <div className="p-5 md:p-12 mt-24">
    <div className="flex flex-col space-y-5 lg:w-[40%]">                      
        <div>                           
      </div>
      
       
      </div>
    </div>
    </div>
    </div>
    </div>
    
               
{/* Footer  */} 
</div>    
  <footer className="container">
    <div>©2022 QBbetting. All Rights Reserved.</div>
  </footer>
  
</Layout>

);

}

export default Landing;
