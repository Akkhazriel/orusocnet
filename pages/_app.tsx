import type { AppProps } from 'next/app';
import '../styles/global.css';
import Layout from '../components/layout';

/**
 * Корневой компонент приложения Oru с Layout
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
