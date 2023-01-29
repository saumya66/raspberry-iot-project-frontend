import React from "react";
import Script from "next/script";

const vr = () =>{
    return(
        <>
        {
            typeof window !== 'undefined' && <>
            <Script src="https://aframe.io/releases/0.8.0/aframe.min.js"></Script>
            <body>
                        <a-scene>
                            <a-text value="Hello, Virtual World!" geometry="primitive:plane">
                            </a-text>
                        </a-scene>
            </body></>
            }
        </>
    )
} 

export default vr