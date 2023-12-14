import { css } from '@emotion/react';

const head = css`
  text-align: center;
`

interface HeadingProps {
  text: string;
}
const Heading = ({text}:HeadingProps) => {
  return (
    <>
      <h1 css={head}>{text}</h1>
    </>
  )
};

export default Heading;