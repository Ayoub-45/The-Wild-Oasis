import styled from "styled-components"
import GlobalStyled from "./styles/GlobalStyles";
import Button from "./ui/Button";
const StyledApp=styled.div`
background-color: beige;
padding:0.5rem;
width:50%;
height:50%;
margin:auto;
`;
const H1=styled.h1`
font-size:32px;
`


export default function App(){
  return (
    <>
    <GlobalStyled/>
    <StyledApp>
    <H1>Hello</H1>
    <Button onClick={()=>alert("check in")}>Check in</Button>
    <Button onClick={()=>alert("check out")}>Check out</Button>
    </StyledApp>
    </>
    )
}