/** @jsxImportSource @emotion/react */
import { css, Global, keyframes, ClassNames } from "@emotion/react";
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
const paragraph = css`
  color: turquoise;
  a {
    border-bottom: 1px solid currentColor;
    cursor: pointer;
  }
  header & {
    color: green;
    a {
      border-bottom-color: #f90;
    }
  }
`;
const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;
let SomeComponent2 = (props) => (
  <div className={props.wrapperClassName}>
    in the wrapper!
    <div className={props.className}>{props.children}</div>
  </div>
);

export default function Emotion() {
  return (
    <>
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
        <P>This is My P Tag</P>
        <ArticleText>
          This is My ArticleText Tag.
          <br />
          This is Overriding My P Tag
        </ArticleText>
      </div>
      <div>
        <header>
          <p css={paragraph}>
            This is green since it's inside a header.
            <br />
            <a>This Text is is "a" tag in header</a>
          </p>
        </header>
        <p css={paragraph}>
          This is turquoise since it's not inside a header.
          <br />
          <a>This Text is is "a" tag</a>
        </p>
      </div>
      <div>
        <Global
          styles={css`
            .some-class {
              color: hotpink !important;
            }
          `}
        />
        <Global
          styles={{
            ".some-class": {
              fontSize: 50,
              textAlign: "center",
            },
          }}
        />
        <div className="some-class">This is some-text.</div>
      </div>
      <div
        className="some-class"
        css={css`
          animation: ${bounce} 1s ease infinite;
        `}
      >
        some bouncing text!
      </div>
      <ClassNames>
        {({ css, cx }) => (
          <SomeComponent2
            wrapperClassName={css({ color: "green" })}
            className={css`
              color: hotpink;
            `}
          >
            from children!!
          </SomeComponent2>
        )}
      </ClassNames>
    </>
  );
}
