// ./pages/_app.js
import '../styles/tailwind.css';
import Sidebar from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex">
      <div className="w-1/5 bg-white">
        <div>Sidebar</div>
      </div>
      <div className="w-4/5 bg-black">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
