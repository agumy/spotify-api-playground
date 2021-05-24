import { NextPage } from "next";
import { useEffect, useState } from "react";

function getHashParams() {
  var hashParams: Record<string, string> = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

const useHashParam = () => {
  const [state, setState] = useState<Record<string, string | undefined>>({});

  useEffect(() => {
    const hash = getHashParams();
    setState(hash);
  }, [globalThis?.location?.hash]);

  return state;
};

const Home: NextPage = () => {
  const { accessToken } = useHashParam();
  return (
    <div>
      <iframe
        src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
        width="300"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Home;
