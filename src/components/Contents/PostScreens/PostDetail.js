import { Button, Input } from 'antd'
import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { app } from '../../../base'
import { usePaystackPayment } from 'react-paystack';
import firebase from 'firebase'
import moment from "moment"
import WhoPosted from './WhoPosted';
import WhoCommented from './WhoCommented';






const MakePayment = () => {
  const {id} = useParams()
  const [amount, setAmount] = useState("")



  const paymentUpdate = async() => {
    await app.firestore().collection("post").doc(id).update({
      amountRaise: parseInt(amount),
      // totalAmount: amountRaise
    })
  }


  // you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
  paymentUpdate()
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log('closed')
}

const config = {
  reference: (new Date()).getTime(),
  email: "user@example.com",
  amount: amount,
  publicKey: 'pk_test_d632bf4b9aa1e74745eb158cec8034961dc13b18',
};
    const initializePayment = usePaystackPayment(config);

    
    return (
      <div >
        <div
        style={{
          margin:"10px",
          fontWeight:"bold"
        }}
        >Amount Entered: {
          amount === "" ? 0 : parseInt(amount) / 100
        }</div>

      <Input  
        placeholder="How much would you love to Donate"
        style={{
          width: "400px",
          marginTop:"10px"
        }}
        value={amount}
        onChange={(e)=>{
          setAmount(e.target.value)
        }}
       />

          <Button 
          type="primary"
          danger
          style={{
           color: "white",
           backgroundColor: "#fd6f68",
           borderRadius: "5px",
           marginLeft: "50px",
           marginTop: "20px",
           
         }}
          onClick={() => {
              initializePayment(onSuccess, onClose)
          }}>Donate</Button>
      </div>
    );
};




const PostDetail = () => {
  const {id} = useParams()
  const [post, setPost] = useState([])
  const[comment, setComment] = useState('')
  const [viewComment, setViewComment] =useState([])
  
  const makeComment = async() => {
  const newUser = app.auth().currentUser
  if(newUser){
    await app.firestore().collection("post").doc(id).collection("comments").doc().set({
      comment,
      createdBy: newUser.uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setComment("")
  }
  }
  
const viewComments = async() => {
  await app.firestore().collection("post").doc(id).collection("comments").onSnapshot(snapshot => {
    const r = []
    snapshot.forEach(doc => {
      r.push({...doc.data(), id: doc.id})
    })
    setViewComment(r)
  })
}

    const viewPost = async() => {
      await app.firestore().collection("post").doc(id).get()
      .then((user)=>(
        setPost(user.data())
      ))
      
    }
  
    useEffect(()=>{
      viewPost()
      viewComments()
    }, [])
  
  

  return (
    <div style={{
                display: "flex",
                justifyContent: "center",
                width: "800px",
                height: "900px",
                marginLeft: "205px",
                marginTop: "50px",
                //boxShadow: "0px 8px 16px",
                borderRadius: "15px",
                background: "rgba(93, 173, 170, 0.07)"
       }}>
    <div
    style={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center",
      marginTop:"30px",
      marginLeft: "50px",
    }}
    >
      <div>
      
        <img
          src={post && post.coverImage}
          style={{
            justifyContent: "center",
            width:"300px",
            height:"300px",
            objectFit:"cover",
            marginTop:"50px"
          }}
        />
        <div
        style={{
          padding:"10px 10px",
          marginTop: "20px"


        }}
        >
          {post && post.detail}
        </div>
        <div
        style={{
          display:"flex",
          justifyContent:"space-between"
        }}
        >
        <div
         style={{
           marginTop:"20px",
           fontWeight:"bold",

         }}
         >Amount to Raise:  #{post && post.amount} </div>

        <div
        style={{
           marginTop:"20px",
           //fontWeight:"bold",
           //display:"flex",
           //justifyContent:"center",
           //width:"100%",
          //  fontSize:"18px"

         }}
         >Amount to Raised so far:  #{post && post.amountRaise/100 }</div>
        </div>
         <div
         style={{
           marginTop:"20px",
           fontWeight:"bold",
           display:"flex",
           //justifyContent:"center",
           //width:"100%",
           fontSize:"20px"

         }}
         >Amount to Left:  # {post.amount -  (post && ( post.amountRaise + post.totalAmount)/100)   }</div>
         <div

         >Total Amount Raise:  #{post && ( post.amountRaise + post.totalAmount)/100 }</div>


<MakePayment />
<div
style={{
  marginTop:"20px",
  marginBottom:"100px",

}}
>
  <div
  style={{
    marginBottom:"10px",
    display:"flex",
    //justifyContent:"center",
    fontWeight:"bold",
    textTransform:"uppercase"
  }}
  >Add Feedback or Comment</div>
  <Input style={{
    width: "300px",
    height: "100px"
  }}
    placeholder="Place a comment"
    value={comment}
    onChange={(e)=>{
      setComment(e.target.value)
    }}
  />
 <div
  style={{
    display:"flex",
    // width:"100%",
    //flexDirection:"row-reverse",
    marginTop:"10px"
  }}
 >
 <Button style={{
   marginLeft: "100px",
   marginTop: "20px"
 }}
  type="primary"
 onClick={makeComment}
  >Add Comment</Button>
</div>

<div
 style={{
   
    marginTop:"15px"
  }}
>
  {
    viewComment.map(({createdAt, createdBy, comment, id})=>(
      <div key={id}
      style={{
        display:"flex"
      }}
      > 
      <WhoCommented id={id} createdBy={createdBy} />
       <div
       style={{
         display:"flex",
         flexDirection:"column",
        //  alignItems:"center",
        justifyContent:"center",
        marginLeft:"20px"
       }}
       >
       <div> {comment} </div>
        <div
        style={{
          fontWeight:"bold",
          fontSize:"12px"
        }}
        > {moment(createdAt.toDate()).fromNow()} </div>
         </div>
        
       </div>
    ))
  }
</div>
 </div>
      </div>
     <div>
   </div>
  </div>
  </div>
  )
}

export default PostDetail
