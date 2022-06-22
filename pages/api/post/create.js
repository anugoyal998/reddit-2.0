import dbConnect from '../../../db'
import PostModel from '../../../models/post.model'

const handler = async (req,res)=> {
    try {
        let data = req.body
        data['comments'] = [""]
        const post = new PostModel(data)
        await post.save()
        return res.status(200).json({data: "success"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({data: "error"})
    }
}

export default dbConnect(handler)