import React from "react";
import discordText from "../assets/discordText.png";
import discord from "../assets/discord.png";

export default function discordInvite(){
    return (
        // <div className="iconRotate">
        //   <a href="#">
        //   <img src={discordText} alt="super1" />
        //   </a>
        // </div>

            <a href="#">
                <div className="discordLogo" >
                    <img className="discordImg" src={discord} alt="discordLogo" />
                </div>
                <div className="iconRotate">
                    <img src={discordText} alt="discordText" />
                </div>    
            </a>
        
        
      );
}