import  styled  from "styled-components";



export const Phone = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 background:  #1e1e1e;
`


export const Container = styled.div`
width: 500px;
height: 900px;
border: 5px solid gray;
border-radius: 5px;
background: #716a4e;
`


export const Top = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin-top:30px;
border-bottom: 2px solid #4e3b35;
height: 400px;

img{
    width: 250px;
    height: 250px;
    border-radius: 50%;
    border: 3px solid #4e3b35;
}

h1{
  color: #1e1e1e;
  font-family: sans-serif;
  margin: 30px;
}
`


export const Bottom = styled.div`
 display: flex;
 height: 400px;
 align-items: center;
 flex-direction: column;
 justify-content: space-evenly;
 border-bottom: 2px solid #4e3b35;

`

export const FirstS = styled.div`
width: 400px;

    .first{
    background: #896409;
    color: #1e1e1e;
    border-radius: 15px;
    padding: 10px;
    height: 100px;
    cursor: default;
}
   
`
export const SecondS = styled.div`
width: 400px;
.second{
    background: #6c4b36;
    border-radius: 15px;
    color: #1e1e1e;
    padding: 10px;
    height: 100px;
    cursor: default;
}
`

export const ThirdS = styled.div`
width: 400px;
.third{
    background: #b45e33;
    border-radius: 15px;
    color: #1e1e1e;
    padding: 10px;
    height: 100px;
    cursor: default;
}
`

export const Switcher = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 15px 0;

`
export const Cont = styled.div`
    width: 50px;
    height: 25px;
    border: 1px solid #1e1e1e;
    border-radius: 15px;
`




