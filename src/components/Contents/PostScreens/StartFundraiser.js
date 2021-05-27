import { Button, Input } from 'antd'
import React,{useState, useEffect} from 'react'
import {app} from "../../../base"
import firebase from "firebase"
import { useContext } from 'react'
import { AuthContext } from '../../Redux/reducers/AuthState'
import { useHistory } from 'react-router'

const Post = () => {
  const hist = useHistory()
  const {currentUser} = useContext(AuthContext)
  const [title, setTitle] = useState('')
  const [brife, setBrife] = useState('')
  const [detail, setDetail] = useState('')
  const [amountRaise, setAmountRaise] = useState('')
  const [amountLeft, setAmountLeft] = useState('')
  const [amount, setAmount] = useState('')
  const [coverImage, setCoverImage] = useState(null)


  const uploadImage = async(e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setCoverImage( await fileRef.getDownloadURL())
  }

  const makePost = async() => {
    
  const newUser = await app.auth().currentUser
    if(newUser){
      await app.firestore().collection("post").doc().set({
        createdBy: newUser.uid,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        amount,
        amountLeft,
        amountRaise, 
        detail, 
        brife,
        coverImage,
        title
        
      })
      hist.push('/')
    }
  }


  return (
    <div
    style={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      marginTop:"20px"
    }}
    >
      <div
      style={{
        display:"flex",
        //flexDirection:"column",
        justifyContent:"center",
         width: "500px",
          height: "500px",
          marginLeft: "205px",
           marginTop: "50px",
          //boxShadow: "0px 8px 16px",
          borderRadius: "15px",
          background: "rgba(93, 173, 170, 0.07)"
      }}
      >
      
      <div style={{
         justifyContent: "center",
         marginLeft: "50px",
      }}>
        <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
      }}> <h2 style={{
        fontWeight: "bold",
      }}>Enter your Goal</h2></div>
        <Input
        style={{
          //margin:"10px 0",
          justifyContent: "center",
          marginTop: "20px",
          width: "300px"
        }}
        type="file"

          onChange={uploadImage}
        />
        <Input
        style={{
          margin:"10px 0",
          width: "300px",
          color: "#212121"
        }}
          placeholder=" Campaign Title"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />
        <Input
        style={{
          margin:"10px 0",
          width: "300px"
        }}
          placeholder="Amount"
          value={amount}
          onChange={(e)=>{
            setAmount(e.target.value)
          }}
        />
        <Input
        style={{
          margin:"10px 0",
          width: "300px",
          height: "80px"
        }}
          placeholder="Tell your Story"
          value={brife}
          onChange={(e)=>{
            setBrife(e.target.value)
          }}
        />
        <Input
        style={{
          margin:"10px 0",
          width: "300px"
        }}
          placeholder="Tell us in detail how should people help"
          value={detail}
          onChange={(e)=>{
            setDetail(e.target.value)
          }}
        />

<Button
style={{
  width:"300px",
  height:"50px"
}}
type="primary"
danger
onClick={makePost}
>POST REQUEST</Button>

      </div>
      </div>
    </div>
  )
}

export default Post
