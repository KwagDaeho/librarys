import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  margin: 20px auto;
`;
const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);
const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;
  &:hover {
    color: red; // <Thing> when hovered
  }
  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }
  & + & {
    background: lime; // <Thing> next to <Thing> => <Thing> No.2
  }
  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }
  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;
export default function StyledComponents() {
  return (
    <div>
      <Wrapper>
        <Title>This is Styled-Components!</Title>
      </Wrapper>
      <>
        <Button
          onClick={() => {
            alert("Normal BTN");
          }}
        >
          Normal
        </Button>
        <Button
          onClick={() => {
            alert("Primary BTN");
          }}
          primary
        >
          Primary
        </Button>
        <TomatoButton>Tomato</TomatoButton>
        <br />
      </>
      <>
        <Button as="a" href="#">
          Link with Button styles
        </Button>
        <TomatoButton as="a" href="#">
          Link with Tomato Button styles
        </TomatoButton>
      </>
      <>
        <Button as={ReversedButton}>
          Custom Button with Normal Button styles
        </Button>
      </>
      <>
        <React.Fragment>
          <Thing>Hello world!</Thing>
          <Thing>How ya doing?</Thing>
          <Thing className="something">The sun is shining...</Thing>
          <div>Pretty nice day today.</div>
          <Thing>Don't you think?</Thing>
          <div className="something-else">
            <Thing>Splendid.</Thing>
          </div>
        </React.Fragment>
      </>
    </div>
  );
}
