import React from 'react'

const Footer = () => {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
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
    }}><img src= "assets/images/logo.png" alt="logo"/>
        <img src= "assets/images/WeHelp.png" alt="logo"/>

        <p>WeHelp helps those in need of funds</p>
        </div>

        <div>
            <ul>
                <li></li>
            </ul>
        </div>
</div>

            </div>
            
        </div>
    )
}

export default Footer
