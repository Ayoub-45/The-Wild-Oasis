import styled from "styled-components";
import GlobalStyled from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Heading from "./ui/Heading";
import Input from "./ui/Input";
import Row from "./ui/Row";
const StyledApp = styled.div`
  background-color: beige;
  padding: 0.5rem;
  width: 50%;
  height: 50%;
  margin: auto;
`;

export default function App() {
  return (
    <>
      <GlobalStyled />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">Hello</Heading>
          <div>
            <Heading as="h2">Check in Check out</Heading>
            <Button size="medium" varition="primary" onClick={() => alert("check in")}>
              Check in
            </Button>
            <Button size="small" varition="secondary" onClick={() => alert("check out")}>Check out</Button>
          </div>
        </Row>
        <form>
          <Row>
            <Input placeholder="number of guests" />
            <Input placeholder="number of servers" />
          </Row>
        </form>
      </StyledApp>
    </>
  );
}
