import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
           
        }}>
            <div style={{
                flexDirection: "row",
                marginTop: "50px"
            }}>
                <div style={{
                    marginLeft: "100px"
                }}>
                    <h1>Make Someone Happy <br/> by Giving From Yours</h1>
                </div>
                <p style={{
                    marginLeft: "100px"
                }}>WWeHelp is an digital online platform for <br/>
        colllecting donation to be distributed to <br/> people in need. We build strength, <br/> stability and self reliance through donation</p>
                <Link to="/register" ><Button style={{
                    color: "white",
                    backgroundColor: "#fd6f68",
                    borderRadius: "5px",
                    marginLeft: "100px"
                }}>Donate Now</Button></Link>
            </div>

            <div style={{ marginRight: "50px",}}>
                <img src="../images/Hero'sPage.png " alt=" " style={{
                    height: "500px",
                    //marginRight: "100px",
                }}/>
            </div>

            <div style={{
                // display: "flex",
                // justifyContent: "center",
                flexDirection: "column",
            }}>
                <div><h3>About us</h3>
                <h1>More People, More Impact</h1>
                </div>
                <div style={{ marginRight: "50px",}}>
                <img src="../images/aboutUs.png " alt=" " style={{
                    height: "400px",
                    marginTop: "50px"
                    //marginRight: "100px",
                }}/>
            </div>
            </div>
            
            

            
            
        </div>
    )
}

export default Homepage

