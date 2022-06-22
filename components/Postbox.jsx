import React, { useState } from "react";
import { useSession } from "next-auth/react";
import Avatar from "./Avatar";
import { PhotographIcon, LinkIcon } from "@heroicons/react/outline";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRecoilState } from "recoil";
import fetchPostsAtom from "../atoms/fetchPosts.atom";

function Postbox({ topic }) {
  const { data: session } = useSession();
  const [imageBoxOpen, setImageBoxOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [fetchPosts, setFetchPosts] = useRecoilState(fetchPostsAtom);

  const onSubmit = handleSubmit(async (formData) => {
    formData["userName"] = session?.user?.name;
    formData["userImage"] = session?.user?.image;
    if(topic)formData["subreddit"] = topic
    formData['comments'] = ["hey"]
    formData['votes'] = 0;
    console.log(formData);
    try {
      await axios.post("/api/post/create", formData);
      setFetchPosts(!fetchPosts);
      alert("Posted successfully");
    } catch (error) {
      console.log(error);
    }
  });
  return (
    <form
      onSubmit={onSubmit}
      className="sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2"
    >
      <div className="flex items-center space-x-3">
        <Avatar />
        <input
          {...register("postTitle", { required: true })}
          type="text"
          placeholder={
            session
              ? topic
                ? `Create a post in r/${topic}`
                : "Create a Post"
              : "Sign in to post"
          }
          disabled={!session}
          className="bg-gray-50 p-2 pl-5 outline-none flex-1"
        />
        <PhotographIcon
          onClick={() => setImageBoxOpen(!imageBoxOpen)}
          className={`h-6 text-gray-300 cursor-pointer ${
            imageBoxOpen && "text-blue-300"
          }`}
        />
        <LinkIcon className="h-6 text-gray-300" />
      </div>

      {!!watch("postTitle") && (
        <div className="flex flex-col py-2">
          {/* body */}
          <div className="flex items-center px-2">
            <p className="min-w-[90px]">Body:</p>
            <input
              {...register("postBody")}
              className="m-2 flex-1 bg-blue-50 p-2 outline-none"
              type="text"
              placeholder="Text (optional)"
            />
          </div>

          {!topic && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Subreddit:</p>
              <input
                {...register("subreddit", { required: true })}
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                type="text"
                placeholder="i.e. reactjs"
              />
            </div>
          )}

          {imageBoxOpen && (
            <div className="flex items-center px-2">
              <p className="min-w-[90px]">Image URL:</p>
              <input
                {...register("postImage")}
                className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                type="text"
                placeholder="Optional..."
              />
            </div>
          )}

          {/* errors */}
          {Object.keys(errors).length > 0 && (
            <div className="space-y-2 p-2 text-red-500">
              {errors.postTitle?.type === "required" && (
                <p>A post Title is required</p>
              )}
              {errors.subreddit?.type === "required" && (
                <p>A Subreddit is required</p>
              )}
            </div>
          )}

          {!!watch("postTitle") && (
            <button
              type="submit"
              className="w-full rounded-full bg-blue-400 p-2 text-white"
            >
              Create Post
            </button>
          )}
        </div>
      )}
    </form>
  );
}

export default Postbox;
