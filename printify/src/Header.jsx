import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {HiMenuAlt2,HiSearch} from "react-icons/hi"
import {PiEnvelopeLight} from "react-icons/pi"
import {VscBellDot} from "react-icons/vsc"
import {GoUnread} from "react-icons/go"
import SearchInput from "react-search-input"
import NotificationBadge,{Effect} from "react-notification-badge"
import Avatar from "react-avatar"

import "./Header.css"

export default function Header(){


    return <div style={{display:"flex",width:"100%",height:"100%"}}>
          <div id="sortbar" style={{flex:.5,display:"flex",justifyContent:"center",alignItems:"center"}}>
               <HiMenuAlt2 color="rgb(255 133 34)" fontSize={"2vw"}/>               
          </div>
          <div id="searchbar" style={{flex:9,display:"flex",flexDirection:"row-reverse",alignItems:"center"}}>
            <div style={{display:"flex",height:"6vh",width:"20vw",backgroundColor:"rgb(240 240 247)",borderRadius:"36px"}}>
            <input placeholder=" Search here..." style={{fontWeight:"bold",color:"rgb(175 176 179)",border:0,borderRadius:"36px",background:"rgb(240 240 247)",outline:"0px",textAlign:"left"}}/>
            <div style={{flex:.5,display:"flex",alignItems:"center",justifyContent:"center"}}><HiSearch/></div>
            </div>
          
          </div>
          <div id="infobar" style={{flex:3,display:"flex"}}>
              
          <div className="message" style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center",paddingLeft:"3vw"}}>           
              <GoUnread className="message" style={{color:"#ccc",fontSize:"2vw"}}></GoUnread>
              </div>
              
              <div className="message" style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center",paddingLeft:"3vw"}}>           
                  <VscBellDot className="message" style={{color:"#ccc",fontSize:"2vw"}}></VscBellDot>
                  {/* <NotificationBadge  count={1} Effect={Effect.Scale}/>               */}
              </div>

              <div className="message" style={{display:"flex",flex:1,justifyContent:"center",alignItems:"center",paddingLeft:"3vw"}}>           
                       <Avatar src="src/assets/avatar.jpg"></Avatar>
                        {/* <img alt="dsfsdfssdf" src="src/assets/avatar.jpg"></img> */}
                       
              </div>


            
          </div>
    </div>
}