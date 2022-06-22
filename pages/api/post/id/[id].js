import dbConnect from '../../../../db'
import PostModel from '../../../../models/post.model'

const handler = async (req,res)=> {
    try {
        const { id } = req.query
        let data = await PostModel.find({_id: id});
        res.status(200).json(data?.[0])
    } catch (error) {
        console.log(error)
        return res.status(500).json({data: "error"})
    }
}

export default dbConnect(handler)