import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const Footer = () => {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            width: "100%",
            height: "300px",
            background: "rgba(93,173,170,0.25)",
            opacity: 1,
            position: "absolute",
            marginTop: "100px",
            marginLeft: "0px",
            overflow: "hidden"
        }}>
            <div style={{
                display: "flex",
                flexDirection: "row",
            }}>
<div style={{
    display: "flex",
    flexDirection: "column",
}}>
    <div style={{
        marginTop: "20px",
        marginLeft: "50px",
    }}><img src= "../images/wehelplogo.png" alt="logo"/>
        <img src= "../images/WeHelp.png" alt="logo"/>

        <p>WeHelp is an digital online platform for <br/>
        colllecting donation to be distributed to <br/> people in need. We build strength, <br/> stability and self reliance through donation</p>
        </div>

         <div className="icons-list"
        style={{
            marginLeft: "50px",
            justifyContent: "space-between",
        }}>
             <IconFont type="icon-facebook"  />
            <IconFont type="icon-twitter" style={{
                
                marginLeft: "20px"}}/>


        </div>
</div>

            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "50px",
                marginLeft: "100px",
            }}>
                <h3 style={{
                    fontWeight: "bold"
                }}>Menu</h3>
                <p>Donation</p>
                 <p>Features</p>
                  <p>Category</p>
                   <p>About Us</p>

            </div>
            
            
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "50px",
                marginLeft: "100px",
            }}>
                <h3 style={{
                    fontWeight: "bold"
                }}>Categories</h3>
                <p>Donation</p>
                 <p>Features</p>
                  <p>Category</p>
                   <p>About Us</p>

            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "50px",
                marginLeft: "100px",
            }}>
                <h3 style={{
                    fontWeight: "bold"
                }}>About Us</h3>
                <p>Donation</p>
                 <p>Features</p>
                  <p>Category</p>
                   <p>About Us</p>

            </div>
            </div>

            
            
        
    )
}

export default Footer
