import Link from "next/link";
import React from "react";
import IMG from "./img";

function SearchList({ data }) {
  if (data?.length <= 0) return <div></div>;
  return (
    <div className="absolute z-50 bg-gray-100 w-full top-16 -left-2 shadow-md  py-3 rounded-sm">
      {data?.map((e) => {
        return (
          <Link
            href={`/post/${e?._id}`}
            key={e?._id}
          >
            <div className="flex items-center p-3 space-x-3 cursor-pointer hover:bg-slate-200">
              <img src={e?.postImage ? e?.postImage : IMG} className="w-12" />
              <div>
                <Link href={`/subreddit/${e?.subreddit}`}>
                  <p className="font-bold hover:text-blue-400 ">
                    r/{e?.subreddit}
                  </p>
                </Link>
                <p>{e?.postTitle}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SearchList;
