import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { debounce } from "lodash";
import axios from "axios";
import SearchList from "./SearchList";
import { useRecoilState } from "recoil";
import searchListAtom from "../atoms/searchList.atom";

function Header() {
  const { data: session } = useSession();
  const [searchPosts, setSearchPosts] = useState([]);
  const [searchList, setSearchList] = useRecoilState(searchListAtom);
  const handleSearchChange = useCallback(
    debounce(async (e) => {
      if (e.target.value) setSearchList(true);
      else setSearchList(false);
      if (e.target.value) {
        const data = await axios.post("/api/post/search", {
          search: e.target.value,
        });
        setSearchPosts(data?.data);
      }
    }, 500),
    []
  );

  useEffect(() => {
    return () => {
      setSearchList(false);
    };
  }, []);

  return (
    <div>
      <div className="sticky top-0 z-50 flex justify-between bg-white px-4 py-2 shadow-sm">
        <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
          <Link href="/">
            <Image
              src="https://links.papareact.com/fqy"
              layout="fill"
              objectFit="contain"
            />
          </Link>
        </div>

        <form className="hidden sm:flex items-center space-x-2 rounded-sm border border-gray-200 bg-gray-100 px-3 py-1 w-[250px] sm:w-[400px] relative">
          <SearchIcon className="h-6 w-6 text-gray-400" />
          <input
            className="flex-1 bg-transparent outline-none"
            type="Search"
            placeholder="Search Reddit"
            onChange={handleSearchChange}
          />
          <button type="submit" hidden />
          {searchList && <SearchList data={searchPosts} />}
        </form>

        {/* signin signout button */}
        {session ? (
          <div
            className="flex items-center space-x-2 border border-gray-100 p-2 "
            onClick={() => signOut()}
          >
            <div className="relative h-5 w-5 flex-shrink-0">
              <Image
                objectFit="contain"
                src="https://links.papareact.com/23l"
                layout="fill"
                alt=""
              />
            </div>

            <div className="flex-1 text-xs">
              <p className="truncate">{session?.user?.name}</p>
              <p className="text-gray-400">1 Karma</p>
            </div>

            <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
          </div>
        ) : (
          <div
            className="flex items-center space-x-2 border border-gray-100 p-2 "
            onClick={() => signIn()}
          >
            <div className="relative h-5 w-5 flex-shrink-0">
              <Image
                objectFit="contain"
                src="https://links.papareact.com/23l"
                layout="fill"
                alt=""
              />
            </div>
            <p className="text-gray-400">Sign In</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
