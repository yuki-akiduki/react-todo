import { ReactNode } from 'react';
import { css } from '@emotion/react';
type Props = { children: ReactNode };

const wrapper = css`
  margin-top: 50px;
  width: 100%;
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
`;

const Layout = ({children}: Props) => {
  return (
    <>
      <div css={wrapper}>
        {children}
      </div>
    </>
  )
};

export default Layout;