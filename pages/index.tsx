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
  const [state, setState] = useState<Record<string, string>>({});

  useEffect(() => {
    const hash = getHashParams();
    setState(hash);
  }, [globalThis?.location?.hash]);

  return state;
};

const Home: NextPage = () => {
  const hashParam = useHashParam();
  console.log(hashParam);
  return <div />;
};

export default Home;
