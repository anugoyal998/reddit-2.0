import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
import { Toaster } from "react-hot-toast";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <div className="h-screen overflow-y-scroll bg-slate-200">
          <Toaster />
          <Header />
          <Component {...pageProps} />
        </div>
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
