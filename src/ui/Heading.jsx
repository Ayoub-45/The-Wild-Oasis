import { css,styled } from "styled-components"
const Heading=styled.h1`
${props=>props.as==="h1" && css`
font-size:32px;
font-weight: 700;
`}
${props=>props.as==="h2" && css`
    font-size:25px;
    font-weight:400;
`}
`
export default Heading