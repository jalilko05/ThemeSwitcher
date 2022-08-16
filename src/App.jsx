import React, {useState} from "react";
import {GlobalStyles, lightTheme, darkTheme} from './themes.js'
import { ThemeProvider } from "styled-components";
import doom from './assets/images/Doom.png'
import {Container, Phone, Top,Bottom, FirstS, SecondS, ThirdS, Switcher, Cont} from "./styles.js";






function App(){

  const [style, setStyle] = useState('dark')


  const Right = () =>{
    style === 'dark' ? setStyle("light"): setStyle("dark")
  }
 
 return(
  <ThemeProvider theme={style === "dark" ? lightTheme : darkTheme}>

  <GlobalStyles>
<Phone>
<Container>
 <Top>
   <img src={doom} alt="" />
   <h1>Join The Doom World</h1>
 </Top>
 <Bottom>
   <FirstS>
     <div className="first">
       <h2>TOTAL GLORY KILLS</h2>
       <h3>2.9 BILLIONS</h3>
     </div>
   </FirstS>
   <SecondS className="second">
     <div className="second">
      <h2>EXTRA LIVES USED</h2>
      <h3>2.9 BILLIONS</h3>
     </div>
   </SecondS>
   <ThirdS className="third">
     <div className="third">
      <h2>TOTAL PLAYER DEATHS</h2>
      <h3>192 MILLION</h3>
     </div>
   </ThirdS>
 </Bottom>
 <Switcher>
   <Cont>
  
      <button onClick={Right}>Theme</button>
 
   </Cont>
 </Switcher>
 </Container>  
 </Phone>
</GlobalStyles>

  </ThemeProvider>
  )
}

export default App

