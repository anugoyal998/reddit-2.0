import React from "react";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BookmarkIcon,
  ChatAltIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  GiftIcon,
  ShareIcon,
} from "@heroicons/react/outline";
import Avatar from "./Avatar";
import TimeAgo from "react-timeago";
import IMG from "./img";
import Link from "next/link";

function Post({ post }) {
  return (
    <Link href={`/post/${post?._id}`}>
      <div className="flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border-gray-600">
        {/* votes */}
        <div className="flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400">
          <ArrowUpIcon className="voteButtons hover:text-red-400" />
          <p className="text-black  font-bold text-xs">0</p>
          <ArrowDownIcon className="voteButtons hover:text-blue-400" />
        </div>

        <div className="p-3 pb-1">
          {/* header */}
          <div className="flex items-center space-x-2">
            <Avatar seed={post.subreddit} />
            <div>
              <Link href={`/subreddit/${post?.subreddit}`}>
                <span className="font-bold text-black hover:text-blue-400 hover:underline">
                  r/{post.subreddit}
                </span>
              </Link>
              <p className="text-xs text-gray-400">
                {" "}
                . Posted by u/{post.userName} <TimeAgo date={post.createdAt} />
              </p>
            </div>
          </div>
          {/* Body */}
          <div className="py-4">
            <h2 className="text-xl font-semibold">{post.postTitle}</h2>
            <p className="mt-2 text-sm font-light">{post?.postBody}</p>
          </div>
          {/* Image */}
          <img
            // className="w-[90%]"
            src={post.postImage ? post.postImage : IMG}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
}

export default Post;
