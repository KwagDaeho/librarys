import React from "react";
import styled from "styled-components";

export default function StyledComponents() {
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
    </div>
  );
}
