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
                }}>WeHelp is a digital online platform for collecting donation and funds.</p>
                <Link to="/register" ><Button style={{
                    color: "white",
                    backgroundColor: "#fd6f68",
                    borderRadius: "5px",
                    marginLeft: "100px"
                }}>Donate Now</Button></Link>
            </div>

            <div style={{ marginRight: "50px",}}>
                <img src="assets/images/Hero'sPage.png " alt=" " style={{
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
                <img src="assets/images/aboutUs.png " alt=" " style={{
                    height: "400px",
                    marginTop: "50px"
                    //marginRight: "100px",
                }}/>
            </div>
            </div>
            
            <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
            }}>
                <div><h3>Categories</h3>
                <h1>Make an Impact, Make a Difference</h1>
                </div>
                <div style={{ marginRight: "50px",}}>
                <p>WeHelp is a digital online platform for collecting donation and funds</p>
            </div>
             <Link to="/register" ><Button style={{
                    color: "white",
                    backgroundColor: "#fd6f68",
                    borderRadius: "5px",
                    marginLeft: "100px"
                }}>Donate Now</Button></Link>
                <div style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row"
            }}>
                {/* To donate Card */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "400px",
                height: "351px",
                marginLeft: "100px",
                marginTop: "100px",
                background: "#5DADAA",
                borderRadius: "15px"
            }}>
            <div style={{
                justifyContent: "center",
                marginLeft: "20px",
                marginTop: "50px",
                //alignItems: "center"
                
            }}>
            <h3 style={{
                fontSize: "24px",
                color: "#f9f9f9",
            }}>To make your donations</h3>
            <p>click <Link to="/donate" style={{
                color: "#212121",
                 fontSize: "18px"
            }}>here</Link></p>
            </div>
            
            </div>
            {/* To volunteer Card */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                width: "400px",
                height: "351px",
                marginLeft: "310px",
                marginTop: "100px",
                marginRight: "100px",
                background: "#FD6F68",
                borderRadius: "15px"
            }}>
            <div style={{
                marginLeft: "20px",
                marginTop: "100px",
                // alignItems: "center"
            }}>
            <h3  style={{
                fontSize: "24px",
                color: "#f9f9f9",
            }} >To Volunteer with Us</h3>
            <p>click <Link to="/volunteer" style={{
                color: "#212121",
                 fontSize: "18px"
            }}>here</Link></p>
            </div>
            
            </div>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap row"
            }}>
              
            

            </div>
            </div>

            
            
        </div>
    )
}

export default Homepage

