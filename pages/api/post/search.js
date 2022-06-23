import dbConnect from "../../../db";
import PostModel from "../../../models/post.model";

const handler = async (req, res) => {
  try {
    const { search } = req.body;
    let response = await PostModel.find({});
    response = response.filter(
      (e) =>
        e?.postTitle?.toLowerCase()?.includes(search.toLowerCase()) ||
        e?.postBody?.toLowerCase()?.includes(search.toLowerCase()) ||
        e?.subreddit?.toLowerCase()?.includes(search.toLowerCase())
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ data: "error" });
  }
};

export default dbConnect(handler);
