import "tailwindcss/tailwind.css";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <div className="h-full bg-gray-800">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
