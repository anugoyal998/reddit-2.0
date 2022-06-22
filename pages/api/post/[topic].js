import dbConnect from '../../../db'
import PostModel from '../../../models/post.model'

const handler = async (req,res)=> {
    try {
        const { topic } = req.query
        let data = [];
        if(topic == "*")data = await PostModel.find({});
        else data = await PostModel.find({subreddit: topic})
        data?.reverse()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json({data: "error"})
    }
}

export default dbConnect(handler)