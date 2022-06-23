import Head from "next/head";
import Feed from "../components/Feed";
import Postbox from "../components/Postbox";
import { useRecoilState } from "recoil";
import searchListAtom from "../atoms/searchList.atom";
import { useEffect } from "react";

export default function Home(props) {
  const [searchList, setSearchList] = useRecoilState(searchListAtom);
  useEffect(() => {
    setSearchList(false);
  }, []);
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit 2.0</title>
      </Head>
      <Postbox />
      <div className="">
        <Feed />
      </div>
    </div>
  );
}
