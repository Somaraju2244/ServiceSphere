// pages/_app.js
import Drift from '../components/drift';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Drift />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;