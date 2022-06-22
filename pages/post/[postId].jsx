import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "../../components/Post";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

function postId() {
  const {
    query: { postId },
  } = useRouter();
  const { data: session } = useSession();
  const [post, setPost] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  console.log(post)
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios.get(`/api/post/id/${postId}`);
        setPost(data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    postId && fetch();
  }, [postId]);
  // const onSubmit = async (data) => {
  //   try {
  //     await axios.post('/api/post/addComment',{id: postId, comment: data['comment']})
  //     alert('comment added successfully')
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };
  if (!post) return <div></div>;
  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />
      {/* <div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16">
        <p className="text-sm">
          Comment as <span className="text-red-500">{session?.user?.name}</span>
        </p> */}

        {/* <form
          className="flex flex-col space-y-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <textarea
            {...register("comment")}
            disabled={!session}
            className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disable:bg-gray-50"
            placeholder={
              session ? "What are your thoughts" : "Please sign in to comment"
            }
          />
          <button
            type="submit"
            className="rounded-full bg-red-500 font-semibold text-white disable:bg-gray-200 p-3"
          >
            Comment
          </button>
        </form> */}
      {/* </div> */}
    </div>
  );
}

export default postId;
