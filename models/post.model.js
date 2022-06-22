import { Schema, model, models } from "mongoose";

const postSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: true,
    },
    postBody: String,
    postImage: String,
    subreddit: String,
    userName: {
      type: String,
      required: true,
    },
    userImage: String,
    comments: {
      type: Array,
      default: [""]
    },
    votes: Number,
  },
  { timestamps: true }
);

const postModel = models.postSchema || model("postSchema", postSchema);
export default postModel;
