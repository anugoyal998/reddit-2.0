import dbConnect from "../../../db";
import PostModel from "../../../models/post.model";

const handler = async (req, res) => {
  try {
    const { search } = req.body;
    const response = await PostModel.find({
      subreddit: search,
      title: search,
      body: search,
    });
    res.status(200).json(response)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ data: "error" });
  }
};

export default dbConnect(handler);
