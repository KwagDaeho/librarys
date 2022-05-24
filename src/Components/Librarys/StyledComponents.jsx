import React, { useState } from "react";
import styled, {
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} from "styled-components";

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

const Input = styled.input.attrs((props) => ({
  type: "text",
}))`
  width: 220px;
  border: 2px solid palevioletred;
  margin: ${(props) => props.size};
  padding: ${(props) => props.size};
  box-sizing: border-box;
`;

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

// Define our button, but with the use of props.theme this time
const ButtonTheme = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.color};
  border: 2px solid ${(props) => props.theme.borderColor};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
ButtonTheme.defaultProps = {
  theme: {
    color: "red",
    borderColor: "black",
  },
};
// Define what props.theme will look like

const theme0 = {
  color: "red",
  borderColor: "black",
};
const theme1 = {
  color: "green",
  borderColor: "orange",
};
const theme2 = {
  color: "aqua",
  borderColor: "pink",
};
const GlobalStyle = createGlobalStyle`
button{
  background-color: pink;
}
`;
export default function StyledComponents() {
  const [myTheme, setMyTheme] = useState(theme0);
  return (
    <div>
      <Wrapper>
        <Title>It is Styled Components.</Title>
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
          <Thing>Dont you think?</Thing>
          <div className="something-else">
            <Thing>Splendid.</Thing>
          </div>
        </React.Fragment>
      </>
      <div>
        <Input placeholder="A bigger text input" size="2em" />
        {/* Notice we can still use the size attr from Input */}
        <PasswordInput placeholder="A bigger password input" size="2em" />
      </div>
      <>
        <Rotate>&lt; 💅🏾 &gt;</Rotate>
      </>
      <div>
        <>
          <ThemeProvider theme={theme0}>
            <ButtonTheme>Normal</ButtonTheme>
          </ThemeProvider>
          <ThemeProvider theme={theme1}>
            <ButtonTheme>Themed 1</ButtonTheme>
          </ThemeProvider>
          <ThemeProvider theme={theme2}>
            <ButtonTheme>Themed 2</ButtonTheme>
          </ThemeProvider>
        </>
        <div>
          <button
            onClick={() => {
              setMyTheme(theme0);
            }}
          >
            Change theme0
          </button>
          <button
            onClick={() => {
              setMyTheme(theme1);
            }}
          >
            Change theme1
          </button>
          <button
            onClick={() => {
              setMyTheme(theme2);
            }}
          >
            Change theme2
          </button>
          <ThemeProvider theme={myTheme}>
            <ButtonTheme>Change This</ButtonTheme>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
