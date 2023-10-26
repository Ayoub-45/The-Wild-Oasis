import styled from "styled-components"
const Button=styled.button`
  color: white;
  background-color: brown;
  padding:1.5rem;
  font-size: 30px;
  border:none;
  border-radius: 2rem;
  
`
const StyledApp=styled.div`
background-color: beige;
padding:0.5rem;
width:50%;
height:50%;
margin:auto;
`;
const H1=styled.h1`
font-size:32px
`


export default function App(){
  return (
  <StyledApp>
  <H1>Hello</H1>
  <Button onClick={()=>alert("check out")}>Check out</Button>
  </StyledApp>)
}