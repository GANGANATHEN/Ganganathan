import React, { useContext, useEffect } from 'react'
import {userText} from "./home"

const contact = () => {
    console.log("userText",userText);
    
    const text = useContext(userText)
    console.log("text",text);
    
    useEffect(() => {
      console.log("i'm alive")
      // You can fetch and set the theme here if needed
    }, [text]);
  return (
    <div>
      hlo contact {text}
    </div>
  )
}

export default contact
