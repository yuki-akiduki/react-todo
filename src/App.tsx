import emotionReset from "emotion-reset";
import { Global,css } from '@emotion/react';
import Todo from './components/Todo';
import Layout from './layout/Layout';
const App = ()  => {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          li {
            list-style: none;
          }
        `}
      />
      <Layout>
        <Todo />
      </Layout>
    </>
  );
}

export default App
