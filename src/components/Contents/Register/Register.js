import { Button, Input } from 'antd'
import React, {useState} from 'react'
import { app } from '../../../base'
import firebase from "firebase"
import { useHistory } from 'react-router'

const Register = () => {
  const hist = useHistory()
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const [toggle,setTogle] = useState(false)
  const [avatar, setAvatar] = useState("")

  const handleToggle = () => {
    setTogle(!toggle)
  }


  const SignUp = async() => {
    const signUp = await app.auth().createUserWithEmailAndPassword(email, password)

    await app.firestore().collection("users").doc(signUp.user.uid).set({
      name,
      email,
      password,
      first: name.charAt(0),
      avatar,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      createdBy: signUp.user.uid
    })

    setName("")
    setEmail("")
    setPassword("")


    hist.push('/')
  }

  const SignIn = async () => {
    await app.auth().signInWithEmailAndPassword(email, password)
    hist.push('/')
  }

  const pushUp = async() => {
    await app.firestore().collection("game").doc().set({
      name
    })
    setName("")
  }


  return (
   
   <div
   style={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      marginBottom:"20px",
      marginTop:"100px",
     
    }}
   >
     
   {
     toggle ? (
       
          <div style={{
                display: "flex",
                justifyContent: "center",
                width: "500px",
                height: "500px",
                marginLeft: "205px",
                marginTop: "100px",
                //boxShadow: "0px 8px 16px",
                borderRadius: "15px",
                background: "rgba(93, 173, 170, 0.07)"
       }}>
      <div
      style={{
        width:"300px",
        marginTop: "50px"
      }}
      >
        <div style={{
          //marginTop: "20px",
        }}><h2>Hello There</h2></div>
        <Input style={{
          marginTop: "20px"
        }}
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />
        <br/>
        <Input style={{
          marginTop: "20px"
        }}
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <br/>
        <Input style={{
          marginTop: "20px"
        }}
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <Button
        
        style={{
          marginTop:"50px",
          backgroundColor: "#FD6F68",
          color: "#f9f9f9"

        }}
        onClick={()=>{
          SignUp()
          pushUp()

        }}
        >Sign Up</Button>
        <div
        style={{
          display:"flex"
        }}
        >
          <div style={{
          marginTop: "20px"
        }}>Already have an Account</div>
          <div
           style={{
            display:"flex",
            color:"#Fd6F68",
            marginTop: "20px",
            marginLeft:"5px",
            cursor:"pointer",
            fontWeight:"bold"
          }}
          onClick={()=>{
            console.log("signed in")
            handleToggle()
          }}
          
          >Sign In here</div>
        </div>
      </div>
      </div>
    
     ):(
       <div style={{
                display: "flex",
                justifyContent: "center",
                width: "500px",
                height: "500px",
                marginLeft: "205px",
                marginTop: "20px",
                //boxShadow: "0px 8px 16px",
                borderRadius: "15px",
                background: "rgba(93, 173, 170, 0.07)"
       }}>
         
      <div
      style={{
         width:"300px"
      }}
      >
        <div style={{
          marginTop: "50px",
        }}><h2>Welcome Back</h2></div>

        
        <Input style={{
          marginTop: "50px"
        }}
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <br/>
        <Input style={{
          marginTop: "20px"
        }}
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <Button
         style={{
          color: "white",
           backgroundColor: "#fd6f68",
           borderRadius: "5px",
          marginBottom:"10px",
          marginTop:"50px"
        }}
        onClick={SignIn}
        >Sign In</Button>
        <div
        style={{
          display:"flex"
        }}
        >
          <div style={{
          marginTop: "20px"
        }}>Don't have an Account</div>
          <div
           style={{
            display:"flex",
            color:"#FD6F68",
            marginTop: "20px",
            marginLeft:"5px",
            cursor:"pointer",
            fontWeight:"bold"
          }}
          onClick={()=>{
            console.log("signed in")
            handleToggle()
          }}
          
          >Sign Up here</div>
        </div>
      </div>
    </div>
     )
   }
   </div>
  )
}

export default Register
