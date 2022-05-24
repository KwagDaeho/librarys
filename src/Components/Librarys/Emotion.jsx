/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const color = "white";
const Button01 = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: ${color};
  }
`;
const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

const anotherStyle = css({
  textDecoration: "underline",
});

const AnotherComponent = () => (
  <div css={anotherStyle}>Some text with an underline.</div>
);

const myStyle = css({
  color: "#f90",
  fontSize: "20px",
});

const MyComponent = () => (
  <div css={[myStyle, anotherStyle]}>This is my component</div>
);

const P = (props) => (
  <p
    css={{
      margin: 10,
      padding: "8px 20px",
      fontSize: 12,
      lineHeight: "1.5",
      fontFamily: "Sans-Serif",
      color: "black",
      background: "#ccc",
    }}
    {...props} // <- props contains the `className` prop
  />
);
const ArticleText = (props) => (
  <P
    css={{
      fontSize: 16,
      fontFamily: "Georgia, serif",
      color: "#fff",
      background: "#aaa",
    }}
    {...props} // <- props contains the `className` prop
  />
);
export default function Emotion() {
  return (
    <div>
      <div
        css={css`
          padding: 32px;
          background-color: hotpink;
          font-size: 24px;
          border-radius: 4px;
          &:hover {
            color: ${color};
          }
        `}
      >
        Hover to change color.
      </div>
      <br></br>
      <Button01>button01</Button01>
      <div>
        <SomeComponent>
          <AnotherComponent />
        </SomeComponent>
        <AnotherComponent />
        <MyComponent />
        <P>PPPPP</P>
        <ArticleText>My Article</ArticleText>
      </div>
    </div>
  );
}
