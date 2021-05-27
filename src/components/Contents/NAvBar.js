
import { Button } from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { app } from '../../base'
import { AuthContext } from '../Redux/reducers/AuthState'
//import img from '../../../public/assets/images/WeHelpLogo.png'

//This is the navbar
const NavBar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div>
      <Header
      style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        background: "none"
      }}
      >
        <div><img src="" alt="logo1"
        style={{
          width: "100px",
          height: "50px",
          objectFit: "contain"
        }}
        />
        <img src= "assets/images/WeHelp.png" alt="logo"/>
        </div>

        <Link
       to="/"
       >
       <div
       style={{
         color: "#212121"
       }}
       
       >Home</div>
       </Link>

      {
        currentUser ? (
       //Link for viewing profile(Can only be viewed when logged in as a User)     
       <Link
       to="/profile"
       >
       <div
       style={{
         color: "#212121"
       }}
       
       >Profile</div>
       </Link>

       // Link for seeing what user Posted      
        ): null
      }
        
       <Link
       to="/newsfeed"
       >
       <div
       style={{
         color: "#212121"
       }}
       
       >NewsFeed</div>
       </Link>

       <Link
        to="/startfundraiser"
       >
       <div
       style={{
         color: "#212121"
       }}
      
       >Start Fundraising</div>
       </Link>

             
       {
         currentUser ? (
//link to sign in (only when you are signed in can you make a fundraise request)
          <Link
          to="/startfundraiser"
         >
         <Button
         type="primary"
         danger
         style={{
           color: "white",
           background: "#fd6f68",
           borderRadius: "5px",
         }}
        onClick={()=>{
          app.auth().signOut()
        }}
         >LogOut</Button>
         </Link>
         ):(

          <Link
          to="/register"
         >
         <Button
          
         style={{
           color: "white",
           backgroundColor: "#fd6f68",
           borderRadius: "5px",
           
         }}
        
         >Sign In</Button>
         </Link>
         )
       }
      </Header>
    </div>
  )
}

export default NavBar
