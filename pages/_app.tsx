import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useContext } from "react";
import { LevelContext } from "../utils/LevelContext.js";

function MyApp({ Component, pageProps }: AppProps) {
  const level = useContext(LevelContext);
  return (
    <LevelContext.Provider value={3}>
      {" "}
      <ul>
        <li>
          <Link href="/">
            <a>Home - {level}</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About Us</a>
          </Link>
        </li>
      </ul>
      <Component {...pageProps} />
    </LevelContext.Provider>
  );
}

export default MyApp;
