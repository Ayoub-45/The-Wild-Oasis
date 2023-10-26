import styled from "styled-components"
import GlobalStyled from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading"
import Input from "./ui/Input"
const StyledApp=styled.div`
background-color: beige;
padding:0.5rem;
width:50%;
height:50%;
margin:auto;
`;



export default function App(){
  return (
    <>
    <GlobalStyled/>
    <StyledApp>
    <Heading as="h1">Hello</Heading>
    <Heading as="h2">Check in Check out</Heading>
    <Button onClick={()=>alert("check in")}>Check in</Button>
    <Button onClick={()=>alert("check out")}>Check out</Button>
    <Input placeholder="number of guests"/>
    </StyledApp>
    </>
    )
}