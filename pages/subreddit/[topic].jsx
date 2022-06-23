import { useRouter } from "next/router";
import React from "react";
import Avatar from "../../components/Avatar";
import PostBox from "../../components/Postbox";
import Feed from "../../components/Feed";

function topic() {
  const {
    query: { topic },
  } = useRouter();
  return (
    <div className={`h-24 bg-red-400 p-2 sm:p-8`}>
      <div className="mt-10 bg-white rounded-md">
        <div className="mx-auto flex max-w-5xl items-center space-x-4 pb-3">
          <div className="-mt-5">
            <Avatar seed={topic} large />
          </div>
          <div className="py-2">
            <h1 className="text-3xl font-semibold">
              Welcome to the r/{topic} subreddit
            </h1>
            <p className="text-sm text-gray-400">r/{topic}</p>
          </div>
        </div>
      </div>

      {topic && (
        <div className="mx-auto max-w-5xl mt-5 pb-10">
          <PostBox topic={topic} />
          <Feed topic={topic} />
        </div>
      )}
    </div>
  );
}

export default topic;
